import { redis } from '../redis/client'

interface GetSubscriberInviteCountParams {
  subscriberID: string
}

export async function getSubscriberInviteCount({
  subscriberID,
}: GetSubscriberInviteCountParams) {

  const count = await redis.zscore('referral:ranking', subscriberID)
  return { count: count ? Number.parseInt(count) : 0 }
}
