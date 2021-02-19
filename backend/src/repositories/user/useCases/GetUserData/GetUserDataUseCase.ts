import { IUsersRepository, IGetUserDataRequestDTO } from "../../UserDTO";
import UserViews from "../../controllers/UserViews"
import User from "../../Model";
import { getRepository } from "typeorm";

/*  Recebimento dos dados dos usuários
    - Verificamos a requisição
    - Enviamos os dados com base no contexto
*/

export class GetUserDataUseCase {
  constructor(
    private usersRepository: IUsersRepository,
  ) {}

  async execute(data: IGetUserDataRequestDTO) {
    const user: User = await this.usersRepository.findUser(data.email, "email")
    if (user) {
      if (data.context == "DATA_TO_USER") {
        return {status: 200, userData: UserViews.render(user), message: "OK"}
      }
      else if (data.context === "DATA_TO_TEST") {
        const usersRepository = getRepository(User)

		    const users = await usersRepository.find()
        return {status: 200, userData: UserViews.renderMany(users), message: "OK"}
      }
      else {
        return {status: 401, message: "Esse contexto não existe!"}
      }
    } else {
      return {status: 401, message: "Usuário inexistente!"}
    }
    
  }
}