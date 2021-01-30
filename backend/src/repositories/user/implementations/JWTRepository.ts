import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken'
import User from '../Model';

export class JWTRepository {

  async signUser(user: User) {
    const token = jwt.sign({id: user.id, email: user.email}, String(process.env.APP_SECRET), {
      expiresIn: '1d'
    })
    return token
  }
}