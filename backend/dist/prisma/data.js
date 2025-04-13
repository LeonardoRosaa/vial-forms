"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSeedData = void 0;
const crypto_1 = require("crypto");
const getSeedData = async () => {
    const formData = [
        {
            id: (0, crypto_1.randomUUID)(),
            name: 'Vial Form Example',
            fields: {
                'field-1': {
                    type: 'text',
                    question: 'First Name?',
                    required: true,
                },
                'field-2': {
                    type: 'text',
                    question: 'Last Name?',
                    required: true,
                },
                'field-3': {
                    type: 'text',
                    question: 'Email?',
                    required: true,
                },
                'field-4': {
                    type: 'date',
                    question: 'Date of Birth?',
                    required: true,
                },
            },
        },
    ];
    const sourceRecordData = [
        {
            id: (0, crypto_1.randomUUID)(),
            formId: formData[0].id,
        },
    ];
    const sourceData = [
        {
            id: (0, crypto_1.randomUUID)(),
            sourceRecordId: sourceRecordData[0].id,
            question: 'First Name?',
            answer: 'John',
        },
        {
            id: (0, crypto_1.randomUUID)(),
            sourceRecordId: sourceRecordData[0].id,
            question: 'Last Name?',
            answer: 'Doe',
        },
        {
            id: (0, crypto_1.randomUUID)(),
            sourceRecordId: sourceRecordData[0].id,
            question: 'Email?',
            answer: 'john.doe@test.com',
        },
        {
            id: (0, crypto_1.randomUUID)(),
            sourceRecordId: sourceRecordData[0].id,
            question: 'Date of Birth?',
            answer: '2021-01-01T00:00:00.000Z',
        },
    ];
    return {
        formData,
        sourceRecordData,
        sourceData,
    };
};
exports.getSeedData = getSeedData;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3ByaXNtYS9kYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLG1DQUFtQztBQUU1QixNQUFNLFdBQVcsR0FBRyxLQUFLLElBQUksRUFBRTtJQUNwQyxNQUFNLFFBQVEsR0FBRztRQUNmO1lBQ0UsRUFBRSxFQUFFLElBQUEsbUJBQVUsR0FBRTtZQUNoQixJQUFJLEVBQUUsbUJBQW1CO1lBQ3pCLE1BQU0sRUFBRTtnQkFDTixTQUFTLEVBQUU7b0JBQ1QsSUFBSSxFQUFFLE1BQU07b0JBQ1osUUFBUSxFQUFFLGFBQWE7b0JBQ3ZCLFFBQVEsRUFBRSxJQUFJO2lCQUNmO2dCQUNELFNBQVMsRUFBRTtvQkFDVCxJQUFJLEVBQUUsTUFBTTtvQkFDWixRQUFRLEVBQUUsWUFBWTtvQkFDdEIsUUFBUSxFQUFFLElBQUk7aUJBQ2Y7Z0JBQ0QsU0FBUyxFQUFFO29CQUNULElBQUksRUFBRSxNQUFNO29CQUNaLFFBQVEsRUFBRSxRQUFRO29CQUNsQixRQUFRLEVBQUUsSUFBSTtpQkFDZjtnQkFDRCxTQUFTLEVBQUU7b0JBQ1QsSUFBSSxFQUFFLE1BQU07b0JBQ1osUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsUUFBUSxFQUFFLElBQUk7aUJBQ2Y7YUFDRjtTQUNGO0tBQ0YsQ0FBQTtJQUVELE1BQU0sZ0JBQWdCLEdBQUc7UUFDdkI7WUFDRSxFQUFFLEVBQUUsSUFBQSxtQkFBVSxHQUFFO1lBQ2hCLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtTQUN2QjtLQUNGLENBQUE7SUFFRCxNQUFNLFVBQVUsR0FBRztRQUNqQjtZQUNFLEVBQUUsRUFBRSxJQUFBLG1CQUFVLEdBQUU7WUFDaEIsY0FBYyxFQUFFLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDdEMsUUFBUSxFQUFFLGFBQWE7WUFDdkIsTUFBTSxFQUFFLE1BQU07U0FDZjtRQUNEO1lBQ0UsRUFBRSxFQUFFLElBQUEsbUJBQVUsR0FBRTtZQUNoQixjQUFjLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUN0QyxRQUFRLEVBQUUsWUFBWTtZQUN0QixNQUFNLEVBQUUsS0FBSztTQUNkO1FBQ0Q7WUFDRSxFQUFFLEVBQUUsSUFBQSxtQkFBVSxHQUFFO1lBQ2hCLGNBQWMsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ3RDLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLE1BQU0sRUFBRSxtQkFBbUI7U0FDNUI7UUFDRDtZQUNFLEVBQUUsRUFBRSxJQUFBLG1CQUFVLEdBQUU7WUFDaEIsY0FBYyxFQUFFLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDdEMsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixNQUFNLEVBQUUsMEJBQTBCO1NBQ25DO0tBQ0YsQ0FBQTtJQUVELE9BQU87UUFDTCxRQUFRO1FBQ1IsZ0JBQWdCO1FBQ2hCLFVBQVU7S0FDWCxDQUFBO0FBQ0gsQ0FBQyxDQUFBO0FBckVZLFFBQUEsV0FBVyxlQXFFdkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByYW5kb21VVUlEIH0gZnJvbSAnY3J5cHRvJ1xuXG5leHBvcnQgY29uc3QgZ2V0U2VlZERhdGEgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGZvcm1EYXRhID0gW1xuICAgIHtcbiAgICAgIGlkOiByYW5kb21VVUlEKCksXG4gICAgICBuYW1lOiAnVmlhbCBGb3JtIEV4YW1wbGUnLFxuICAgICAgZmllbGRzOiB7XG4gICAgICAgICdmaWVsZC0xJzoge1xuICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICBxdWVzdGlvbjogJ0ZpcnN0IE5hbWU/JyxcbiAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgJ2ZpZWxkLTInOiB7XG4gICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgIHF1ZXN0aW9uOiAnTGFzdCBOYW1lPycsXG4gICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgICdmaWVsZC0zJzoge1xuICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICBxdWVzdGlvbjogJ0VtYWlsPycsXG4gICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgICdmaWVsZC00Jzoge1xuICAgICAgICAgIHR5cGU6ICdkYXRlJyxcbiAgICAgICAgICBxdWVzdGlvbjogJ0RhdGUgb2YgQmlydGg/JyxcbiAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgXVxuXG4gIGNvbnN0IHNvdXJjZVJlY29yZERhdGEgPSBbXG4gICAge1xuICAgICAgaWQ6IHJhbmRvbVVVSUQoKSxcbiAgICAgIGZvcm1JZDogZm9ybURhdGFbMF0uaWQsXG4gICAgfSxcbiAgXVxuXG4gIGNvbnN0IHNvdXJjZURhdGEgPSBbXG4gICAge1xuICAgICAgaWQ6IHJhbmRvbVVVSUQoKSxcbiAgICAgIHNvdXJjZVJlY29yZElkOiBzb3VyY2VSZWNvcmREYXRhWzBdLmlkLFxuICAgICAgcXVlc3Rpb246ICdGaXJzdCBOYW1lPycsXG4gICAgICBhbnN3ZXI6ICdKb2huJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiByYW5kb21VVUlEKCksXG4gICAgICBzb3VyY2VSZWNvcmRJZDogc291cmNlUmVjb3JkRGF0YVswXS5pZCxcbiAgICAgIHF1ZXN0aW9uOiAnTGFzdCBOYW1lPycsXG4gICAgICBhbnN3ZXI6ICdEb2UnLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IHJhbmRvbVVVSUQoKSxcbiAgICAgIHNvdXJjZVJlY29yZElkOiBzb3VyY2VSZWNvcmREYXRhWzBdLmlkLFxuICAgICAgcXVlc3Rpb246ICdFbWFpbD8nLFxuICAgICAgYW5zd2VyOiAnam9obi5kb2VAdGVzdC5jb20nLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IHJhbmRvbVVVSUQoKSxcbiAgICAgIHNvdXJjZVJlY29yZElkOiBzb3VyY2VSZWNvcmREYXRhWzBdLmlkLFxuICAgICAgcXVlc3Rpb246ICdEYXRlIG9mIEJpcnRoPycsXG4gICAgICBhbnN3ZXI6ICcyMDIxLTAxLTAxVDAwOjAwOjAwLjAwMFonLFxuICAgIH0sXG4gIF1cblxuICByZXR1cm4ge1xuICAgIGZvcm1EYXRhLFxuICAgIHNvdXJjZVJlY29yZERhdGEsXG4gICAgc291cmNlRGF0YSxcbiAgfVxufVxuIl19