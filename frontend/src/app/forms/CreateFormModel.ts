import { IField } from "./Field"
import { FormTextType } from "./FormType"

interface ICreateForm {
    name: string
    fields: Map<string, IField>
}

export type { ICreateForm }
