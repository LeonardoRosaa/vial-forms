'use client'

import { useEffect, useState } from "react";
import { findAllForms } from "../FormsAPI";
import { IForm } from "../Form";
import Link from "next/link";
import Section from "../../shared/components/section";
import styles from './page.module.css'

function ListFormsMessage({ message }: { message: string }) {
    return (
        <Section action={<Link href="/forms/create">CREATE</Link>}>
            <div className="message-container">
                <p>{message}</p>
            </div>
        </Section>
    )
}

export default function ListFormsPage() {
    const [state, setState] = useState<IState<IForm[]>>({
        loading: true,
        error: false,
        data: []
    })

    useEffect(() => {
        const fetchData = async () => {
            try {
                const forms = await findAllForms()
                setState({
                    loading: false,
                    data: forms,
                    error: false,
                })
            } catch (err) {
                console.error(err)
                setState({
                    loading: false,
                    data: [],
                    error: true,
                })
            }
        }

        fetchData()
    }, []);

    if (state.loading) {
        return <ListFormsMessage message="Loading..." />
    } else if (state.error) {
        return <ListFormsMessage message="Something went wrong" />

    } else if (!state.data) {
        return <ListFormsMessage message="Your forms will appear here" />
    }

    return (
        <Section action={<Link href="/forms/create">CREATE</Link>}>
            <div className={styles.list}>
                {
                    state.data.map((e) => <Link key={e.id} href={`/sources/records/${e.id}`}>{e.name}</Link>)
                }
            </div>
        </Section>
    )
}