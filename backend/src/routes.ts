import { Router } from 'express'
import StudentsControllers from './controller/StudentsController'

/* 
	src/routes.ts, 11/28/2020
	Author: Weslley Borges dos Santos
	Página que contém todas as rotas do backend
*/

const routes = Router()
routes.get('/getting', StudentsControllers.index)
routes.get('/getting/:id', StudentsControllers.show)
routes.post('/createStudent', StudentsControllers.create)


export default routes