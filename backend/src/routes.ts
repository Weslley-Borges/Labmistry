import { Router, Request, Response } from 'express'
import { createUserController, loginController } from './repositories/user/useCases'
import { auth } from './middlewares/auth'
import StudentsController from './tests/UserServices'

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