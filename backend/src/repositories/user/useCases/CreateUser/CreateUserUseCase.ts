import { IMAilProvider } from '../../../../providers/IMailProviders';
import { IUsersRepository } from "./IUsersRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";

/*  Registro de usuários
    - Verificamos se o email já está registrado;
    - Encriptamos a senha;
    - Validamos os dados;
    - Salvamos no banco de dados;
    - Enviamos um email para o usuário
	*/

export class CreateUserUseCase {

  constructor(
    private usersRepository: IUsersRepository,
    private mailProvider: IMAilProvider
  ) {}

  async execute(data: ICreateUserRequestDTO) {
    const userAlreadyExists = await this.usersRepository.findByEmail(data.email)

    if (userAlreadyExists != "OK") {
      throw new Error("Já existe um usuário com esse email")
    }

    await this.usersRepository.registerUser(data)

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
  }
}