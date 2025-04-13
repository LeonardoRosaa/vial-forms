"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_client_1 = require("../db/db_client");
const pre_serializer_1 = require("./middleware/pre_serializer");
const source_1 = require("./schemas/source");
const errors_1 = require("../errors");
async function sourceRoutes(app) {
    app.setReplySerializer(pre_serializer_1.serializer);
    const log = app.log.child({ component: 'sourceRoutes' });
    app.post('/', {
        schema: source_1.CreateSourceSchema,
        async handler(request, reply) {
            const { formId, sources } = request.body;
            try {
                const sourceRecord = await db_client_1.default.sourceRecord.create({ data: { formId } });
                const data = sources.map((e) => {
                    return {
                        question: e.question,
                        answer: e.answer,
                        sourceRecordId: sourceRecord.id
                    };
                });
                await db_client_1.default.sourceData.createMany({
                    data
                });
                reply.send(sourceRecord);
            }
            catch (err) {
                log.error({ err }, err.message);
                throw new errors_1.ApiError('failed to store source', 400);
            }
        }
    });
}
exports.default = sourceRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3JvdXRlcy9zb3VyY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSwrQ0FBb0M7QUFDcEMsZ0VBQXdEO0FBRXhELDZDQUFxRDtBQUNyRCxzQ0FBb0M7QUFFcEMsS0FBSyxVQUFVLFlBQVksQ0FBQyxHQUFvQjtJQUM1QyxHQUFHLENBQUMsa0JBQWtCLENBQUMsMkJBQVUsQ0FBQyxDQUFBO0lBRWxDLE1BQU0sR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsU0FBUyxFQUFFLGNBQWMsRUFBRSxDQUFDLENBQUE7SUFFeEQsR0FBRyxDQUFDLElBQUksQ0FFTCxHQUFHLEVBQUU7UUFDSixNQUFNLEVBQUUsMkJBQWtCO1FBQzFCLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLEtBQUs7WUFDeEIsTUFBTSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDO1lBQ3pDLElBQUksQ0FBQztnQkFDRCxNQUFNLFlBQVksR0FBRyxNQUFNLG1CQUFNLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQTtnQkFDM0UsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO29CQUMzQixPQUFPO3dCQUNILFFBQVEsRUFBRSxDQUFDLENBQUMsUUFBUTt3QkFDcEIsTUFBTSxFQUFFLENBQUMsQ0FBQyxNQUFNO3dCQUNoQixjQUFjLEVBQUUsWUFBWSxDQUFDLEVBQUU7cUJBQ2xDLENBQUE7Z0JBQ0wsQ0FBQyxDQUFFLENBQUE7Z0JBRUgsTUFBTSxtQkFBTSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUM7b0JBQy9CLElBQUk7aUJBQ1AsQ0FBQyxDQUFBO2dCQUVGLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUE7WUFDNUIsQ0FBQztZQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7Z0JBQ1gsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQTtnQkFDL0IsTUFBTSxJQUFJLGlCQUFRLENBQUMsd0JBQXdCLEVBQUUsR0FBRyxDQUFDLENBQUE7WUFDckQsQ0FBQztRQUVMLENBQUM7S0FDSixDQUFDLENBQUE7QUFDTixDQUFDO0FBRUQsa0JBQWUsWUFBWSxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmFzdGlmeUluc3RhbmNlIH0gZnJvbSAnZmFzdGlmeSdcblxuaW1wb3J0IHByaXNtYSBmcm9tICcuLi9kYi9kYl9jbGllbnQnXG5pbXBvcnQgeyBzZXJpYWxpemVyIH0gZnJvbSAnLi9taWRkbGV3YXJlL3ByZV9zZXJpYWxpemVyJ1xuaW1wb3J0IHsgSUNyZWF0ZVNvdXJjZSB9IGZyb20gJy4vaW50ZXJmYWNlcy9zb3VyY2UnXG5pbXBvcnQgeyBDcmVhdGVTb3VyY2VTY2hlbWEgfSBmcm9tICcuL3NjaGVtYXMvc291cmNlJ1xuaW1wb3J0IHsgQXBpRXJyb3IgfSBmcm9tICcuLi9lcnJvcnMnXG5cbmFzeW5jIGZ1bmN0aW9uIHNvdXJjZVJvdXRlcyhhcHA6IEZhc3RpZnlJbnN0YW5jZSkge1xuICAgIGFwcC5zZXRSZXBseVNlcmlhbGl6ZXIoc2VyaWFsaXplcilcblxuICAgIGNvbnN0IGxvZyA9IGFwcC5sb2cuY2hpbGQoeyBjb21wb25lbnQ6ICdzb3VyY2VSb3V0ZXMnIH0pXG5cbiAgICBhcHAucG9zdDx7XG4gICAgICAgIEJvZHk6IElDcmVhdGVTb3VyY2VcbiAgICB9PignLycsIHtcbiAgICAgICAgc2NoZW1hOiBDcmVhdGVTb3VyY2VTY2hlbWEsXG4gICAgICAgIGFzeW5jIGhhbmRsZXIocmVxdWVzdCwgcmVwbHkpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgZm9ybUlkLCBzb3VyY2VzIH0gPSByZXF1ZXN0LmJvZHk7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNvdXJjZVJlY29yZCA9IGF3YWl0IHByaXNtYS5zb3VyY2VSZWNvcmQuY3JlYXRlKHsgZGF0YTogeyBmb3JtSWQgfSB9KVxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBzb3VyY2VzLm1hcCgoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcXVlc3Rpb246IGUucXVlc3Rpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICBhbnN3ZXI6IGUuYW5zd2VyLFxuICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlUmVjb3JkSWQ6IHNvdXJjZVJlY29yZC5pZFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwpXG5cbiAgICAgICAgICAgICAgICBhd2FpdCBwcmlzbWEuc291cmNlRGF0YS5jcmVhdGVNYW55KHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YVxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICByZXBseS5zZW5kKHNvdXJjZVJlY29yZClcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIGxvZy5lcnJvcih7IGVyciB9LCBlcnIubWVzc2FnZSlcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgQXBpRXJyb3IoJ2ZhaWxlZCB0byBzdG9yZSBzb3VyY2UnLCA0MDApXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IHNvdXJjZVJvdXRlc1xuIl19