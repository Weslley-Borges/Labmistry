import { IUsersRepository } from "../../IUsersRepository";
import { IAuthUserRequestDTO } from "../../UserDTO";

/*  Registro de usuários
    - Verificamos os dados
    - Logamos os usuário
*/

export class AuthUserUseCase {

  constructor(
    private usersRepository: IUsersRepository,
  ) {}

  async execute(data: IAuthUserRequestDTO) {
    const emailExists = await this.usersRepository.findByEmail(data.email)

    if (emailExists == null) return {status: 200, message: "Email não encontrado"}

    if (await this.usersRepository.comparePasswords(data)) {
      return {status: 201, message: "Usuário Online"}
    } else {
      return {status: 200, message: "Senha inválida"}
    }
  }
}