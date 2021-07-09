import { Entity, ObjectIdColumn, Column } from 'typeorm'

@Entity({ name: 'paths' })
export class PathEntity {
  @ObjectIdColumn()
  _id: string

  @Column()
  coordinates: number[][]

  constructor(path: any) {
    if (path) {
      Object.assign(this, path)
    }
  }
}
