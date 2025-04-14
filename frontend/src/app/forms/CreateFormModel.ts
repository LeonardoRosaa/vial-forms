import { IField } from "./Field"

interface ICreateForm {
    name: string
    fields: Map<string, IField>
}

export type { ICreateForm }
