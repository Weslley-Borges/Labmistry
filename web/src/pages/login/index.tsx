import React, { useState, FormEvent } from 'react'
import SimplePageHeader from '../../components/simplePageHeader'
import Input from '../../components/input'
import EnterIcon from '../../assets/images/icons/enter.svg'
import './style.scss'



function Login() {
	const [CPF, setCPF] = useState('')
	const [Password, setPassword] = useState('')
	const [Student, setStudent] = useState(true)
	const [Teacher, setTeacher] = useState(false)

	function validate(){
		if(parseInt(CPF)){
			let userData = {"CPF": CPF, "Password": Password, "isA_Student":Student, "isA_Teacher":Teacher}
			return alert(userData)
		}alert('O CPF deve ser possuir apenas números!')
	}

	return (
		<div id="page-login">
			<div id="page-login-content" className="container">
				<SimplePageHeader link="/"/>
				<form onSubmit={validate}>
					<fieldset><h1>Login</h1>
						<Input name="CPF" label="CPF (somente números)" typing="text" required
							value={CPF} onChange={(e) => { setCPF(e.target.value) }} example='12345678910'/>
						<Input name="Password" label="Senha" typing="password" required
							value={Password} onChange={(e) => { setPassword(e.target.value) }} />

							<div className="RadioButton">
							<input type="radio" id="opStudent" name="userPerfil" value="student"
								checked={Student} onChange={(e) => { setStudent(e.target.checked) }} />
							<label htmlFor="student">Aluno</label>

							<input type="radio" id="opTeacher" name="userPerfil" value="teacher"
								checked={Teacher} onChange={(e) => { setTeacher(e.target.checked) }} />
							<label htmlFor="teacher">Professor</label>
						</div>
					</fieldset>
					<button type="submit"><img src={EnterIcon} alt="Login" />Login</button>
				</form>
			</div>
		</div>
	)
}  
export default Login           