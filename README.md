# Vial Forms

Vial Forms is a web project designed to create dynamic forms.

## Back-end

The back-end is built with [Fastify](https://fastify.dev/), a Node.js framework. It uses [PostgreSQL](https://www.postgresql.org/) as the database and [Prisma](https://www.prisma.io/) ORM to manage the database connection.

### Setup

Follow the guide below to run the project.

1. Run `docker compose build`

2. Run `docker compose up` 

3. Run `npm run migrate`

The `/docs` path provides a useful documentation written with [Swagger](https://swagger.io/).

## Front-end

The front-end project uses [Next.js](https://nextjs.org/), a powerful React framework.

### Setup

A framework like [Next.js](https://nextjs.org/) offers an easy setup process. Follow the guide below to run the project.

1. Copy this `.env` file and configure the `BASE_URL`

```
NEXT_PUBLIC_BASE_URL=<SERVER URL>
```

2. Run `npm i`

3. Run `npm run dev`

## Deployment

Deployed the website on [Vercel](https://vercel.com/) and the server using Vercel Functions. You can access the website [here](https://vial-forms-frontend.vercel.app/).