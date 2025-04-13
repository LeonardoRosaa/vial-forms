"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSourceSchema = void 0;
exports.CreateSourceSchema = {
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
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3JvdXRlcy9zY2hlbWFzL3NvdXJjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBYSxRQUFBLGtCQUFrQixHQUFHO0lBQzlCLFdBQVcsRUFBRSx3QkFBd0I7SUFDckMsSUFBSSxFQUFFLENBQUMsUUFBUSxDQUFDO0lBQ2hCLFFBQVEsRUFBRTtRQUNOLEdBQUcsRUFBRTtZQUNELFdBQVcsRUFBRSx5Q0FBeUM7WUFDdEQsSUFBSSxFQUFFLFFBQVE7WUFDZCxVQUFVLEVBQUU7Z0JBQ1IsVUFBVSxFQUFFLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFO2dCQUM3QyxJQUFJLEVBQUU7b0JBQ0YsSUFBSSxFQUFFLFFBQVE7b0JBQ2QsVUFBVSxFQUFFO3dCQUNSLEVBQUUsRUFBRTs0QkFDQSxJQUFJLEVBQUUsUUFBUTs0QkFDZCxNQUFNLEVBQUUsTUFBTTs0QkFDZCxPQUFPLEVBQUUsc0NBQXNDO3lCQUNsRDt3QkFDRCxNQUFNLEVBQUU7NEJBQ0osSUFBSSxFQUFFLFFBQVE7NEJBQ2QsTUFBTSxFQUFFLE1BQU07NEJBQ2QsT0FBTyxFQUFFLHNDQUFzQzt5QkFDbEQ7cUJBQ0o7aUJBQ0o7Z0JBQ0QsT0FBTyxFQUFFLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFO2FBQ2xEO1NBQ0o7S0FDSjtJQUNELElBQUksRUFBRTtRQUNGLElBQUksRUFBRSxRQUFRO1FBQ2QsUUFBUSxFQUFFLENBQUMsUUFBUSxFQUFFLFNBQVMsQ0FBQztRQUMvQixVQUFVLEVBQUU7WUFDUixNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLEdBQUc7WUFDM0MsT0FBTyxFQUFFO2dCQUNMLElBQUksRUFBRSxPQUFPO2dCQUNiLEtBQUssRUFBRTtvQkFDSCxJQUFJLEVBQUUsUUFBUTtvQkFDZCxRQUFRLEVBQUUsQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDO29CQUNoQyxVQUFVLEVBQUU7d0JBQ1IsUUFBUSxFQUFFOzRCQUNOLElBQUksRUFBRSxRQUFROzRCQUNkLFNBQVMsRUFBRSxHQUFHO3lCQUNqQjt3QkFDRCxNQUFNLEVBQUU7NEJBQ0osSUFBSSxFQUFFLFFBQVE7NEJBQ2QsU0FBUyxFQUFFLEdBQUc7eUJBQ2pCO3FCQUNKO2lCQUNKO2FBRUo7U0FDSjtLQUNKO0NBQ0osQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBDcmVhdGVTb3VyY2VTY2hlbWEgPSB7XG4gICAgZGVzY3JpcHRpb246ICdDcmVhdGUgYSBzb3VyY2UgcmVjb3JkJyxcbiAgICB0YWdzOiBbJ1NvdXJjZSddLFxuICAgIHJlc3BvbnNlOiB7XG4gICAgICAgIDIwMDoge1xuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdTdWNjZXNzZnVsIHJlc3BvbnNlIHdpdGggY3JlYXRlZCBzb3VyY2UnLFxuICAgICAgICAgICAgdHlwZTogJ29iamVjdCcsXG4gICAgICAgICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgICAgICAgc3RhdHVzQ29kZTogeyB0eXBlOiAnaW50ZWdlcicsIGV4YW1wbGU6IDIwMCB9LFxuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ29iamVjdCcsXG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0OiAndXVpZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhhbXBsZTogJ2FiY2RmYmEwLWI1NTQtNDA5NS1iZGNhLWIwMTA0YmIwZjI0ZCdcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtSWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXQ6ICd1dWlkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGFtcGxlOiAnYzQyZGIxYmQtN2EzMi00NGQ5LTk0OWItOTA3NzM5MTI0ZTI3J1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiB7IHR5cGU6ICdzdHJpbmcnLCBleGFtcGxlOiAnc3VjY2VzcycgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICBib2R5OiB7XG4gICAgICAgIHR5cGU6ICdvYmplY3QnLFxuICAgICAgICByZXF1aXJlZDogWydmb3JtSWQnLCAnc291cmNlcyddLFxuICAgICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgICBmb3JtSWQ6IHsgdHlwZTogJ3N0cmluZycsIGZvcm1hdDogJ3V1aWQnLCB9LFxuICAgICAgICAgICAgc291cmNlczoge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdhcnJheScsXG4gICAgICAgICAgICAgICAgaXRlbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ29iamVjdCcsXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBbJ3F1ZXN0aW9uJywgJ2Fuc3dlciddLFxuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVzdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heExlbmd0aDogMjUwLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuc3dlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heExlbmd0aDogMjUwLFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgfSxcbn0iXX0=