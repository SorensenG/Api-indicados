import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { z } from 'zod'
import { getSubscriberInviteClicks } from '../src/functions/get-subscriber-invite-clicks'

export const getSubscriberInviteClicksRoute: FastifyPluginAsyncZod =
  async app => {
    app.get(
      '/subscribers/:subscriberID/ranking/clicks',
      {
        schema: {
          summary: 'Get subscriber ranking invite clicks count',
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

        const { count } = await getSubscriberInviteClicks({ subscriberID })

        return { count }
      }
    )
  }
