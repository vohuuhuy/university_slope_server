import { Entity, ObjectIdColumn, Column } from 'typeorm'

@Entity({ name: 'components' })
export class ComponentEntity {
  @ObjectIdColumn()
  _id: string

  @Column()
  code: string

  @Column()
  name: string

  @Column()
  coordinate: number[]

  @Column()
  images: string[]

  @Column()
  search: { data: string }

  @Column()
  map: any

  @Column()
  style: { line: any, fill: any, title: any }

  @Column()
  zooms: number[]

  @Column()
  titleZooms: number[]

  @Column()
  childs: { _id: string, coordinate: number[] }[]

  constructor(area: any) {
    if (area) {
      Object.assign(this, area)
    }
  }
}
