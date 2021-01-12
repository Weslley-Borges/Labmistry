interface IAdress {
  email: string
  name: string
}

export interface IMessage{
  to: IAdress
  from: IAdress
  subject: string
  body: string
}

export interface IMAilProvider {
  sendMail(message: IMessage): Promise<void>
}