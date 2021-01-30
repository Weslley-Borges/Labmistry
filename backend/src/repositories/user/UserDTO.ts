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


export interface IUsersRepository {
  findByEmail(email: string): Promise<any>
  registerUser(user: ICreateUserRequestDTO): Promise<Boolean>
  comparePasswords(requestPassword: string, hashedPassword: string): Promise<Boolean>
}