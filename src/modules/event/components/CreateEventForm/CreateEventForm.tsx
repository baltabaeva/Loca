import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { Tag } from '../../../../common/interfaces';
import { Button, Card, Form, Input, Select } from '../../../../ui';
import { useEventTagsQuery } from '../../../tag';
import { useCreateEventMutation } from '../../api/event.api';	

const mockedTags: Tag[] = [
	{ id: '1', name: 'Тег 1' },
	{ id: '2', name: 'Тег 2' },
	{ id: '3', name: 'Тег 3' },

];

export default function CreateEventForm() {
	const formProps = useForm();
	const [createEvent, { isLoading: creating }] = useCreateEventMutation();
	const { data: tags = mockedTags, isLoading } = useEventTagsQuery();

	const tagsOptions = useMemo(
		() =>
			tags.map((v) => ({
				label: v.name,
				value: v.id,
			})),
		[tags],
	);

	if (isLoading) {
		return <p>Загрузка...</p>;
	}

	return (
		<Card padding={1.5}>
			<Form formProps={formProps} onSubmit={formProps.handleSubmit(createEvent as any)}>
				<Input label="Название" name="name" required />
				<Input label="Описание" name="description" required />
				<Input label="Дата начала" name="date_start" required shrink type="date" />
				<Input label="Дата окончания" name="date_end" required shrink type="date" />
				<Input label="Время начала" name="time_start" required shrink type="time" />
				<Input label="Время окончания" name="time_end" required shrink type="time" />
				<Select defaultValue={[]} multiple name="tags" options={tagsOptions} />
				<Button loading={creating} type="submit">
					Отправить
				</Button>
			</Form>
		</Card>
	);
}
