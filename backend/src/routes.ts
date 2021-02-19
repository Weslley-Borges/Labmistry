import { Router, Request, Response } from 'express'
import { auth } from './middlewares/auth'
import * as user from './repositories/User/useCases'

const routes = Router()

routes.post('/user/signUp', (request: Request, response: Response) => { return user.createUserController.handle(request, response) })
routes.post('/user/signIn', (request: Request, response: Response) => { return user.loginController.handle(request, response) })
routes.get('/main', auth,(request: Request, response: Response) => { return user.getUserDataController.handle(request, response) })

export default routes