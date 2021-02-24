import {Request, Response, NextFunction} from "express"
import * as jwt from "jsonwebtoken"
import { JsonWebTokenError } from "jsonwebtoken"


export const auth = async (request: Request, response: Response, next: NextFunction) => {
	const authHeader = request.headers.authorization

  if (!authHeader) return response.status(401).json({message: "Token is required"})

  try {
    const [ ,token ] = authHeader.split(" ")
    let tokenDecoded: any
    
    await jwt.verify(token, String(process.env.APP_SECRET), (err: (JsonWebTokenError | null), decoded: any) => {
      if (err) return response.status(500).json({ auth: false, message: 'Failed to authenticate token.' })
      tokenDecoded = decoded
    })
    request.user = tokenDecoded
    next()

  } catch (error) {
    console.log(error)
    return response.status(401).json({message: "Token invalid"})
  }
}