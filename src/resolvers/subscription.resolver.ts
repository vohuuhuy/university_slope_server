import {
  Context,
	Resolver,
	Subscription
} from '@nestjs/graphql'
import { ApolloError } from 'apollo-server-express'

@Resolver('Subscription')
export class SubscriptionResolver {
  @Subscription('subApp', {
    filter: (payload, variables, context) => {
      let through = true

      if (!payload.process) through = false
      if (!variables?.publicProcess?.includes(payload?.process)) through = false
      if (!variables?.privateProcess?.includes(payload?.process)) through = false

      return through
    },
    resolve: (payload, args, context, info) => {
      try {
        return payload
      } catch (error) {
        throw new ApolloError(error)
      }
    }
  })
  subApp(
    @Context('pubsub') pubSub
  ) {
    try {
      return pubSub.asyncIterator('subApp')
    } catch (error) {
      throw new ApolloError(error)
    }
  }
}