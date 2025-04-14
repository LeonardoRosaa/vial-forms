export const CreateFormSchema = {
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
              type: { type: 'string', enum: ['text', 'date', 'number', 'textarea'] },
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
}

export const FindAllFormsSchema = {
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
}

export const FindFormSchema = {
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
}