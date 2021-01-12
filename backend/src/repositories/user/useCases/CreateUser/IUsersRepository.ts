import { ICreateUserRequestDTO } from "./CreateUserDTO";

export interface IUsersRepository {
  findByEmail(email: string): Promise<string>
  registerUser(user: ICreateUserRequestDTO): Promise<void>
}