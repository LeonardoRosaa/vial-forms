'use client'

import Section from "@/app/shared/components/section";
import Link from "next/link";
import styles from './page.module.css'
import { useParams } from "next/navigation";

export default function SourceRecordsSuccessPage() {
    const params = useParams<{ id: string }>()
    return (
        <Section>
            <h1>Thanks!</h1>
            <p className={styles.message}>Your reply has been recorded</p>
            <Link className={styles.link} href={`/sources/records/${params.id}`}>Submit another answer</Link>
        </Section>
    );
}