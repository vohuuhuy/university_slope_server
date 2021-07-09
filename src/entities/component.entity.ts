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

  @Column()
  wayIns: number[][][]

  constructor(component: any) {
    if (component) {
      Object.assign(this, component)
    }
  }
}
