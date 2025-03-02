import * as dotenv from 'dotenv'
import { z } from 'zod'
dotenv.config()

const envSchema = z.object({
  PORT: z.coerce.number().default(3333),
  POSTGRES_URL: z.string().url(),
  REDIS_URL: z.string().url(),
  WEB_url: z.string().url(),
})

export const env = envSchema.parse(process.env)
