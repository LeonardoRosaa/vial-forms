import { Suspense } from "react";
import { findAllForms } from "../FormsAPI";
import Link from "next/link";
import Section from "../../shared/components/section";
import styles from './page.module.css'
import { ErrorBoundary } from "react-error-boundary";

function Message({ message }: { message: string }) {
    return (
        <div className="message-container">
            <p>{message}</p>
        </div>
    )
}

async function List() {
    const forms = await findAllForms()

    return forms.length == 0 ? <Message message="The forms will appear here" /> : (
        <div className={styles.list}>
            {
                forms.map((e) => <Link key={e.id} href={`/sources/records/${e.id}`}>{e.name}</Link>)
            }
        </div>
    )
}

export default function Page() {
    return (
        <Section action={<Link href="/forms/create">CREATE</Link>}>
            <ErrorBoundary fallback={<Message message="Something went wrong" />}>
                <Suspense fallback={<Message message="Loading..." />}>
                    <List />
                </Suspense>
            </ErrorBoundary>
        </Section>
    )
}