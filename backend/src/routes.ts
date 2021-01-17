import { Router, Request, Response } from 'express'
import { createUserController } from './repositories/user/useCases/CreateUser'
import StudentsController from './repositories/user/ANTIGOS_SERVICES'

/* 
	11/28/2020 - Weslley Borges dos Santos
	Página que contém todas as rotas do backend
*/

const routes = Router()
routes.get('/getting', StudentsController.index)
routes.get('/getting/:email', StudentsController.show)
routes.post('/createStudent', (request: Request, response: Response) => {
	return createUserController.handle(request, response)
})

export default routes