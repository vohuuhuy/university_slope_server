import { Entity, ObjectIdColumn, Column } from 'typeorm'

@Entity({ name: 'settings' })
export class SettingEntity {
  @ObjectIdColumn()
  _id: string

  @Column()
  appVersion: string

  @Column()
  dataVersion: string

  constructor(area: any) {
    if (area) {
      Object.assign(this, area)
    }
  }
}
