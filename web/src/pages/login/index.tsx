import React, { useState, FormEvent } from 'react'
import SimplePageHeader from '../../components/simplePageHeader'
import InputAnimated from '../../components/inputAnimated'
import EnterIcon from '../../../assets/images/icons/enter.svg'
import './styles.scss'

export default function Login() {
	const [email, setEmail] = useState('')
	const [Password, setPassword] = useState('')

	function handleValidate(event:FormEvent) {
		event.preventDefault()
		const userData = { "email": email, "password": Password, }
		alert(userData)
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
						value={Password} onChange={(e) => { setPassword(e.target.value) }}/>

					<button type="submit"><img src={EnterIcon} alt="Login" />Login</button>
				</form>
			</div>
		</div>
	)
}  