import { Checkbox, MenuItem, Select as SelectMui, SelectProps as SelectMuiProps } from '@mui/material';
import { useContext } from 'react';
import { Controller } from 'react-hook-form';
import { FormContext } from '../Form';

export type SelectProps = SelectMuiProps & {
	defaultValue?: unknown;
	name: string;
	options: { label: string; value: string }[];
};

export default function Select({ defaultValue, name, options, ...props }: SelectProps) {
	const { control } = useContext(FormContext);

	return (
		<Controller
			control={control}
			defaultValue={defaultValue}
			name={name}
			render={({ field: { onChange, value } }) => (
				<SelectMui
					{...props}
					onChange={onChange}
					renderValue={(vals: string[]) =>
						props.multiple
							? vals.map((val) => options.find((option) => option.value === val)?.label).join(', ')
							: vals
					}
					value={value}
				>
					{options.map((option) => (
						<MenuItem key={option.value} value={option.value}>
							<Checkbox checked={value.includes(option.value)} />
							{option.label}
						</MenuItem>
					))}
				</SelectMui>
			)}
		/>
	);
}
