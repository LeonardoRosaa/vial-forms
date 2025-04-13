export declare const CreateSourceSchema: {
    description: string;
    tags: string[];
    response: {
        200: {
            description: string;
            type: string;
            properties: {
                statusCode: {
                    type: string;
                    example: number;
                };
                data: {
                    type: string;
                    properties: {
                        id: {
                            type: string;
                            format: string;
                            example: string;
                        };
                        formId: {
                            type: string;
                            format: string;
                            example: string;
                        };
                    };
                };
                message: {
                    type: string;
                    example: string;
                };
            };
        };
    };
    body: {
        type: string;
        required: string[];
        properties: {
            formId: {
                type: string;
                format: string;
            };
            sources: {
                type: string;
                items: {
                    type: string;
                    required: string[];
                    properties: {
                        question: {
                            type: string;
                            maxLength: number;
                        };
                        answer: {
                            type: string;
                            maxLength: number;
                        };
                    };
                };
            };
        };
    };
};
//# sourceMappingURL=source.d.ts.map