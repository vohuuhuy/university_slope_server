import { Resolver, Query } from '@nestjs/graphql'
import { ApolloError } from 'apollo-server-express'
import { ComponentEntity } from 'entities/component.entity'
import { Component } from 'graphql.schema'
import { getMongoRepository } from 'typeorm'

@Resolver('ComponentResolve')
export class ComponentResolve {
  @Query('components')
  async components(): Promise<Component[] | ApolloError> {
    try {
      const components = await getMongoRepository(ComponentEntity).find({})
      return components
    } catch (error) {
      throw new ApolloError(error)
    }
  }
}
