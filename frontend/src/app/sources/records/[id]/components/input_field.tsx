import { IField } from "@/app/forms/Field";
import { FormTextType } from "@/app/forms/FormType";

export default function InputField({ field, onChange }: { field: IField, onChange: (question: string, answer: string) => void }) {

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => onChange(field.question, e.target.value)

    const handleOnChangeTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => onChange(field.question, e.target.value)

    return (
        <div className="display-flex flex-direction-column">
            <label>{field.question}{field.required ? <span>*</span> : <></>}</label>
            {
                field.type == FormTextType.textarea ? <textarea required={field.required}
                    onChange={handleOnChangeTextArea} rows={5} /> : <input type={field.type} required={field.required}
                        onChange={handleOnChange} />
            }

        </div>
    )
}