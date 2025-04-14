import { IField } from "./Field";

export interface IForm {
    id: string,
    name: string,
    fields: Map<string, IField>
}