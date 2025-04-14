import Fastify from 'fastify';
import cors from '@fastify/cors';
import app from './routes';

let server: ReturnType<typeof Fastify> | null = null;

export default async function handler(req, res) {
  if (!server) {
    server = Fastify({ logger: true });

    await server.register(cors, {
      origin: ['https://vial-forms-frontend.vercel.app'],
      credentials: true,
      methods: ['GET', 'OPTIONS', 'PATCH', 'DELETE', 'POST', 'PUT'],
      allowedHeaders: [
        'X-CSRF-Token',
        'X-Requested-With',
        'Accept',
        'Accept-Version',
        'Content-Length',
        'Content-MD5',
        'Content-Type',
        'Date',
        'X-Api-Version'
      ]
    });

    await server.register(app);

    await server.ready();
  }

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
  
  server.server.emit('request', req, res);
}