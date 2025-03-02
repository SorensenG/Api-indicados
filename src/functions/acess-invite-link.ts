import { db } from '../drizzle/client'
import { subscriptions } from '../drizzle/schema/subscriptions'
import { redis } from '../redis/client'

interface AcessIviteLinkParms {
  subscriberID: string
}

export async function acessIviteLink({ subscriberID }: AcessIviteLinkParms) {
  await redis.hincrby('referral:acess-count', subscriberID, 1)
}
