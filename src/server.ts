import * as dotenv from 'dotenv'
import { fastify } from 'fastify'
dotenv.config()
import { fastifyCors } from '@fastify/cors'
import { fastifySwagger } from '@fastify/swagger'
import { fastifySwaggerUi } from '@fastify/swagger-ui'
import {
  type ZodTypeProvider,
  jsonSchemaTransform,
  serializerCompiler,
  validatorCompiler,
} from 'fastify-type-provider-zod'
import { acessInviteLinkRoute } from '../routes/acess-invite-link-route'
import { getRankingRoute } from '../routes/get-rankingroute'
import { getSubscriberInviteClicksRoute } from '../routes/get-subscriber-invite-clicks-route'
import { getSubscriberInviteCountRoute } from '../routes/get-subscriber-invites-count-route'
import { getSubscriberRankingPositionRoute } from '../routes/get-subscriber-ranking-position-route'
import { subscribeToEventRoute } from '../routes/subscripe-to-event-route'
import { env } from './env'

const app = fastify().withTypeProvider<ZodTypeProvider>()

app.setSerializerCompiler(serializerCompiler)
app.setValidatorCompiler(validatorCompiler)

app.register(fastifyCors)

app.register(fastifySwagger, {
  openapi: {
    info: {
      title: 'NLW conect',
      version: '0.0.1',
    },
  },
  transform: jsonSchemaTransform,
})

app.register(fastifySwaggerUi, {
  routePrefix: '/docs',
})

app.register(subscribeToEventRoute)
app.register(acessInviteLinkRoute)
app.register(getSubscriberInviteClicksRoute)
app.register(getSubscriberInviteCountRoute)
app.register(getSubscriberRankingPositionRoute)
app.register(getRankingRoute)

app.listen({ port: env.PORT }).then(() => {
  console.log('http server running')
})
