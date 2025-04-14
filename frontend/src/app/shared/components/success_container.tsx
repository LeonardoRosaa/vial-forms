import Section from "@/app/shared/components/section";
import Link from "next/link";
import styles from './success_container.module.css'

export default function SucccessContainer({ message, action, link }: { message: string, link: string, action: string }) {
    return (
        <Section>
            <h1>Thanks!</h1>
            <p className={styles.message}>{message}</p>
            <Link className={styles.link} href={link}>{action}</Link>
        </Section>
    );
}