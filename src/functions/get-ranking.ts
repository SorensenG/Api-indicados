import { inArray } from 'drizzle-orm'
import { db } from '../drizzle/client'
import { subscriptions } from '../drizzle/schema/subscriptions'
import { redis } from '../redis/client'

export async function getRanking() {
  const ranking = await redis.zrevrange('referral:ranking', 0, 2, 'WITHSCORES')
  const suscriberidandscore: Record<string, number> = {}
  for (let i = 0; i < ranking.length; i += 2) {
    suscriberidandscore[ranking[i]] = Number.parseInt(ranking[i + 1])
  }

  const subscribers = await db
    .select()
    .from(subscriptions)
    .where(inArray(subscriptions.id, Object.keys(suscriberidandscore)))

  const rankingWithScore = subscribers
  .map(subscriber => {
    return {
      id: subscriber.id,
      name: subscriber.name,
      score: suscriberidandscore[subscriber.id],
    }
  })
  .sort((a, b) => b.score - a.score)
  return{rankingWithScore }
}
