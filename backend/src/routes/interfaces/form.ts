export interface IFormField {
    type: 'text' | 'date' | 'number' | 'textarea'
    question: string
    required: boolean
}

export interface ICreateForm {
    name: string
    fields: { [key: string]: IFormField }
}