import { Request, Response, NextFunction } from 'express'
import * as jwt from 'jsonwebtoken'

export const auth = async (request: Request, response: Response, next: NextFunction) => {
	const authHeader = request.headers.authorization

  if (!authHeader) return response.status(401).json({message: "Token is required"})

  try {
    const [ ,token ] = authHeader.split(" ")
    await jwt.verify(token, String(process.env.APP_SECRET))
    next()

  } catch (error) {
    return response.status(401).json({message: "Token invalid"})
  }
}