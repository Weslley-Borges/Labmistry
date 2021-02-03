import { MySQLUsersRepository } from "../../implementations/MySQLUSersRepository";
import { JWTRepository } from "../../implementations/JWTRepository";
import { LoginController } from "./LoginController"
import { LoginUseCase } from "./LoginUseCase"


const mySQLUsersRepository = new MySQLUsersRepository()
const jwtRepository = new JWTRepository()

const loginUseCase = new LoginUseCase( mySQLUsersRepository, jwtRepository )
const loginController = new LoginController( loginUseCase )

export { loginUseCase, loginController }