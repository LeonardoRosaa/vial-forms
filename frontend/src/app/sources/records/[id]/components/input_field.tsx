import { IField } from "@/app/forms/Field";

export default function InputField({ field, onChange }: { field: IField, onChange: (question: string, answer: string) => void }) {

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => onChange(field.question, e.target.value)

    return (
        <div>
            <label>{field.question}{field.required ? <span>*</span> : <></>}</label>
            <input type={field.type} required={field.required}
                onChange={handleOnChange} />
        </div>
    )
}