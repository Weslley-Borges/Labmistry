import { getRepository } from "typeorm";
import { IUsersRepository } from "../IUsersRepository";
import { ICreateUserRequestDTO, IAuthUserRequestDTO } from "../UserDTO";
import User from "../Model";
import * as Yup from 'yup'
import * as bcrypt from 'bcryptjs'


export class MySQLUsersRepository implements IUsersRepository{
  
  async findByEmail(email: string): Promise<any> {
    const user = await getRepository(User).findOne({ where: {email: email} })

    if (user) return user.email
    return null
  }

  async registerUser(user: ICreateUserRequestDTO): Promise<Boolean> {
    const { username, email, userpassword_request, state, school} = user
    const userpassword = await bcrypt.hash(String(userpassword_request), bcrypt.genSaltSync(10))

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
  
      const usersRepository = getRepository(User)
      const user = usersRepository.create(newData)
      await usersRepository.save(user)
      return true
      
    } catch (error) {
      console.log(error)
      return false
    }
  }

  async comparePasswords(user: IAuthUserRequestDTO): Promise<Boolean> {
    const user_object:any = await getRepository(User).findOne({where: {email: user.email}})

    return await bcrypt.compare(user.userpassword, user_object.userpassword)
  }
}