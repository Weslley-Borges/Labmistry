import { Request, Response } from 'express'
import { AuthUserUseCase } from './AuthUserUseCase';

export class AuthUserController {
  constructor (
    private authUserUseCase: AuthUserUseCase
  ){}

  async handle(request: Request, response: Response): Promise<Response> {
    const { email, userpassword } = request.body

    try {
      const result:any = await this.authUserUseCase.execute({
        email,
        userpassword
      })
    
      response.status(result.status).json(result.message)
      return result

    } catch (err) {
      return response.status(400).json({
        message: err.message || "Unexpected error."
      })
    }
  }
}