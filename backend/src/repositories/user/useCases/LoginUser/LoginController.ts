import { Request, Response } from 'express'
import { LoginUseCase } from './LoginUseCase';

export class LoginController {
  constructor (
    private loginUseCase: LoginUseCase
  ){}

  async handle(request: Request, response: Response): Promise<Response> {
    const { email, userpassword } = request.body

    try {
      const result:any = await this.loginUseCase.execute({
        email,
        userpassword
      })
    
      if (result.sessionUser) {
        response.json({message: result.message, session: result.sessionUser})

      } else response.json(result.message)
      return result

    } catch (err) {
      return response.status(400).json({
        message: err.message || "Unexpected error."
      })
    }
  }
}