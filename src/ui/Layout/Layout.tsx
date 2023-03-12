import { ReactNode } from 'react';
import Sidebar from '../Sidebar';
import styles from './Layout.module.scss';

export interface LayoutProps {
	children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
	return (
		<main className={styles.main}>
			<Sidebar />
			<div className={styles.content}>{children}</div>
		</main>
	);
}
