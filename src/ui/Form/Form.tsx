import { FormHTMLAttributes, ReactNode } from 'react';
import styles from './Form.module.scss';
import { FormContext, FormContextValue } from './Form.utils';

export interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
	children: ReactNode;
	formProps: FormContextValue;
}

export default function Form({ children, formProps, ...props }: FormProps) {
	return (
		<form {...props} className={styles.form}>
			<FormContext.Provider value={formProps}>{children}</FormContext.Provider>
		</form>
	);
}
