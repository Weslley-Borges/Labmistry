import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinColumn } from 'typeorm'

/* 
	18/11/2020 - Author: Weslley Borges dos Santos
	Modelo de negócios do registro na tabela Students
*/

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