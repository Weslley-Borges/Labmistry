import * as Yup from 'yup'
import * as bcrypt from 'bcryptjs'
import { getRepository } from "typeorm";
import { ICreateUserRequestDTO, IUsersRepository } from "../UserDTO";
import User from "../Model";

export class MySQLUsersRepository implements IUsersRepository{
  
  async findUser(value: string, data: string): Promise<any> {
    const users = await getRepository("users")
    const user = await users.createQueryBuilder().where(`${data}= :value`, {value: value}).getOne()

    if (user) return user
    return null
  }
  async findAllUsers(): Promise<any> {
    return await getRepository("users").createQueryBuilder().getMany()
  }

  async registerUser(user: ICreateUserRequestDTO): Promise<Boolean> {
    const { username, email, userpassword_request, state, school} = user
    const userpassword = await bcrypt.hash(userpassword_request, bcrypt.genSaltSync(10))

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
  
      const usersRepository = getRepository("users")
      const user = usersRepository.insert(newData)
      await usersRepository.save(user)
      return true
      
    } catch (error) {
      console.log(error)
      return false
    }
  }

  async comparePasswords(requestPassword: string, hashedPassword: string): Promise<Boolean> {
    return await bcrypt.compare(requestPassword, hashedPassword)
  }
}