import { FastifyInstance } from 'fastify'

import { Form, Prisma } from '@prisma/client'

import prisma from '../db/db_client'
import { serializer } from './middleware/pre_serializer'
import { IEntityId } from './schemas/common'
import { ApiError } from '../errors'
import { JsonObject } from '@prisma/client/runtime/library'
import { CreateFormSchema, FindAllFormsSchema, FindFormSchema } from './schemas/form'
import { ICreateForm } from './interfaces/form'

async function formRoutes(app: FastifyInstance) {
  app.setReplySerializer(serializer)

  const log = app.log.child({ component: 'formRoutes' })

  app.get<{
  }>('/', {
    schema: FindAllFormsSchema,
    async handler(_, reply) {
      try {
        const forms = await prisma.form.findMany({
          select: {
            id: true,
            name: true
          }
        })

        reply.send(forms)
      } catch (err: any) {
        log.error({ err }, err.message)
        throw new ApiError('failed to fetch form', 400)
      }
    },
  })

  app.get<{
    Params: IEntityId
    Reply: Form
  }>('/:id', {
    schema: FindFormSchema,
    async handler(req, reply) {
      const { params } = req
      const { id } = params
      log.debug('get form by id')
      try {
        const form = await prisma.form.findUniqueOrThrow({ where: { id } })

        reply.send(form)
      } catch (err: any) {
        log.error({ err }, err.message)
        throw new ApiError('failed to fetch form', 400)
      }
    },
  })

  app.post<{
    Body: ICreateForm,
  }>('/', {
    schema: CreateFormSchema,
    async handler(request, reply) {
      const { name, fields } = request.body

      try {
        const form = await prisma.form.create({
          data: { name, fields: fields as unknown as JsonObject }
        })

        reply.send({id: form.id})
      } catch (err) {
        log.error({ err }, err.message)
        throw new ApiError('failed to store form', 400)
      }
    }
  })
}

export default formRoutes
