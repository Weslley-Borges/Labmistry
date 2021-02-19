import { Request, Response } from 'express'
import { GetUserDataUseCase } from './GetUserDataUseCase';

export class GetUserDataController {
  constructor (
    private getUserDataUseCase: GetUserDataUseCase
  ){}

  async handle(request: Request, response: Response): Promise<Response> {
    const { email, context } = request.body

    try {
      const result:any = await this.getUserDataUseCase.execute({
        email, context
      })
    
      if (result.userData) {
        response.json({auth: result.auth, message: result.message, data: result.userData})
      } else response.json(result.message)

      return result

    } catch (err) {
      return response.status(400).json({
        message: err.message || "Unexpected error."
      })
    }
  }
}