import { FastifyInstance } from 'fastify'

import prisma from '../db/db_client'
import { serializer } from './middleware/pre_serializer'
import { ICreateSource } from './interfaces/source'
import { CreateSourceSchema } from './schemas/source'
import { ApiError } from '../errors'

async function sourceRoutes(app: FastifyInstance) {
    app.setReplySerializer(serializer)

    const log = app.log.child({ component: 'sourceRoutes' })

    app.post<{
        Body: ICreateSource
    }>('/', {
        schema: CreateSourceSchema,
        async handler(request, reply) {
            const { formId, sources } = request.body;
            try {
                const sourceRecord = await prisma.sourceRecord.create({ data: { formId } })
                const data = sources.map((e) => {
                    return {
                        question: e.question,
                        answer: e.answer,
                        sourceRecordId: sourceRecord.id
                    }
                },)

                await prisma.sourceData.createMany({
                    data
                })

                reply.send(sourceRecord)
            } catch (err) {
                log.error({ err }, err.message)
                throw new ApiError('failed to store source', 400)
            }

        }
    })
}

export default sourceRoutes
