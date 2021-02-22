import { IUsersRepository, IGetUserDataRequestDTO } from "../../UserDTO"
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

  async execute(data: IGetUserDataRequestDTO) {

    const users: Array<User> = await this.usersRepository.findAllUsers()
    const user: User | undefined = users.find((user) => { 
      if (user.id == data.id) return user 
    })

    if (user) {
      const appContexts = [
        {code: "DATA_TO_USER", method: {status: 200 , userData: UserViews.render(user), message: "OK"}},
        {code: "DATA_TO_TEST", method: {status: 200, userData: UserViews.renderMany(users), message: "OK"}}
      ]
      const myContext = appContexts.find((context: any) => { if(context.code === data.context) return context})
      return myContext != null ? myContext.method : {status: 401, message: "Esse contexto não existe!"}

    } else {
      return {status: 401, message: "Usuário inexistente!"}
    }
  }
}