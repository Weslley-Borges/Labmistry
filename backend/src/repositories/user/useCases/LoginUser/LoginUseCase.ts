import { IUsersRepository, ILoginRequestDTO } from "../../UserDTO";
import { JWTRepository } from "../../implementations/JWTRepository";
import User from "../../Model";
import { request } from "express";

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
    const user: User = await this.usersRepository.findByEmail(data.email)

    if (user != null && await this.usersRepository.comparePasswords(data.userpassword, user.userpassword)) {
      return {status: 200, message: "Autenticado com sucesso", sessionUser: await this.jwtRepository.signUser(user)}

    } else {
      return {status: 401, message: "Email e/ou senha estão errados"}
    }
  }
}