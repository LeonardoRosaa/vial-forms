"use client";

import CreateFormField from "./components/CreateFormField";
import { useEffect, useState } from "react";
import { FormTextType } from "../FormType";
import { storeForm } from "../FormsAPI";
import { IField } from "../Field";
import Section from "@/app/shared/components/section";
import styles from './page.module.css';
import { IState } from "@/app/shared/interfaces/state";
import { useRouter } from "next/navigation";

function CreateFormMessage({ error }: { error: boolean }) {
    return error ? (<p className="error-message">Sorry, something went wrong :/</p>) : (<></>)
}

export default function CreateForm() {
    const [fields, setFields] = useState(new Map<string, IField>())
    const [formName, setFormName] = useState("")
    const [disabledToAddition, setDisabledToAddition] = useState(false)
    const [disabledToSubmit, setDisabledToSubmit] = useState(true)
    const [state, setState] = useState<IState<boolean>>({
        loading: false,
        data: false,
        error: false,
    })
    const router = useRouter()


    useEffect(() => {
        setDisabledToAddition(fields.size == 0 ? false : [...fields.keys()].every((key) => {
            return fields.get(key)?.question == "";
        }))
    }, [fields])

    useEffect(() => {
        setDisabledToSubmit(fields.size == 0 || disabledToAddition || formName == "")
    }, [formName, disabledToAddition, fields])

    function onAdd() {
        setFields(new Map(fields.set(`field-${fields.size}`, { question: "", type: FormTextType.text, required: false, },),),)
    }

    function onChange(id: string, e: IField) {
        setFields(new Map(fields.set(id, e)))
    }

    function onDelete(id: string) {
        fields.delete(id)

        setFields(new Map(fields))
    }

    async function onSubmit() {
        try {
            await storeForm({
                name: formName,
                fields: fields
            })

            router.push('/forms/success')
        } catch (err) {
            console.error(err)
            setState({
                loading: false,
                error: true,
                data: false,
            })
        }
    }

    return (
        <Section action={<button onClick={onSubmit} disabled={disabledToSubmit}>PUBLISH</button>} >
            <CreateFormMessage error={state.error} />

            <form className={styles.form}>
                <input maxLength={250} className={styles.title} type="text" onChange={e => setFormName(e.target.value)} placeholder="Form title" />
                {
                    [...fields.keys()].map(key => <CreateFormField key={key} id={key} onChange={onChange} onDelete={onDelete} />)
                }
            </form>
            <button onClick={onAdd} disabled={disabledToAddition}>Add a field</button>
        </Section>
    );
}