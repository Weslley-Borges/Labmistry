import { Router } from 'express'
import StudentsControllers from './controller/StudentsController'

/* 
	18/11/2020 - Author: Weslley Borges dos Santos
	Todas as rotas do backend;
*/

const routes = Router()
routes.get('/getting', StudentsControllers.index)
routes.get('/getting/:id', StudentsControllers.show)
routes.post('/createStudent', StudentsControllers.create)


export default routes