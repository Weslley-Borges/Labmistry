import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinColumn } from 'typeorm'

@Entity('students')
export default class Student {

  @PrimaryGeneratedColumn("increment")
  id: number

  @Column()
  username: string

  @Column()
  email: string

  @Column()
  userpassword: string

  @Column()
  state: string

  @Column()
  school: string

  @Column()
  bottles: number
}