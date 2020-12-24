import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import Student from '../entity/models/Students'
import students_view from '../views/students_view'
import * as Yup from 'yup'

const bcrypt = require("bcryptjs")

/* 
	src/controller/StudentsController,ts, 11/18/2020
	Author: Weslley Borges dos Santos
	Controller da tabela "students", aqui são as operações realizadas.
*/

export default{

	// Lista todos os alunos que existem no banco de dados
	async index(request: Request, response: Response) {
		const studentsRepository = getRepository(Student)

		const students = await studentsRepository.find()
		response.status(200).json(students_view.renderMany(students))
	},


	
	// Lista um aluno do banco de dados, a partir do ID
	async show(request: Request, response: Response) {
		const {	id } = request.params
		const studentsRepository = getRepository(Student)

		try {
			const student = await studentsRepository.findOneOrFail(id)
			response.status(200).json(students_view.render(student))
		}catch(e) {
			return response.status(404).json({message: e})
		}
	},


	// Registra um novo aluno
  async create(request: Request, response: Response) {
		//Desestruturamos o request.body
		const {
			username,
			email,
			userpassword_init,
			state,
			school
		} = request.body
		//Encriptamos a senha do usuário
		const salt = bcrypt.genSaltSync(10) // Generate Salt
		const userpassword = bcrypt.hashSync(String(userpassword_init), salt) // Hash Password

		const data = {
			username,
			email,
			userpassword,
			state,
			school
		}

		//Os dados serão validados
		const schema = Yup.object().shape({
			username: Yup.string().required(),
			email: Yup.string().required().email(),
			userpassword: Yup.string().required(),
			state: Yup.string().required(),
			school: Yup.string().required()
		})
		await schema.validate(data, {abortEarly: false})

		//Registra os dados no banco de dados
		const studentsRepository = getRepository(Student)
		const student = studentsRepository.create(data)
		
		//Salva no banco de dados
		await studentsRepository.save(student)
		return response.status(201).json(student)
	 }
}