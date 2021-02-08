import React, { useState, FormEvent } from 'react'
import { InputAnimated, SimplePageHeader } from '../../components'
import EnterIcon from '../../assets/images/icons/enter.svg'
import validateLogin from '../../services/UserLogin.validate'
import './styles.scss'

export const Login = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	async function handleValidate(event:FormEvent) {
		event.preventDefault()
		const result = await validateLogin({ email, password })

		if (result.message !== "Autenticado com sucesso") {
			alert("Email e/ou senha estão errados")
		} else {
			alert("Usuário logado com sucesso")
			console.log(result)
		}
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
						value={password} onChange={(e) => { setPassword(e.target.value) }}/>

					<button type="submit"><img src={EnterIcon} alt="Login" />Login</button>
				</form>
			</div>
		</div>
	)
}  