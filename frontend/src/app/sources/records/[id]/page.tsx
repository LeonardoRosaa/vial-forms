'use client'

import { useEffect, useState } from "react";

import Section from "../../../shared/components/section";
import { findOneForm } from "@/app/forms/FormsAPI";
import { IForm } from "@/app/forms/Form";
import { useParams, useRouter } from "next/navigation";
import InputField from "./components/input_field";
import styles from './page.module.css'
import { storeSource } from "../../SourcesAPI";

function SourceRecordMessage({ message }: { message: string }) {
    return (
        <Section action={<button type="submit" form="forms">SUBMIT</button>}>
            <div className="message-container">
                <p>{message}</p>
            </div>
        </Section>
    )
}

export default function SourceRecordPage() {
    const params = useParams<{ id: string }>()
    const [state, setState] = useState<IState<IForm | null>>({
        loading: true,
        error: false,
        data: null
    })
    const [source, setSource] = useState<Map<String, String>>(new Map())
    const router = useRouter()

    const onChange = (question: string, answer: string) => setSource(new Map(source.set(question, answer)))  
    
    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        try {
            await storeSource(params.id, source)

            router.push(`/sources/success/${params.id}`)
        } catch(err) {
            setState({
                loading: false,
                data: state.data,
                error: true
            })
        }
    }
    useEffect(() => {
        const fetchData = async () => {
            try {
                const form = await findOneForm(params.id)
                setState({
                    loading: false,
                    data: form,
                    error: false,
                })
            } catch (err) {
                setState({
                    loading: false,
                    error: true,
                    data: null
                })
            }
        }

        fetchData()
    }, []);

    if (state.loading) {
        return <SourceRecordMessage message="Loading..." />
    } else if (state.error) {
        return <SourceRecordMessage message="Something went wrong" />

    } else if (!state.data) {
        return <SourceRecordMessage message="Your form will appear here" />
    }

    return (
        <Section action={<button type="submit" form="forms">SUBMIT</button>}>
            <h1 className={styles.title}>{state.data.name}</h1>
            <form id="forms" onSubmit={onSubmit} className={styles.form}>
                {
                    [...state.data.fields.keys()].map(key => <InputField key={key.toString()} onChange={onChange} field={state.data?.fields.get(key)!} />)
                }
            </form>
        </Section>
    )
}