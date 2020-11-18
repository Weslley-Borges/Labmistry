import React, { useState, FormEvent } from 'react'

import SimplePageHeader from '../components/simplePageHeader'
import InputAnimated from '../components/inputAnimated'
import EnterIcon from '../assets/images/icons/enter.svg'

import '../assets/styles/pages/login.scss'

{/*
	src/pages/login.tsx, 11/18/2020
	Author: Weslley Borges dos Santos
	Este arquivo é o frontend da página de login
*/}

export default function Login() {

	const [CPF, setCPF] = useState('')
	const [Password, setPassword] = useState('')
	const [Student, setStudent] = useState(true)
	const [Teacher, setTeacher] = useState(false)

	{/*
		Na função handleValidate, os dados do formulário são recebidos 
		e avaliados, depois são mostrados no console do browser(por enquanto).
	*/}
	function handleValidate(event:FormEvent){
		event.preventDefault()

		if(parseInt(CPF)){
			let userData = {
				"CPF": CPF, 
				"Password": Password, 
				"isA_Student":Student, 
				"isA_Teacher":Teacher}
			return console.log(userData)
		}
		alert('O CPF deve ser possuir apenas números!')
	}

	return (
		<div className="page-login">
			<SimplePageHeader link="/"/>

			<div className="page-login-content">

				<form onSubmit={handleValidate}>
					<h1>Login</h1>
					<InputAnimated name="CPF" label="CPF (somente números)" 
						typing="number" required
						value={CPF} 
						onChange={(e) => { setCPF(e.target.value) }}
					/>
					<InputAnimated name="Password" label="Senha" 
						typing="password" required
						value={Password} 
						onChange={(e) => { setPassword(e.target.value) }} 
					/>

					<div className="RadioButton">
						<input type="radio" id="opStudent" 
							name="userPerfil" value="student"
							checked={Student} 
							onChange={(e) => { setStudent(e.target.checked) }} 
						/>
						<label htmlFor="student">Aluno</label>

						<input type="radio" id="opTeacher" 
							name="userPerfil" value="teacher"
							checked={Teacher} 
							onChange={(e) => { setTeacher(e.target.checked) }} 
						/>
						<label htmlFor="teacher">Professor</label>
					</div>
						
					<button type="submit"><img src={EnterIcon} alt="Login" />Login</button>
				</form>
			</div>
		</div>
	)
}  