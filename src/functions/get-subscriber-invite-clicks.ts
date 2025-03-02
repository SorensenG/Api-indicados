import { db } from '../drizzle/client'
import { subscriptions } from '../drizzle/schema/subscriptions'
import { redis } from '../redis/client'

interface GetSubscriberInviteClicksParams {
  subscriberID: string
}

export async function getSubscriberInviteClicks({
  subscriberID,
}: GetSubscriberInviteClicksParams) {
  //   await redis.hincrby('referral:acess-count', subscriberID, 1)

  const count = await redis.hget('referral:acess-count', subscriberID)
  return { count: count ? Number.parseInt(count) : 0 }
}
