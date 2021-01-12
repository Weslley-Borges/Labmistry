import { getRepository } from "typeorm";
import { IUsersRepository } from "../user/useCases/CreateUser/IUsersRepository";
import { ICreateUserRequestDTO } from "../user/useCases/CreateUser/CreateUserDTO";
import User from "../user/entity";
import * as Yup from 'yup'

export class MySQLUsersRepository implements IUsersRepository{

  async findByEmail(email: string): Promise<string> {
    const studentsRepository = getRepository(User)

    const student = await studentsRepository.findOne({ where: { email: email } })
    if (student != undefined) return student.email
    
    return "OK"
  }

  async registerUser(user: ICreateUserRequestDTO): Promise<void> {
    let { username, email, userpassword, state, school} = user

    const bcrypt = require("bcryptjs")
    const salt = bcrypt.genSaltSync(10)
		userpassword = bcrypt.hashSync(String(userpassword), salt)

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
    const student = studentsRepository.create(user)
    
    await studentsRepository.save(student)
  }
}