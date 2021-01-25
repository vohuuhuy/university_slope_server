import { Entity, ObjectIdColumn, Column } from 'typeorm'

@Entity({ name: 'areas' })
export class AreaEntity {
  @ObjectIdColumn()
  _id: string

  @Column()
  idImages: string[]

  @Column()
  createdAt: number

  @Column()
  createdBy: string

  constructor(area: any) {
    if (area) {
      Object.assign(this, area)
    }
  }
}
