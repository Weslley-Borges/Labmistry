export interface ICreateUserRequestDTO {
  username: string
  email: string
  userpassword_request: string
  state: string
  school: string
}

export interface ILoginUserRequestDTO {
  email: string
  userpassword: string
}