import {ReactNode} from 'react';
import styles from './Layout.module.scss';
import Sidebar from "../Sidebar";

export interface LayoutProps {
    children: ReactNode;
    isSidebar?: boolean;
}

export default function Layout({children, isSidebar = true}: LayoutProps) {
    return (
        <main className={styles.main}>
            <Sidebar/>
            <div className={styles.content}>{children}</div>
        </main>
    );
}

