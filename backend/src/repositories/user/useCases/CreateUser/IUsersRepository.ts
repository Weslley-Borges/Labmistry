import { ICreateUserRequestDTO } from "../../UserDTO";

export interface IUsersRepository {
  findByEmail(email: string): Promise<string>
  registerUser(user: ICreateUserRequestDTO): Promise<string>
}