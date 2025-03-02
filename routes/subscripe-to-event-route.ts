import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { z } from 'zod'
import { subscribeToEvent } from '../src/functions/subscribe-toevent'

export const subscribeToEventRoute: FastifyPluginAsyncZod = async app => {
  app.post(
    '/subscriptions',
    {
      schema: {
        summary: 'subscibes someone to the event',
        body: z.object({
          name: z.string(),
          email: z.string().email(),
          referrer:z.string().nullish(),
        }),
        response: {
          201: z.object({
            subescriberID: z.string(),
          }),
        },
      },
    },
    async (request, reply) => {
      const { name, email, referrer } = request.body

      const { subescriberID } = await subscribeToEvent({
        name,
        email,
        referrerrID: referrer,
      })

      return reply.status(201).send({
        subescriberID,
      })
    }
  )
}
