import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { z } from 'zod'
import { env } from '../src/env'
import { acessIviteLink } from '../src/functions/acess-invite-link'
import { redis } from '../src/redis/client'

export const acessInviteLinkRoute: FastifyPluginAsyncZod = async app => {
  app.get(
    '/invites/:subscriberID',
    {
      schema: {
        summary: 'Acess invite link and redirects',
        tags: ['referal'],
        params: z.object({
          subscriberID: z.string(),
        }),
        response: {
          302: z.null(),
        },
      },
    },
    async (request, reply) => {
      const { subscriberID } = request.params
      console.log(subscriberID)

      await acessIviteLink({ subscriberID })

      console.log(await redis.hgetall('referral:acess-count'))

      const redirectUrl = new URL(env.WEB_url)
      redirectUrl.searchParams.set('referrer', subscriberID)

      return reply.redirect(redirectUrl.toString(), 302)
    }
  )
}
