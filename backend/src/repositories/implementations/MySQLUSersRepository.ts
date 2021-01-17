import { getRepository } from "typeorm";
import { IUsersRepository } from "../user/useCases/CreateUser/IUsersRepository";
import { ICreateUserRequestDTO } from "../user/UserDTO";
import User from "../user/entity";
import * as Yup from 'yup'

export class MySQLUsersRepository implements IUsersRepository{

  async findByEmail(email: string): Promise<string> {
    const studentsRepository = getRepository(User)

    const student = await studentsRepository.findOne({ where: { email: email } })
    if (student != undefined) return student.email
    return "OK"
  }

  async registerUser(user: ICreateUserRequestDTO): Promise<string> {
    const { username, email, userpassword_init, state, school} = user

    const bcrypt = require("bcryptjs")
    const salt = bcrypt.genSaltSync(10)
		let userpassword = bcrypt.hashSync(String(userpassword_init), salt)

    try {
      const newData = {username, email, userpassword, state, school}
      const schema = Yup.object().shape({
        username: Yup.string().required(),
        email: Yup.string().required().email(),
        userpassword: Yup.string().required(),
        state: Yup.string().required(),
        school: Yup.string().required()
      })
      await schema.validate(newData, {abortEarly: false})
  
      const studentsRepository = getRepository(User)
      const student = studentsRepository.create(newData)
      
      await studentsRepository.save(student)
  
      return "OK"
      
    } catch (error) {
      return error
    }
  }
}