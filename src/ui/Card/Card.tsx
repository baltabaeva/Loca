import { ReactNode } from 'react';
import styles from './Card.module.scss';

export interface CardProps {
	children: ReactNode;
	padding?: number;
}

export default function Card({ children, padding = 1 }: CardProps) {
	return (
		<div className={styles.container} style={{ padding: padding + 'em' }}>
			{children}
		</div>
	);
}
