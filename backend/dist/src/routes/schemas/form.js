"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFormSchema = exports.FindAllFormsSchema = exports.CreateFormSchema = void 0;
exports.CreateFormSchema = {
    tags: ['Form'],
    description: 'Create a form',
    response: {
        200: {
            description: 'Successful response with created form',
            type: 'object',
            properties: {
                statusCode: { type: 'integer', example: 200 },
                data: {
                    type: 'object',
                    properties: {
                        id: {
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
        required: ['name', 'fields'],
        properties: {
            name: { type: 'string' },
            fields: {
                type: 'object',
                patternProperties: {
                    '^.*$': {
                        type: 'object',
                        required: ['type', 'question', 'required'],
                        properties: {
                            type: { type: 'string', enum: ['text', 'date', 'number'] },
                            question: {
                                type: 'string', maxLength: 250,
                            },
                            required: { type: 'boolean' }
                        },
                    }
                },
            }
        },
    }
};
exports.FindAllFormsSchema = {
    tags: ['Form'],
    description: 'Find all forms',
    response: {
        200: {
            description: 'Successful response with all forms',
            type: 'object',
            properties: {
                statusCode: { type: 'integer', example: 200 },
                data: {
                    type: 'array',
                    items: {
                        type: 'object',
                        properties: {
                            id: {
                                type: 'string',
                                format: 'uuid',
                                example: 'c42db1bd-7a32-44d9-949b-907739124e27'
                            },
                            name: {
                                type: 'string',
                                example: 'Vial Form Example'
                            }
                        }
                    }
                },
                message: { type: 'string', example: 'success' }
            }
        }
    }
};
exports.FindFormSchema = {
    tags: ['Form'],
    description: 'Find a form',
    response: {
        200: {
            description: 'Successful response with form data',
            type: 'object',
            properties: {
                statusCode: { type: 'integer', example: 200 },
                data: {
                    type: 'object',
                    properties: {
                        id: { type: 'string', format: 'uuid', example: 'e7e167e7-7ee6-4d66-a0df-1676dd2ee8e8' },
                        name: { type: 'string', example: 'Vial Form Example' },
                        fields: {
                            type: 'object',
                            additionalProperties: {
                                type: 'object',
                                properties: {
                                    type: { type: 'string', example: 'text' },
                                    question: { type: 'string', example: 'First Name?' },
                                    required: { type: 'boolean', example: true }
                                }
                            }
                        }
                    }
                },
                message: { type: 'string', example: 'success' }
            }
        },
    },
    params: {
        type: 'object',
        required: ['id'],
        properties: {
            id: {
                type: 'string',
                format: 'uuid'
            }
        }
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9yb3V0ZXMvc2NoZW1hcy9mb3JtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFhLFFBQUEsZ0JBQWdCLEdBQUc7SUFDOUIsSUFBSSxFQUFFLENBQUMsTUFBTSxDQUFDO0lBQ2QsV0FBVyxFQUFFLGVBQWU7SUFDNUIsUUFBUSxFQUFFO1FBQ1IsR0FBRyxFQUFFO1lBQ0gsV0FBVyxFQUFFLHVDQUF1QztZQUNwRCxJQUFJLEVBQUUsUUFBUTtZQUNkLFVBQVUsRUFBRTtnQkFDVixVQUFVLEVBQUUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUU7Z0JBQzdDLElBQUksRUFBRTtvQkFDSixJQUFJLEVBQUUsUUFBUTtvQkFDZCxVQUFVLEVBQUU7d0JBQ1YsRUFBRSxFQUFFOzRCQUNGLElBQUksRUFBRSxRQUFROzRCQUNkLE1BQU0sRUFBRSxNQUFNOzRCQUNkLE9BQU8sRUFBRSxzQ0FBc0M7eUJBQ2hEO3FCQUNGO2lCQUNGO2dCQUNELE9BQU8sRUFBRSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRTthQUNoRDtTQUNGO0tBQ0Y7SUFDRCxJQUFJLEVBQUU7UUFDSixJQUFJLEVBQUUsUUFBUTtRQUNkLFFBQVEsRUFBRSxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUM7UUFDNUIsVUFBVSxFQUFFO1lBQ1YsSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRTtZQUN4QixNQUFNLEVBQUU7Z0JBQ04sSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsaUJBQWlCLEVBQUU7b0JBQ2pCLE1BQU0sRUFBRTt3QkFDTixJQUFJLEVBQUUsUUFBUTt3QkFDZCxRQUFRLEVBQUUsQ0FBQyxNQUFNLEVBQUUsVUFBVSxFQUFFLFVBQVUsQ0FBQzt3QkFDMUMsVUFBVSxFQUFFOzRCQUNWLElBQUksRUFBRSxFQUFFLElBQUksRUFB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b3JtU2NoZW1hID0ge1xuICB0YWdzOiBbJ0Zvcm0nXSxcbiAgZGVzY3JpcHRpb246ICdDcmVhdGUgYSBmb3JtJyxcbiAgcmVzcG9uc2U6IHtcbiAgICAyMDA6IHtcbiAgICAgIGRlc2NyaXB0aW9uOiAnU3VjY2Vzc2Z1bCByZXNwb25zZSB3aXRoIGNyZWF0ZWQgZm9ybScsXG4gICAgICB0eXBlOiAnb2JqZWN0JyxcbiAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgc3RhdHVzQ29kZTogeyB0eXBlOiAnaW50ZWdlcicsIGV4YW1wbGU6IDIwMCB9LFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgdHlwZTogJ29iamVjdCcsXG4gICAgICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAgICAgaWQ6IHtcbiAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICAgIGZvcm1hdDogJ3V1aWQnLFxuICAgICAgICAgICAgICBleGFtcGxlOiAnYzQyZGIxYmQtN2EzMi00NGQ5LTk0OWItOTA3NzM5MTI0ZTI3J1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbWVzc2FnZTogeyB0eXBlOiAnc3RyaW5nJywgZXhhbXBsZTogJ3N1Y2Nlc3MnIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGJvZHk6IHtcbiAgICB0eXBlOiAnb2JqZWN0JyxcbiAgICByZXF1aXJlZDogWyduYW1lJywgJ2ZpZWxkcyddLFxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgIG5hbWU6IHsgdHlwZTogJ3N0cmluZycgfSxcbiAgICAgIGZpZWxkczoge1xuICAgICAgICB0eXBlOiAnb2JqZWN0JyxcbiAgICAgICAgcGF0dGVyblByb3BlcnRpZXM6IHtcbiAgICAgICAgICAnXi4qJCc6IHtcbiAgICAgICAgICAgIHR5cGU6ICdvYmplY3QnLFxuICAgICAgICAgICAgcmVxdWlyZWQ6IFsndHlwZScsICdxdWVzdGlvbicsICdyZXF1aXJlZCddLFxuICAgICAgICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAgICAgICB0eXBlOiB7IHR5cGU6ICdzdHJpbmcnLCBlbnVtOiBbJ3RleHQnLCAnZGF0ZScsICdudW1iZXInXSB9LFxuICAgICAgICAgICAgICBxdWVzdGlvbjoge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLCBtYXhMZW5ndGg6IDI1MCxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgcmVxdWlyZWQ6IHsgdHlwZTogJ2Jvb2xlYW4nIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgfVxuICAgIH0sXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IEZpbmRBbGxGb3Jtc1NjaGVtYSA9IHtcbiAgdGFnczogWydGb3JtJ10sXG4gIGRlc2NyaXB0aW9uOiAnRmluZCBhbGwgZm9ybXMnLFxuICByZXNwb25zZToge1xuICAgIDIwMDoge1xuICAgICAgZGVzY3JpcHRpb246ICdTdWNjZXNzZnVsIHJlc3BvbnNlIHdpdGggYWxsIGZvcm1zJyxcbiAgICAgIHR5cGU6ICdvYmplY3QnLFxuICAgICAgcHJvcGVydGllczoge1xuICAgICAgICBzdGF0dXNDb2RlOiB7IHR5cGU6ICdpbnRlZ2VyJywgZXhhbXBsZTogMjAwIH0sXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICB0eXBlOiAnYXJyYXknLFxuICAgICAgICAgIGl0ZW1zOiB7XG4gICAgICAgICAgICB0eXBlOiAnb2JqZWN0JyxcbiAgICAgICAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgICAgICAgaWQ6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgICAgICBmb3JtYXQ6ICd1dWlkJyxcbiAgICAgICAgICAgICAgICBleGFtcGxlOiAnYzQyZGIxYmQtN2EzMi00NGQ5LTk0OWItOTA3NzM5MTI0ZTI3J1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBuYW1lOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICAgICAgZXhhbXBsZTogJ1ZpYWwgRm9ybSBFeGFtcGxlJ1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgIH0sXG4gICAgICAgIG1lc3NhZ2U6IHsgdHlwZTogJ3N0cmluZycsIGV4YW1wbGU6ICdzdWNjZXNzJyB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBGaW5kRm9ybVNjaGVtYSA9IHtcbiAgdGFnczogWydGb3JtJ10sXG4gIGRlc2NyaXB0aW9uOiAnRmluZCBhIGZvcm0nLFxuICByZXNwb25zZToge1xuICAgIDIwMDoge1xuICAgICAgZGVzY3JpcHRpb246ICdTdWNjZXNzZnVsIHJlc3BvbnNlIHdpdGggZm9ybSBkYXRhJyxcbiAgICAgIHR5cGU6ICdvYmplY3QnLFxuICAgICAgcHJvcGVydGllczoge1xuICAgICAgICBzdGF0dXNDb2RlOiB7IHR5cGU6ICdpbnRlZ2VyJywgZXhhbXBsZTogMjAwIH0sXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICB0eXBlOiAnb2JqZWN0JyxcbiAgICAgICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgICBpZDogeyB0eXBlOiAnc3RyaW5nJywgZm9ybWF0OiAndXVpZCcsIGV4YW1wbGU6ICdlN2UxNjdlNy03ZWU2LTRkNjYtYTBkZi0xNjc2ZGQyZWU4ZTgnIH0sXG4gICAgICAgICAgICBuYW1lOiB7IHR5cGU6ICdzdHJpbmcnLCBleGFtcGxlOiAnVmlhbCBGb3JtIEV4YW1wbGUnIH0sXG4gICAgICAgICAgICBmaWVsZHM6IHtcbiAgICAgICAgICAgICAgdHlwZTogJ29iamVjdCcsXG4gICAgICAgICAgICAgIGFkZGl0aW9uYWxQcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ29iamVjdCcsXG4gICAgICAgICAgICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAgICAgICAgICAgdHlwZTogeyB0eXBlOiAnc3RyaW5nJywgZXhhbXBsZTogJ3RleHQnIH0sXG4gICAgICAgICAgICAgICAgICBxdWVzdGlvbjogeyB0eXBlOiAnc3RyaW5nJywgZXhhbXBsZTogJ0ZpcnN0IE5hbWU/JyB9LFxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHsgdHlwZTogJ2Jvb2xlYW4nLCBleGFtcGxlOiB0cnVlIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1lc3NhZ2U6IHsgdHlwZTogJ3N0cmluZycsIGV4YW1wbGU6ICdzdWNjZXNzJyB9XG4gICAgICB9XG4gICAgfSxcbiAgfSxcbiAgcGFyYW1zOiB7XG4gICAgdHlwZTogJ29iamVjdCcsXG4gICAgcmVxdWlyZWQ6IFsnaWQnXSxcbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICBpZDoge1xuICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgZm9ybWF0OiAndXVpZCdcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0iXX0=