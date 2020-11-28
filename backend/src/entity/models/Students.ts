import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinColumn } from 'typeorm'
import Teachers from './Teachers'

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

  @ManyToMany(() => Teachers)
  @JoinColumn({name: 'teachers_id'})
  my_teachers: Teachers[]
}