import { IUsersRepository, ILoginRequestDTO } from "../../UserDTO";
import { JWTRepository } from "../../Implementations/JWTRepository";
import User from "../../Model";

/*  Autenticação de usuários
    - Verificamos os dados
    - Logamos os usuário
*/

export class LoginUseCase {
  constructor(
    private usersRepository: IUsersRepository,
    private jwtRepository: JWTRepository
  ) {}
  
  async execute(data: ILoginRequestDTO) {
    const user: User = await this.usersRepository.findUser(data.email, "email")

    return user != null && await this.usersRepository.comparePasswords(data.userpassword, user.userpassword)
      ? {auth: true, status: 200, message: "Autenticado com sucesso", sessionUser: await this.jwtRepository.signUser(user)}
      : {status: 401, message: "Email e/ou senha estão errados"}
  }
}