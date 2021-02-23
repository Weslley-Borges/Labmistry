import { Request, Response } from 'express'
import { CreateUserUseCase } from './CreateUserUseCase';

export class CreateUserController {
  constructor (
    private createUserUseCase: CreateUserUseCase
  ){}

  async handle(request: Request, response: Response): Promise<Response> {
    const { username, email, userpassword_request, state, school } = request.body

    try {
      const result:any = await this.createUserUseCase.execute({
        username,
        email,
        userpassword_request,
        state,
        school
      })
      
      response.status(result.status).json(result.message)
      return result

    } catch (err) {
      console.log(err)
      return response.status(400).json({
        message: err.message || "Unexpected error."
      })
    }
  }
}