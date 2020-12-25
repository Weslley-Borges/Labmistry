import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import Student from '../entities/Students'
import students_view from '../views/students_view'
import * as Yup from 'yup'

const bcrypt = require("bcryptjs")

/* 
	18/11/2020 - Author: Weslley Borges dos Santos
	Operações realizadas usando a tabela Students
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

<<<<<<< HEAD

	/*
		--- Registro de aluno 
		Primeiro, desestruturamos o request.body (que virá do frontend) em constantes,
		depois, encriptamos a senha do usuário utilizando o método hashSync com 10 rodadas
		de salt. Depois, validamos os dados que foram recebidos, para evitar erros na aplicação.
		Aplica os dados no modelo da entidade de aluno (Student), e depois,salva no banco
		de dados.
	*/
=======
	// Registra um novo aluno
>>>>>>> develop
  async create(request: Request, response: Response) {

		const {
			username,
			email,
			userpassword_init,
			state,
			school
		} = request.body

		const salt = bcrypt.genSaltSync(10) // Generate Salt
		const userpassword = bcrypt.hashSync(String(userpassword_init), salt) // Hash Password

		const data = { username, email, userpassword, state, school}

		const schema = Yup.object().shape({
			username: Yup.string().required(),
			email: Yup.string().required().email(),
			userpassword: Yup.string().required(),
			state: Yup.string().required(),
			school: Yup.string().required()
		})
		await schema.validate(data, {abortEarly: false})

		const studentsRepository = getRepository(Student)
		const student = studentsRepository.create(data)
		
		await studentsRepository.save(student)
		return response.status(201).json(student)
	 }
}