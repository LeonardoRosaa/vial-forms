import { useEffect, useState } from "react"
import { FormTextType } from "../../FormType"
import { IField } from "../../Field"
import styles from './CreateFormField.module.css'

interface ICreateFormFieldProps {
    id: string,
    onChange: (id: string, value: IField) => void
    onDelete: (id: string) => void
}

export default function CreateFormField({ id, onChange, onDelete }: ICreateFormFieldProps) {
    const [question, setQuestion] = useState("")
    const [type, setType] = useState("text")
    const [required, setRequired] = useState(false)

    useEffect(() => {
        onChange(id, {
            question,
            required,
            type: FormTextType[type as keyof typeof FormTextType]
        })
    }, [question, type, required])

    const handleQuestion = (e: React.ChangeEvent<HTMLInputElement>) => setQuestion(e.target.value)

    const handleType = (e: React.ChangeEvent<HTMLSelectElement>) => setType(e.target.value)

    const handleRequired = (e: React.ChangeEvent<HTMLInputElement>) => setRequired(e.target.checked)

    return (
        <div className={styles.formFieldContainer}>
            <div className={styles.fields}>
                <input maxLength={250} type="text" value={question} onChange={handleQuestion} placeholder="Type a question here" />
                <select value={type} onChange={handleType}>
                    <option value="text">text</option>
                    <option value="textarea">long text</option>
                    <option value="number">number</option>
                    <option value="date">date</option>
                </select>
            </div>
            <div className={styles.details}>
                <label className={styles.checkbox}>
                    <input type="checkbox" onChange={handleRequired}></input>
                    <span>Required</span>
                </label>
                <div className={styles.deleteContainer}>
                    <button className={styles.deleteButton} onClick={() => onDelete(id)}>Delete</button>
                </div>
            </div>

        </div>
    )
}