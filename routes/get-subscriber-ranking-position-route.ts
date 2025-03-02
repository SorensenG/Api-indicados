import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { z } from 'zod'
import { getSubscriberInviteCount } from '../src/functions/get-subscriber-invite-count'
import { getSubscriberRankingPosition } from '../src/functions/get-subscriber-ranking-position'

export const getSubscriberRankingPositionRoute: FastifyPluginAsyncZod =
  async app => {
    app.get(
      '/subscribers/:subscriberID/ranking/position',
      {
        schema: {
          summary: 'Get subscriber ranking position',
          tags: ['referal'],
          params: z.object({
            subscriberID: z.string(),
          }),
          response: {
            200: z.object({
              position: z.number().nullable(),
            }),
          },
        },
      },
      async request => {
        const { subscriberID } = request.params
        console.log(subscriberID)

        const { position } = await getSubscriberRankingPosition({
          subscriberID,
        })

        return { position }
      }
    )
  }
