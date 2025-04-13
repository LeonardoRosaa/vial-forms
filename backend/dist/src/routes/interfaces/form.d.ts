export interface IFormField {
    type: 'text' | 'date' | 'number';
    question: string;
    required: boolean;
}
export interface ICreateForm {
    name: string;
    fields: {
        [key: string]: IFormField;
    };
}
//# sourceMappingURL=form.d.ts.map