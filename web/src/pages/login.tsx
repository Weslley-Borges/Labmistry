import React, { useState, FormEvent } from 'react'

import SimplePageHeader from '../components/simplePageHeader'
import InputAnimated from '../components/inputAnimated'
import EnterIcon from '../assets/images/icons/enter.svg'
import ValidateLogin from '../services/microservices/validate_userLogin'

import '../assets/styles/pages/login.scss'


/* 
	18/11/2020 - Author: Weslley Borges dos Santos
	Fronted da página de login
*/

export default function Login() {

	const [email, setEmail] = useState('')
	const [Password, setPassword] = useState('')
	const [Student, setStudent] = useState(true)
	const [Teacher, setTeacher] = useState(false)

	// Os dados do formulário são recebidos 
	// e avaliados, depois são mostrados no console do browser(por enquanto).
	function handleValidate(event:FormEvent){
		event.preventDefault()

		const userData = {
			"email": email, 
			"password": Password, 
		}
		ValidateLogin(userData)
	}

	return (
		<div className="page-login">
			<SimplePageHeader link="/"/>

			<div className="page-login-content">

				<form onSubmit={handleValidate}>
					<h1>Login</h1>

					<InputAnimated name="email" label="Email" 
						typing="email" required
						value={email} onChange={(e) => { setEmail(e.target.value) }}/>

					<InputAnimated name="Password" label="Senha" 
						typing="password" required
						value={Password} 
						onChange={(e) => { setPassword(e.target.value) }}/>

					<div className="RadioButton">
						<input type="radio" id="opStudent" 
							name="userPerfil" value="student"
							checked={Student} 
							onChange={(e) => { setStudent(e.target.checked) }}/>
						<label htmlFor="student">Aluno</label>

						<input type="radio" id="opTeacher" 
							name="userPerfil" value="teacher"
							checked={Teacher} 
							onChange={(e) => { setTeacher(e.target.checked) }}/>
						<label htmlFor="teacher">Professor</label>
					</div>
						
					<button type="submit"><img src={EnterIcon} alt="Login" />Login</button>
				</form>
			</div>
		</div>
	)
}  