import fastify from 'fastify'

import formRoutes from './routes/form'
import errorHandler from './errors'
import sourceRoutes from './routes/source'
import fastifySwagger from '@fastify/swagger';
import fastifySwaggerUI from '@fastify/swagger-ui'
import routes from './routes'

function build(opts = {}) {
  const app = fastify(opts)

  routes(app, opts)

  return app
}
export default build
