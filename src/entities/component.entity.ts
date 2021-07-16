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
  childs: {
    type: string,
    coordinate: number[],
    zoom: number[],
    properties: any,
    symbol: {
      type: string,
      title: string,
      image: string
    }
  }[]

  @Column()
  wayIns: number[][][]

  @Column()
  type: string

  @Column()
  info: string

  constructor(component: any) {
    if (component) {
      Object.assign(this, component)
    }
  }
}
