import { IUsersRepository, ILoginRequestDTO } from "../../UserDTO";
import { JWTRepository } from "../../controllers/JWTRepository";
import User from "../../Model";
import { getConnection } from "typeorm";

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
      ? this.setSessionToken(user)
      : {status: 401, message: "Email e/ou senha estão errados"}
  }

  async setSessionToken(user:User) {
    const sessionToken = await this.jwtRepository.signUser(user)
    await getConnection()
    .createQueryBuilder()
    .update("users")
    .set({ session_token: sessionToken })
    .where("email = :email", { email: user.email })
    .execute();

    return { auth: true, status: 200, message: "Autenticado com sucesso", sessionUser: sessionToken}
  }
}