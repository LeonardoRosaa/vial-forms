import Link from "next/link";
import { ReactNode } from "react";
import styles from './section.module.css'

interface ISectionsProps {
    children: ReactNode | ReactNode[];
    action?: ReactNode | ReactNode[];
}

export default function Section({ children, action }: ISectionsProps) {

    return (
        <main>
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.header}>
                        <Link href="/"><h1>FORMS</h1></Link>
                        {action}
                    </div>
                    {children}
                </div>
            </section>
        </main>
    )
}