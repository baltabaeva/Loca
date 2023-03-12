import { ReactNode } from 'react';
import styles from './Button.module.scss';

export interface ButtonProps {
	children: ReactNode;
	loading?: boolean;
	onClick?: () => void;
	type: 'button' | 'submit';
}

export default function Button({ children, loading, onClick, type }: ButtonProps) {
	return (
		<button className={styles.container} onClick={loading ? undefined : onClick} type={loading ? 'button' : type}>
			{children}
		</button>
	);
}
