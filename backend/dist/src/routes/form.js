"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_client_1 = require("../db/db_client");
const pre_serializer_1 = require("./middleware/pre_serializer");
const errors_1 = require("../errors");
const form_1 = require("./schemas/form");
async function formRoutes(app) {
    app.setReplySerializer(pre_serializer_1.serializer);
    const log = app.log.child({ component: 'formRoutes' });
    app.get('/', {
        schema: form_1.FindAllFormsSchema,
        async handler(_, reply) {
            try {
                const forms = await db_client_1.default.form.findMany({
                    select: {
                        id: true,
                        name: true
                    }
                });
                reply.send(forms);
            }
            catch (err) {
                log.error({ err }, err.message);
                throw new errors_1.ApiError('failed to fetch form', 400);
            }
        },
    });
    app.get('/:id', {
        schema: form_1.FindFormSchema,
        async handler(req, reply) {
            const { params } = req;
            const { id } = params;
            log.debug('get form by id');
            try {
                const form = await db_client_1.default.form.findUniqueOrThrow({ where: { id } });
                reply.send(form);
            }
            catch (err) {
                log.error({ err }, err.message);
                throw new errors_1.ApiError('failed to fetch form', 400);
            }
        },
    });
    app.post('/', {
        schema: form_1.CreateFormSchema,
        async handler(request, reply) {
            const { name, fields } = request.body;
            try {
                const form = await db_client_1.default.form.create({
                    data: { name, fields: fields }
                });
                reply.send({ id: form.id });
            }
            catch (err) {
                log.error({ err }, err.message);
                throw new errors_1.ApiError('failed to store form', 400);
            }
        }
    });
}
exports.default = formRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvZm9ybS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUlBLCtDQUFvQztBQUNwQyxnRUFBd0Q7QUFFeEQsc0NBQW9DO0FBRXBDLHlDQUFxRjtBQUdyRixLQUFLLFVBQVUsVUFBVSxDQUFDLEdBQW9CO0lBQzVDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQywyQkFBVSxDQUFDLENBQUE7SUFFbEMsTUFBTSxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLENBQUMsQ0FBQTtJQUV0RCxHQUFHLENBQUMsR0FBRyxDQUNKLEdBQUcsRUFBRTtRQUNOLE1BQU0sRUFBRSx5QkFBa0I7UUFDMUIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsS0FBSztZQUNwQixJQUFJLENBQUM7Z0JBQ0gsTUFBTSxLQUFLLEdBQUcsTUFBTSxtQkFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7b0JBQ3ZDLE1BQU0sRUFBRTt3QkFDTixFQUFFLEVBQUUsSUFBSTt3QkFDUixJQUFJLEVBQUUsSUFBSTtxQkFDWDtpQkFDRixDQUFDLENBQUE7Z0JBRUYsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtZQUNuQixDQUFDO1lBQUMsT0FBTyxHQUFRLEVBQUUsQ0FBQztnQkFDbEIsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQTtnQkFDL0IsTUFBTSxJQUFJLGlCQUFRLENBQUMsc0JBQXNCLEVBQUUsR0FBRyxDQUFDLENBQUE7WUFDakQsQ0FBQztRQUNILENBQUM7S0FDRixDQUFDLENBQUE7SUFFRixHQUFHLENBQUMsR0FBRyxDQUdKLE1BQU0sRUFBRTtRQUNULE1BQU0sRUFBRSxxQkFBYztRQUN0QixLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxLQUFLO1lBQ3RCLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUE7WUFDdEIsTUFBTSxFQUFFLEVBQUUsRUFBRSxHQUFHLE1BQU0sQ0FBQTtZQUNyQixHQUFHLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUE7WUFDM0IsSUFBSSxDQUFDO2dCQUNILE1BQU0sSUFBSSxHQUFHLE1BQU0sbUJBQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUE7Z0JBRW5FLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDbEIsQ0FBQztZQUFDLE9BQU8sR0FBUSxFQUFFLENBQUM7Z0JBQ2xCLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUE7Z0JBQy9CLE1BQU0sSUFBSSxpQkFBUSxDQUFDLHNCQUFzQixFQUFFLEdBQUcsQ0FBQyxDQUFBO1lBQ2pELENBQUM7UUFDSCxDQUFDO0tBQ0YsQ0FBQyxDQUFBO0lBRUYsR0FBRyxDQUFDLElBQUksQ0FFTCxHQUFHLEVBQUU7UUFDTixNQUFNLEVBQUUsdUJBQWdCO1FBQ3hCLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLEtBQUs7WUFDMUIsTUFBTSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFBO1lBRXJDLElBQUksQ0FBQztnQkFDSCxNQUFNLElBQUksR0FBRyxNQUFNLG1CQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztvQkFDcEMsSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxNQUErQixFQUFFO2lCQUN4RCxDQUFDLENBQUE7Z0JBRUYsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQTtZQUMzQixDQUFDO1lBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztnQkFDYixHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFBO2dCQUMvQixNQUFNLElBQUksaUJBQVEsQ0FBQyxzQkFBc0IsRUFBRSxHQUFHLENBQUMsQ0FBQTtZQUNqRCxDQUFDO1FBQ0gsQ0FBQztLQUNGLENBQUMsQ0FBQTtBQUNKLENBQUM7QUFFRCxrQkFBZSxVQUFVLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGYXN0aWZ5SW5zdGFuY2UgfSBmcm9tICdmYXN0aWZ5J1xuXG5pbXBvcnQgeyBGb3JtLCBQcmlzbWEgfSBmcm9tICdAcHJpc21hL2NsaWVudCdcblxuaW1wb3J0IHByaXNtYSBmcm9tICcuLi9kYi9kYl9jbGllbnQnXG5pbXBvcnQgeyBzZXJpYWxpemVyIH0gZnJvbSAnLi9taWRkbGV3YXJlL3ByZV9zZXJpYWxpemVyJ1xuaW1wb3J0IHsgSUVudGl0eUlkIH0gZnJvbSAnLi9zY2hlbWFzL2NvbW1vbidcbmltcG9ydCB7IEFwaUVycm9yIH0gZnJvbSAnLi4vZXJyb3JzJ1xuaW1wb3J0IHsgSnNvbk9iamVjdCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50L3J1bnRpbWUvbGlicmFyeSdcbmltcG9ydCB7IENyZWF0ZUZvcm1TY2hlbWEsIEZpbmRBbGxGb3Jtc1NjaGVtYSwgRmluZEZvcm1TY2hlbWEgfSBmcm9tICcuL3NjaGVtYXMvZm9ybSdcbmltcG9ydCB7IElDcmVhdGVGb3JtIH0gZnJvbSAnLi9pbnRlcmZhY2VzL2Zvcm0nXG5cbmFzeW5jIGZ1bmN0aW9uIGZvcm1Sb3V0ZXMoYXBwOiBGYXN0aWZ5SW5zdGFuY2UpIHtcbiAgYXBwLnNldFJlcGx5U2VyaWFsaXplcihzZXJpYWxpemVyKVxuXG4gIGNvbnN0IGxvZyA9IGFwcC5sb2cuY2hpbGQoeyBjb21wb25lbnQ6ICdmb3JtUm91dGVzJyB9KVxuXG4gIGFwcC5nZXQ8e1xuICB9PignLycsIHtcbiAgICBzY2hlbWE6IEZpbmRBbGxGb3Jtc1NjaGVtYSxcbiAgICBhc3luYyBoYW5kbGVyKF8sIHJlcGx5KSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBmb3JtcyA9IGF3YWl0IHByaXNtYS5mb3JtLmZpbmRNYW55KHtcbiAgICAgICAgICBzZWxlY3Q6IHtcbiAgICAgICAgICAgIGlkOiB0cnVlLFxuICAgICAgICAgICAgbmFtZTogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICByZXBseS5zZW5kKGZvcm1zKVxuICAgICAgfSBjYXRjaCAoZXJyOiBhbnkpIHtcbiAgICAgICAgbG9nLmVycm9yKHsgZXJyIH0sIGVyci5tZXNzYWdlKVxuICAgICAgICB0aHJvdyBuZXcgQXBpRXJyb3IoJ2ZhaWxlZCB0byBmZXRjaCBmb3JtJywgNDAwKVxuICAgICAgfVxuICAgIH0sXG4gIH0pXG5cbiAgYXBwLmdldDx7XG4gICAgUGFyYW1zOiBJRW50aXR5SWRcbiAgICBSZXBseTogRm9ybVxuICB9PignLzppZCcsIHtcbiAgICBzY2hlbWE6IEZpbmRGb3JtU2NoZW1hLFxuICAgIGFzeW5jIGhhbmRsZXIocmVxLCByZXBseSkge1xuICAgICAgY29uc3QgeyBwYXJhbXMgfSA9IHJlcVxuICAgICAgY29uc3QgeyBpZCB9ID0gcGFyYW1zXG4gICAgICBsb2cuZGVidWcoJ2dldCBmb3JtIGJ5IGlkJylcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGZvcm0gPSBhd2FpdCBwcmlzbWEuZm9ybS5maW5kVW5pcXVlT3JUaHJvdyh7IHdoZXJlOiB7IGlkIH0gfSlcblxuICAgICAgICByZXBseS5zZW5kKGZvcm0pXG4gICAgICB9IGNhdGNoIChlcnI6IGFueSkge1xuICAgICAgICBsb2cuZXJyb3IoeyBlcnIgfSwgZXJyLm1lc3NhZ2UpXG4gICAgICAgIHRocm93IG5ldyBBcGlFcnJvcignZmFpbGVkIHRvIGZldGNoIGZvcm0nLCA0MDApXG4gICAgICB9XG4gICAgfSxcbiAgfSlcblxuICBhcHAucG9zdDx7XG4gICAgQm9keTogSUNyZWF0ZUZvcm0sXG4gIH0+KCcvJywge1xuICAgIHNjaGVtYTogQ3JlYXRlRm9ybVNjaGVtYSxcbiAgICBhc3luYyBoYW5kbGVyKHJlcXVlc3QsIHJlcGx5KSB7XG4gICAgICBjb25zdCB7IG5hbWUsIGZpZWxkcyB9ID0gcmVxdWVzdC5ib2R5XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGZvcm0gPSBhd2FpdCBwcmlzbWEuZm9ybS5jcmVhdGUoe1xuICAgICAgICAgIGRhdGE6IHsgbmFtZSwgZmllbGRzOiBmaWVsZHMgYXMgdW5rbm93biBhcyBKc29uT2JqZWN0IH1cbiAgICAgICAgfSlcblxuICAgICAgICByZXBseS5zZW5kKHtpZDogZm9ybS5pZH0pXG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgbG9nLmVycm9yKHsgZXJyIH0sIGVyci5tZXNzYWdlKVxuICAgICAgICB0aHJvdyBuZXcgQXBpRXJyb3IoJ2ZhaWxlZCB0byBzdG9yZSBmb3JtJywgNDAwKVxuICAgICAgfVxuICAgIH1cbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgZm9ybVJvdXRlc1xuIl19