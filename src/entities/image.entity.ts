import { Entity, ObjectIdColumn, Column } from 'typeorm'

@Entity({ name: 'images' })
export class ImageEntity {
  @ObjectIdColumn()
  _id: string

  @Column()
  link: string

  @Column()
  like: number

  @Column()
  createdAt: number

  @Column()
  createdBy: string

  constructor(image: any) {
    if (image) {
      Object.assign(this, image)
    }
  }
}
