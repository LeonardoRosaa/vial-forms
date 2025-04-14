import Fastify from 'fastify';
import app from './routes'

const server = Fastify({
  logger: true
}
);

server.register(app)

// server.get('/', async (request, reply) => {
//   return { message: 'Hello from Fastify on Vercel!' };
// });

// Main handler for Vercel
export default async function handler(req, res) {
  await server.ready();
  server.server.emit('request', req, res);
}