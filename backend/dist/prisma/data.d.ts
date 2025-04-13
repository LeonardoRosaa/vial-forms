export declare const getSeedData: () => Promise<{
    formData: {
        id: `${string}-${string}-${string}-${string}-${string}`;
        name: string;
        fields: {
            'field-1': {
                type: string;
                question: string;
                required: boolean;
            };
            'field-2': {
                type: string;
                question: string;
                required: boolean;
            };
            'field-3': {
                type: string;
                question: string;
                required: boolean;
            };
            'field-4': {
                type: string;
                question: string;
                required: boolean;
            };
        };
    }[];
    sourceRecordData: {
        id: `${string}-${string}-${string}-${string}-${string}`;
        formId: `${string}-${string}-${string}-${string}-${string}`;
    }[];
    sourceData: {
        id: `${string}-${string}-${string}-${string}-${string}`;
        sourceRecordId: `${string}-${string}-${string}-${string}-${string}`;
        question: string;
        answer: string;
    }[];
}>;
//# sourceMappingURL=data.d.ts.map