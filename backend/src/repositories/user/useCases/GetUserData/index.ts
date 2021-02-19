import { MySQLUsersRepository } from "../../Implementations/MySQLUSersRepository";
import { GetUserDataController } from "./GetUserDataController";
import { GetUserDataUseCase } from "./GetUserDataUseCase";


const mySQLUsersRepository = new MySQLUsersRepository()

const getUserDataUseCase = new GetUserDataUseCase( mySQLUsersRepository ) 
const getUserDataController = new GetUserDataController( getUserDataUseCase )

export { getUserDataUseCase, getUserDataController }