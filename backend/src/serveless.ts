import Fastify from 'fastify';
import app from './routes'
import CORSConfig from '@fastify/cors'

const server = Fastify({
  logger: true
}
);

server.register(CORSConfig, {
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
})
server.register(app)

export default async function handler(req, res) {
  await server.ready();
  server.server.emit('request', req, res);
}