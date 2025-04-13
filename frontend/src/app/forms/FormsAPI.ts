import axios from "axios";
import { ICreateForm } from "./CreateFormModel";
import { IForm } from "./Form";
import { IField } from "./Field";

export async function storeForm(form: ICreateForm): Promise<void> {
    const json = {
        name: form.name,
        fields: Object.fromEntries(form.fields)
    };

    return axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/form`, json)
}

export async function findAllForms(): Promise<IForm[]> {
    const forms = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/form`)

    return forms.data['data'] as IForm[]
}

export async function findOneForm(id: string): Promise<IForm> {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/form/${id}`)
    const raw = response.data['data']

    return {
        ...raw,
        fields: new Map<string, IField>(Object.entries(raw.fields))
    }
}