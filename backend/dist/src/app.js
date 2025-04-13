"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = require("fastify");
const form_1 = require("./routes/form");
const errors_1 = require("./errors");
const source_1 = require("./routes/source");
const swagger_1 = require("@fastify/swagger");
const swagger_ui_1 = require("@fastify/swagger-ui");
function build(opts = {}) {
    const app = (0, fastify_1.default)(opts);
    app.register(swagger_1.default, {
        openapi: {
            openapi: '3.0.0',
            info: {
                title: 'Vial',
                description: 'Vial home test documentation',
                version: '0.1.0'
            },
            tags: [
                {
                    name: 'Source',
                    description: 'Source endpoints'
                },
                {
                    name: 'Form',
                    description: 'Form endpoints'
                }
            ]
        }
    });
    app.register(swagger_ui_1.default, {
        routePrefix: '/docs',
        uiConfig: {
            docExpansion: 'full',
            deepLinking: false
        },
        uiHooks: {
            onRequest: function (request, reply, next) { next(); },
            preHandler: function (request, reply, next) { next(); }
        },
        staticCSP: true,
        transformStaticCSP: (header) => header,
        transformSpecification: (swaggerObject, request, reply) => { return swaggerObject; },
        transformSpecificationClone: true
    });
    app.register(form_1.default, { prefix: '/form' });
    app.register(source_1.default, { 'prefix': '/source' });
    app.setErrorHandler(errors_1.default);
    return app;
}
exports.default = build;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHFDQUE2QjtBQUU3Qix3Q0FBc0M7QUFDdEMscUNBQW1DO0FBQ25DLDRDQUEwQztBQUMxQyw4Q0FBOEM7QUFDOUMsb0RBQWtEO0FBRWxELFNBQVMsS0FBSyxDQUFDLElBQUksR0FBRyxFQUFFO0lBQ3RCLE1BQU0sR0FBRyxHQUFHLElBQUEsaUJBQU8sRUFBQyxJQUFJLENBQUMsQ0FBQTtJQUV6QixHQUFHLENBQUMsUUFBUSxDQUFDLGlCQUFjLEVBQUU7UUFDM0IsT0FBTyxFQUFFO1lBQ1AsT0FBTyxFQUFFLE9BQU87WUFDaEIsSUFBSSxFQUFFO2dCQUNKLEtBQUssRUFBRSxNQUFNO2dCQUNiLFdBQVcsRUFBRSw4QkFBOEI7Z0JBQzNDLE9BQU8sRUFBRSxPQUFPO2FBQ2pCO1lBQ0QsSUFBSSxFQUFFO2dCQUNKO29CQUNFLElBQUksRUFBRSxRQUFRO29CQUNkLFdBQVcsRUFBRSxrQkFBa0I7aUJBQ2hDO2dCQUNEO29CQUNFLElBQUksRUFBRSxNQUFNO29CQUNaLFdBQVcsRUFBRSxnQkFBZ0I7aUJBQzlCO2FBQ0Y7U0FDRjtLQUNGLENBQUMsQ0FBQTtJQUNGLEdBQUcsQ0FBQyxRQUFRLENBQUMsb0JBQWdCLEVBQUU7UUFDN0IsV0FBVyxFQUFFLE9BQU87UUFDcEIsUUFBUSxFQUFFO1lBQ1IsWUFBWSxFQUFFLE1BQU07WUFDcEIsV0FBVyxFQUFFLEtBQUs7U0FDbkI7UUFDRCxPQUFPLEVBQUU7WUFDUCxTQUFTLEVBQUUsVUFBVSxPQUFPLEVBQUUsS0FBSyxFQUFFLElBQUksSUFBSSxJQUFJLEVBQUUsQ0FBQSxDQUFDLENBQUM7WUFDckQsVUFBVSxFQUFFLFVBQVUsT0FBTyxFQUFFLEtBQUssRUFBRSxJQUFJLElBQUksSUFBSSxFQUFFLENBQUEsQ0FBQyxDQUFDO1NBQ3ZEO1FBQ0QsU0FBUyxFQUFFLElBQUk7UUFDZixrQkFBa0IsRUFBRSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsTUFBTTtRQUN0QyxzQkFBc0IsRUFBRSxDQUFDLGFBQWEsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUUsR0FBRyxPQUFPLGFBQWEsQ0FBQSxDQUFDLENBQUM7UUFDbkYsMkJBQTJCLEVBQUUsSUFBSTtLQUNsQyxDQUFDLENBQUE7SUFDRixHQUFHLENBQUMsUUFBUSxDQUFDLGNBQVUsRUFBRSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFBO0lBQzdDLEdBQUcsQ0FBQyxRQUFRLENBQUMsZ0JBQVksRUFBRSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFBO0lBRW5ELEdBQUcsQ0FBQyxlQUFlLENBQUMsZ0JBQVksQ0FBQyxDQUFBO0lBRWpDLE9BQU8sR0FBRyxDQUFBO0FBQ1osQ0FBQztBQUNELGtCQUFlLEtBQUssQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmYXN0aWZ5IGZyb20gJ2Zhc3RpZnknXG5cbmltcG9ydCBmb3JtUm91dGVzIGZyb20gJy4vcm91dGVzL2Zvcm0nXG5pbXBvcnQgZXJyb3JIYW5kbGVyIGZyb20gJy4vZXJyb3JzJ1xuaW1wb3J0IHNvdXJjZVJvdXRlcyBmcm9tICcuL3JvdXRlcy9zb3VyY2UnXG5pbXBvcnQgZmFzdGlmeVN3YWdnZXIgZnJvbSAnQGZhc3RpZnkvc3dhZ2dlcic7XG5pbXBvcnQgZmFzdGlmeVN3YWdnZXJVSSBmcm9tICdAZmFzdGlmeS9zd2FnZ2VyLXVpJ1xuXG5mdW5jdGlvbiBidWlsZChvcHRzID0ge30pIHtcbiAgY29uc3QgYXBwID0gZmFzdGlmeShvcHRzKVxuXG4gIGFwcC5yZWdpc3RlcihmYXN0aWZ5U3dhZ2dlciwge1xuICAgIG9wZW5hcGk6IHtcbiAgICAgIG9wZW5hcGk6ICczLjAuMCcsXG4gICAgICBpbmZvOiB7XG4gICAgICAgIHRpdGxlOiAnVmlhbCcsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnVmlhbCBob21lIHRlc3QgZG9jdW1lbnRhdGlvbicsXG4gICAgICAgIHZlcnNpb246ICcwLjEuMCdcbiAgICAgIH0sXG4gICAgICB0YWdzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnU291cmNlJyxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ1NvdXJjZSBlbmRwb2ludHMnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnRm9ybScsXG4gICAgICAgICAgZGVzY3JpcHRpb246ICdGb3JtIGVuZHBvaW50cydcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgfSlcbiAgYXBwLnJlZ2lzdGVyKGZhc3RpZnlTd2FnZ2VyVUksIHtcbiAgICByb3V0ZVByZWZpeDogJy9kb2NzJyxcbiAgICB1aUNvbmZpZzoge1xuICAgICAgZG9jRXhwYW5zaW9uOiAnZnVsbCcsXG4gICAgICBkZWVwTGlua2luZzogZmFsc2VcbiAgICB9LFxuICAgIHVpSG9va3M6IHtcbiAgICAgIG9uUmVxdWVzdDogZnVuY3Rpb24gKHJlcXVlc3QsIHJlcGx5LCBuZXh0KSB7IG5leHQoKSB9LFxuICAgICAgcHJlSGFuZGxlcjogZnVuY3Rpb24gKHJlcXVlc3QsIHJlcGx5LCBuZXh0KSB7IG5leHQoKSB9XG4gICAgfSxcbiAgICBzdGF0aWNDU1A6IHRydWUsXG4gICAgdHJhbnNmb3JtU3RhdGljQ1NQOiAoaGVhZGVyKSA9PiBoZWFkZXIsXG4gICAgdHJhbnNmb3JtU3BlY2lmaWNhdGlvbjogKHN3YWdnZXJPYmplY3QsIHJlcXVlc3QsIHJlcGx5KSA9PiB7IHJldHVybiBzd2FnZ2VyT2JqZWN0IH0sXG4gICAgdHJhbnNmb3JtU3BlY2lmaWNhdGlvbkNsb25lOiB0cnVlXG4gIH0pXG4gIGFwcC5yZWdpc3Rlcihmb3JtUm91dGVzLCB7IHByZWZpeDogJy9mb3JtJyB9KVxuICBhcHAucmVnaXN0ZXIoc291cmNlUm91dGVzLCB7ICdwcmVmaXgnOiAnL3NvdXJjZScgfSlcblxuICBhcHAuc2V0RXJyb3JIYW5kbGVyKGVycm9ySGFuZGxlcilcblxuICByZXR1cm4gYXBwXG59XG5leHBvcnQgZGVmYXVsdCBidWlsZFxuIl19