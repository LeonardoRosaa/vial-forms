import { ICreateForm } from "./CreateFormModel";
import { IForm } from "./Form";
import { IField } from "./Field";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export async function storeForm(form: ICreateForm): Promise<void> {
    const json = {
        name: form.name,
        fields: Object.fromEntries(form.fields)
    };

    await fetch(`${BASE_URL}/form`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(json)
    });
}

export async function findAllForms(): Promise<IForm[]> {
    const response = await fetch(`${BASE_URL}/form`);

    if (!response.ok) {
        throw new Error(`Failed to fetch forms: ${response.statusText}`);
    }

    const data = await response.json();
    return data['data'] as IForm[];
}

export async function findOneForm(id: string): Promise<IForm> {
    const response = await fetch(`${BASE_URL}/form/${id}`);

    if (!response.ok) {
        throw new Error(`Failed to fetch form ${id}: ${response.statusText}`);
    }

    const raw = (await response.json())['data'];

    return {
        ...raw,
        fields: new Map<string, IField>(Object.entries(raw.fields))
    };
}