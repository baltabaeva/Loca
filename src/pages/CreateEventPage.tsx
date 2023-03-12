import { CreateEventForm } from '../modules/event';
import { Section } from '../ui';

export default function CreateEventPage() {
	return (
		<Section title="Создать событие">
			<CreateEventForm />
		</Section>
	);
}
