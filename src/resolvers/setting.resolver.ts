import { Resolver, Query } from '@nestjs/graphql'
import { ApolloError } from 'apollo-server-express'
import { SettingEntity } from 'entities/setting.entity'
import { Setting } from 'graphql.schema'
import { getMongoRepository } from 'typeorm'

@Resolver('SettingResolve')
export class SettingResolve {
  @Query('checkVersion')
  async checkVersion(): Promise<Setting | ApolloError> {
    try {
      const setting = await getMongoRepository(SettingEntity).findOne({ _id: 'default' })
      return setting
    } catch (error) {
      throw new ApolloError(error)
    }
  }
}
