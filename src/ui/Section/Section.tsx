import { ReactNode } from 'react';
import styles from './Section.module.scss';

export interface SectionProps {
	children: ReactNode;
	title: string;
}

export default function Section({ children, title }: SectionProps) {
	return (
		<section className={styles.section}>
			<h1 className={styles.title}>{title}</h1>
			{children}
		</section>
	);
}
