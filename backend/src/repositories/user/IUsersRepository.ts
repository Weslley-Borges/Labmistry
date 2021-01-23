import { ICreateUserRequestDTO, ILoginUserRequestDTO } from "./UserDTO";

export interface IUsersRepository {
  findByEmail(email: string): Promise<any>
  registerUser(user: ICreateUserRequestDTO): Promise<string>
  comparePasswords(user: ILoginUserRequestDTO): Promise<Boolean>
}