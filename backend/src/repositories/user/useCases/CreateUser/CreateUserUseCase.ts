import { IMAilProvider } from '../../../../providers/IMailProviders';
import { ICreateUserRequestDTO, IUsersRepository } from "../../UserDTO";

/*  Registro de usuários
    - Verificamos se o email já está registrado;
    - Validamos os dados do registro
    - Enviamos um email para o usuário
*/

export class CreateUserUseCase {

  constructor(
    private usersRepository: IUsersRepository,
    private mailProvider: IMAilProvider
  ) {}

  async execute(data: ICreateUserRequestDTO) {
    const userAlreadyExists = await this.usersRepository.findUser(data.email, "email")

    if (userAlreadyExists != null) return {status: 200, message: "Já existe um usuário com esse email"}

    if (await this.usersRepository.registerUser(data)) {
      this.mailProvider.sendMail({
        to: {
          name: data.username,
          email: data.email
        },
        from: {
          name: "Criador da Labmistry",
          email: "weslley15bs@gmail.com"
        },
        subject: "Seja bem-vindo à Labmistry",
        body: "<p>Agora você pode fazer o login em nossa plataforma</p>"
      })
      return {status: 201, message: "Usuário criado"}
    } else return {status: 400, message: "Deu um erro na aplicação"}
  }
}