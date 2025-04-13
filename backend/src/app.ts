import fastify from 'fastify'

import formRoutes from './routes/form'
import errorHandler from './errors'
import sourceRoutes from './routes/source'
import fastifySwagger from '@fastify/swagger';
import fastifySwaggerUI from '@fastify/swagger-ui'

function build(opts = {}) {
  const app = fastify(opts)

  app.register(fastifySwagger, {
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
  })
  app.register(fastifySwaggerUI, {
    routePrefix: '/docs',
    uiConfig: {
      docExpansion: 'full',
      deepLinking: false
    },
    uiHooks: {
      onRequest: function (request, reply, next) { next() },
      preHandler: function (request, reply, next) { next() }
    },
    staticCSP: true,
    transformStaticCSP: (header) => header,
    transformSpecification: (swaggerObject, request, reply) => { return swaggerObject },
    transformSpecificationClone: true
  })
  app.register(formRoutes, { prefix: '/form' })
  app.register(sourceRoutes, { 'prefix': '/source' })

  app.setErrorHandler(errorHandler)

  return app
}
export default build
