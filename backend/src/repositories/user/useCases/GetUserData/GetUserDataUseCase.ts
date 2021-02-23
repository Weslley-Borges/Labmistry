import { IUsersRepository } from "../../UserDTO"
import UserViews from "../../controllers/UserViews"
import User from "../../Model"

/*  Recebimento dos dados dos usuários
    - Verificamos a requisição
    - Enviamos os dados com base no contexto
*/

export class GetUserDataUseCase {
  constructor(
    private usersRepository: IUsersRepository,
  ) {}

  async execute(id: string) {
    const user: User = await this.usersRepository.findUser(id, "id")

    return user
    ? {status: 200 , userData: UserViews.render(user), message: "OK"}
    : {status: 401, message: "Usuário inexistente!"}
  }
}