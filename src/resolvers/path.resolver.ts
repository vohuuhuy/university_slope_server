import { Resolver, Query } from '@nestjs/graphql'
import { ApolloError } from 'apollo-server-express'
import { PathEntity } from 'entities/path.entity'
import { Path } from 'graphql.schema'
import { getMongoRepository } from 'typeorm'

@Resolver('PathResolve')
export class PathResolve {
  @Query('paths')
  async paths(): Promise<Path[]> {
    try {
      const paths = await getMongoRepository(PathEntity).find({})
      return paths
    } catch (error) {
      throw new ApolloError(error)
    }
  }
}
