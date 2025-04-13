export declare const CreateFormSchema: {
    tags: string[];
    description: string;
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
            name: {
                type: string;
            };
            fields: {
                type: string;
                patternProperties: {
                    '^.*$': {
                        type: string;
                        required: string[];
                        properties: {
                            type: {
                                type: string;
                                enum: string[];
                            };
                            question: {
                                type: string;
                                maxLength: number;
                            };
                            required: {
                                type: string;
                            };
                        };
                    };
                };
            };
        };
    };
};
export declare const FindAllFormsSchema: {
    tags: string[];
    description: string;
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
                    items: {
                        type: string;
                        properties: {
                            id: {
                                type: string;
                                format: string;
                                example: string;
                            };
                            name: {
                                type: string;
                                example: string;
                            };
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
};
export declare const FindFormSchema: {
    tags: string[];
    description: string;
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
                        name: {
                            type: string;
                            example: string;
                        };
                        fields: {
                            type: string;
                            additionalProperties: {
                                type: string;
                                properties: {
                                    type: {
                                        type: string;
                                        example: string;
                                    };
                                    question: {
                                        type: string;
                                        example: string;
                                    };
                                    required: {
                                        type: string;
                                        example: boolean;
                                    };
                                };
                            };
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
    params: {
        type: string;
        required: string[];
        properties: {
            id: {
                type: string;
                format: string;
            };
        };
    };
};
//# sourceMappingURL=form.d.ts.map