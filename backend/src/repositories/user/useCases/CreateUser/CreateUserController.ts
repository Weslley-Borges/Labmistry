import { Request, Response } from 'express'
import { CreateUserUseCase } from './CreateUserUseCase';

export class CreateUserController {
  constructor (
    private createUserUseCase: CreateUserUseCase
  ){}

  async handle(request: Request, response: Response): Promise<Response> {
    const { username, email, userpassword, state, school } = request.body

    try {
      await this.createUserUseCase.execute({
        username,
        email,
        userpassword,
        state,
        school
      })

      return response.status(201).json({message: "OK"})

    } catch (err) {
      return response.status(400).json({
        message: err.message || "Unexpected error."
      })
    }
  }
}