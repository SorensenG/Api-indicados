import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { z } from 'zod'
import { getSubscriberInviteCount } from '../src/functions/get-subscriber-invite-count'

export const getSubscriberInviteCountRoute: FastifyPluginAsyncZod =
  async app => {
    app.get(
      '/subscribers/:subscriberID/ranking/count',
      {
        schema: {
          summary: 'Get subscriber ranking invite count',
          tags: ['referal'],
          params: z.object({
            subscriberID: z.string(),
          }),
          response: {
            200: z.object({
              count: z.number(),
            }),
          },
        },
      },
      async request => {
        const { subscriberID } = request.params
        console.log(subscriberID)

        const { count } = await getSubscriberInviteCount({ subscriberID })

        return { count }
      }
    )
  }
