import { Resolver, Args, Query } from '@nestjs/graphql'
import { ApolloError } from 'apollo-server-express'
import { getMongoRepository } from 'typeorm'
import { Area } from 'graphql.schema'
import { AreaEntity } from 'entities/area.entity'

@Resolver('Area')
export class AreaResolve {
  @Query('area')
  async area(
    @Args('_id') _id: string
  ): Promise<Area | ApolloError> {
    try {
      return await getMongoRepository(AreaEntity).findOne({ _id })
    } catch (error) {
      throw new ApolloError(error)
    }
  }
}
