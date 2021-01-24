import { MySQLUsersRepository } from "../../implementations/MySQLUSersRepository";
import { AuthUserController } from "./AuthUserController"
import { AuthUserUseCase } from "./AuthUserUseCase"

const mySQLUsersRepository = new MySQLUsersRepository()

const authUserUseCase = new AuthUserUseCase(
  mySQLUsersRepository
)
const authUserController = new AuthUserController(
  authUserUseCase
)

export { authUserUseCase, authUserController }