import { IUsersRepository } from "../../UserDTO";
import { IAuthUserRequestDTO } from "../../UserDTO";
import * as jwt from 'jsonwebtoken'

/*  Registro de usuários
    - Verificamos os dados
    - Logamos os usuário
*/

export class AuthUserUseCase {

  constructor(
    private usersRepository: IUsersRepository,
  ) {}

  async execute(data: IAuthUserRequestDTO) {
    const user = await this.usersRepository.findByEmail(data.email)

    if (user == null) return {status: 200, message: "Email não encontrado"}

    if (await this.usersRepository.comparePasswords(data)) {

      const token = jwt.sign({ id: user.id}, String(process.env.APP_SECRET), {
        expiresIn: '1d'
      })
      const data = {
        id: user.id,
        username: user.username,
        email: user.email,
        token: token
      }
      
      console.log(data)
      return {status: 201, message: "Usuário Online"}
    } else {
      return {status: 200, message: "Senha inválida"}
    }
  }
}