import { TextField, TextFieldProps } from '@mui/material';
import { useContext } from 'react';
import { FormContext } from '../Form';

export type InputProps = TextFieldProps & {
	name: string;
	shrink?: boolean;
};

export default function Input({ name, shrink, ...props }: InputProps) {
	const { register } = useContext(FormContext);

	return <TextField {...props} {...register(name)} InputLabelProps={{ shrink }} name={name} />;
}
