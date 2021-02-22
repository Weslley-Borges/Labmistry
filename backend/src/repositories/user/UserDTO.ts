import User from "./Model";

export interface ICreateUserRequestDTO {
  username: string
  email: string
  userpassword_request: string
  state: string
  school: string
}
export interface ILoginRequestDTO {
  email: string
  userpassword: string
}
export interface IGetUserDataRequestDTO {
  id: string
  context: string
}
export interface IUsersRepository {
  findUser(value: string, data: string): Promise<any>
  findAllUsers(): Promise<any>
  registerUser(user: ICreateUserRequestDTO): Promise<Boolean>
  comparePasswords(requestPassword: string, hashedPassword: string): Promise<Boolean>
}