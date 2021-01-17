import { Request, Response } from 'express'
import { CreateUserUseCase } from './CreateUserUseCase';

export class CreateUserController {
  constructor (
    private createUserUseCase: CreateUserUseCase
  ){}

  async handle(request: Request, response: Response): Promise<Response> {
    const { username, email, userpassword_init, state, school } = request.body

    try {
      const result:any = await this.createUserUseCase.execute({
        username,
        email,
        userpassword_init,
        state,
        school
      })
      
      let STATUS

      if (result != "Já existe um usuário com esse email") {
        STATUS = {
          status_number: 201,
          status_message: "OK"
        }
      } else {
         STATUS = {
          status_number: 201,
          status_message: "Já existe um usuário com esse email"
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