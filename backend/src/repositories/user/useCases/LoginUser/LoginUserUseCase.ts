import { IUsersRepository } from "../../IUsersRepository";
import { ILoginUserRequestDTO } from "../../UserDTO";

/*  Registro de usuários
    - Verificamos o email existe;
    - Vefrifica se a senha está igual ao hash
    - 
*/

export class LoginUserUseCase {

  constructor(
    private usersRepository: IUsersRepository,
  ) {}

  async execute(data: ILoginUserRequestDTO) {
    const emailExists = await this.usersRepository.findByEmail(data.email)

    if (emailExists == null) {
      return "Não existe um usuário com esse email"
    }

    const passwordsIsEqual = await this.usersRepository.comparePasswords(data)

    if (passwordsIsEqual) {
      return "Online"
    } else {
      return "A senha está inválida"
    }
  }
}