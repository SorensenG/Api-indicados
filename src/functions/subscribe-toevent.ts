import { eq } from 'drizzle-orm'
import { db } from '../drizzle/client'
import { subscriptions } from '../drizzle/schema/subscriptions'
import { redis } from '../redis/client'

interface SubscribeTOEventParms {
  name: string
  email: string
  referrerrID?: string | null
}

export async function subscribeToEvent({ name, email, referrerrID }: SubscribeTOEventParms) {
  const subscribers = await db
    .select()
    .from(subscriptions)
    .where(eq(subscriptions.email, email))

  if (subscribers.length > 0) {
    return { subescriberID: subscribers[0].id }
  }

  const result = await db
    .insert(subscriptions)
    .values({
      name,
      email,
    })
    .returning()

    if(referrerrID) {
      await redis.zincrby('referral:ranking', 1, referrerrID)
    }
  const subescriber = result[0]

  return {
    subescriberID: subescriber.id,
  }
}
