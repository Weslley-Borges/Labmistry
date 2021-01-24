import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

export enum UserRole {
  ADMIN = "admin",
  TEACHER = "teacher",
  STUDENT = "student"
}

@Entity('users')
export default class User {

  @PrimaryGeneratedColumn('uuid')
  id: string

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

  @Column({
    type: "enum",
    enum: UserRole,
    default: UserRole.STUDENT
  })
  role: UserRole

  @Column("simple-array")
  teachers: string[]
}