import { ICreateUserRequestDTO, IAuthUserRequestDTO } from "./UserDTO";

export interface IUsersRepository {
  findByEmail(email: string): Promise<any>
  registerUser(user: ICreateUserRequestDTO): Promise<Boolean>
  comparePasswords(user: IAuthUserRequestDTO): Promise<Boolean>
}