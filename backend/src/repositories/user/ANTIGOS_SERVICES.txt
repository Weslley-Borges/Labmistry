import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import Student from './entity'
import students_view from './views'
/* 
 	18 nov. 2020 - Weslley Borges dos Santos
	Controller da tabela "students", aqui são as operações realizadas.
*/

export default{
	// Lista todos os alunos que existem no banco de dados
	async index(request: Request, response: Response) {
		const studentsRepository = getRepository(Student)

		const students = await studentsRepository.find()
		return response.status(200).json(students_view.renderMany(students))
	},


	
	// Lista um aluno do banco de dados, a partir do email
	async show(request: Request, response: Response) {
    const {	email } = request.params
		const studentsRepository = getRepository(Student)

    let student
	
    student = await studentsRepository.findOne(
			{ where: { email: email }, select: ["email"] }
		)
		if (student != undefined) return response.send(student)

		response.json("OK")
		return "OK"
	}
}