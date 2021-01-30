import { Router, Request, Response } from 'express'
import { createUserController } from './repositories/user/useCases/CreateUser'
import { loginController } from './repositories/user/useCases/LoginUser'
import StudentsController from './tests/UserServices'
import { auth } from './middlewares/auth'

const routes = Router()

routes.post('/user/signUp', (request: Request, response: Response) => {
	return createUserController.handle(request, response)
})
routes.post('/user/signIn', (request: Request, response: Response) => {
	return loginController.handle(request, response)
})

routes.get('/getting', auth, StudentsController.index)
routes.get('/getting/:email', StudentsController.show)

export default routes