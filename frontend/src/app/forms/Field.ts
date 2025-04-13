import { FormTextType } from "./FormType"

export interface IField {
    question: string
    required: boolean
    type: FormTextType
}