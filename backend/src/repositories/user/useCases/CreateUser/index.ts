import { MailTrapMailProvider } from "../../../../providers/MailTrapMailProvider";
import { MySQLUsersRepository } from "../../controllers/MySQLUSersRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";


const mailtrapMailProvider = new MailTrapMailProvider()
const mySQLUsersRepository = new MySQLUsersRepository()

const createUserUseCase = new CreateUserUseCase( mySQLUsersRepository, mailtrapMailProvider ) 
const createUserController = new CreateUserController( createUserUseCase )

export { createUserUseCase, createUserController }