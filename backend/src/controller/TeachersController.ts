import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import Student from '../entity/models/Students'

/* 
	src/controller/StudentsController,ts, 11/18/2020
	Author: Weslley Borges dos Santos
	Controller da tabela "students", aqui são as operações realizadas.
*/

export default{

	// Lista todos os alunos que existem no banco de dados
	async index(request: Request, response: Response) {
		const studentsRepository = getRepository(Student)

		const students = studentsRepository.find()
		return response.json(students)
	},

	// Lista um aluno do banco de dados, a partir do ID
	async show(request: Request, response: Response) {
		const {	id } = request.params
		const studentsRepository = getRepository(Student)

		try {
			const student = studentsRepository.findOneOrFail(id)
			return response.status(200).json(student)
		}catch(e) {
			return response.status(404).json({message: e})
		}
	},

	// Registra um novo aluno
  async create(request: Request, response: Response) {
		//Desestruturamos o rquest.body
		const {
			username,
			email,
			userpassword,
			state,
			school
		} = request.body
		
		const studentsRepository = getRepository(Student)
	
		//Cria os dados no banco de dados
		const student = studentsRepository.create({
			username,
			email,
			userpassword,
			state,
			school
		})
	
		//Salva no banco de dados
		await studentsRepository.save(student)
		return response.status(201).json(student)
	 }
	 
}