import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity('teachers')
export default class Teachers {

  @PrimaryGeneratedColumn("increment")
  id: number

  @Column()
  username: string

  @Column()
  biography: string

  @Column()
  email: string

  @Column()
  userpassword: string

  @Column()
  schools_schedule: Array<[{}]>

  @Column()
  bottles: number

  @Column()
  my_articles: Array<[{}]>
}