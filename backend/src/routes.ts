import { Router, Request, Response } from 'express'
import { createUserController } from './repositories/user/useCases/CreateUser'
import { authUserController } from './repositories/user/useCases/AuthUser'
import StudentsController from './tests/UserServices'

import { auth } from './middlewares/auth'

/* 
	11/28/2020 - Weslley Borges dos Santos
	Página que contém todas as rotas do backend
*/

const routes = Router()

routes.post('/createUser', (request: Request, response: Response) => {
	return createUserController.handle(request, response)
})
routes.post('/authUser', (request: Request, response: Response) => {
	return authUserController.handle(request, response)
})

routes.use(auth) //As rotas abaixo precisam do token

routes.get('/getting', StudentsController.index)
routes.get('/getting/:email', StudentsController.show)


export default routes