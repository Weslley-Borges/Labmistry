import { Request, Response } from 'express'
import { GetUserDataUseCase } from './GetUserDataUseCase';

export class GetUserDataController {
  constructor (
    private getUserDataUseCase: GetUserDataUseCase
  ){}

  async handle(request: Request, response: Response): Promise<Response> {
    const {context, id}  = request.body

    try {
      const result: any = await this.getUserDataUseCase.execute({id, context})
    
      result.userData 
        ? response.json({auth: result.auth, message: result.message, data: result.userData})
        : response.json(result.message)

      return result

    } catch (err) {
      return response.status(400).json({ message: err.message || "Unexpected error." })
    }
  }
}