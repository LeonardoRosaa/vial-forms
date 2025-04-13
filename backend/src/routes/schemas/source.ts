export const CreateSourceSchema = {
    description: 'Create a source record',
    tags: ['Source'],
    response: {
        200: {
            description: 'Successful response with created source',
            type: 'object',
            properties: {
                statusCode: { type: 'integer', example: 200 },
                data: {
                    type: 'object',
                    properties: {
                        id: {
                            type: 'string',
                            format: 'uuid',
                            example: 'abcdfba0-b554-4095-bdca-b0104bb0f24d'
                        },
                        formId: {
                            type: 'string',
                            format: 'uuid',
                            example: 'c42db1bd-7a32-44d9-949b-907739124e27'
                        }
                    }
                },
                message: { type: 'string', example: 'success' }
            }
        }
    },
    body: {
        type: 'object',
        required: ['formId', 'sources'],
        properties: {
            formId: { type: 'string', format: 'uuid', },
            sources: {
                type: 'array',
                items: {
                    type: 'object',
                    required: ['question', 'answer'],
                    properties: {
                        question: {
                            type: 'string',
                            maxLength: 250,
                        },
                        answer: {
                            type: 'string',
                            maxLength: 250,
                        }
                    }
                }

            }
        },
    },
}