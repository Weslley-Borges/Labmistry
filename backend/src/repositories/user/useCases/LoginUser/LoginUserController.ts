import { Request, Response } from 'express'
import { LoginUserUseCase } from './LoginUserUseCase';

export class LoginUserController {
  constructor (
    private loginUserUseCase: LoginUserUseCase
  ){}

  async handle(request: Request, response: Response): Promise<Response> {
    const { email, userpassword } = request.body

    try {
      const result:any = await this.loginUserUseCase.execute({
        email,
        userpassword
      })
      
      let STATUS

      if (result != "Online") {
        STATUS = {
          status_number: 201,
          status_message: `Falhou, resultado: ${result}`
        }
      } else {
         STATUS = {
          status_number: 201,
          status_message: "OK"
        }
      }
      response.status(STATUS.status_number).json(STATUS.status_message)
      return result

    } catch (err) {
      return response.status(400).json({
        message: err.message || "Unexpected error."
      })
    }
  }
}