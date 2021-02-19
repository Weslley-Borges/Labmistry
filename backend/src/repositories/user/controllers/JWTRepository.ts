import * as jwt from 'jsonwebtoken'
import User from '../Model';

export class JWTRepository {

  async signUser(user: User) {
    return jwt.sign({id: user.id, email: user.email}, String(process.env.APP_SECRET), { expiresIn: '1d' })
  }
}