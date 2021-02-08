import React, { useState, FormEvent } from 'react'
import { useHistory } from 'react-router-dom'
import { AiOutlineWarning } from 'react-icons/ai'
import { PageHeader, Select, InputAnimated } from '../../components'
import validateRegister from '../../services/UserRegister.validate.'
import States from '../../utils/JSON/states.json'
import Schools from '../../utils/JSON/schools.json'
import '../../assets/styles/register.scss'

export const Register = () => {

	const history = useHistory()

	const [username, setName] = useState('')
	const [email, setEmail] = useState('')
	const [state, setState] = useState('')
	const [school, setSchool] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')


	const states = States.map((state) => {return( {value: state.name, label: state.name} )})
	let schools = Schools.filter(school => school.state === state)
		.map((school:any) => {return({value: school.name, label: school.name})})

	async function handleRegister(e: FormEvent){
		e.preventDefault()
		const result = await validateRegister({username, email, password, confirmPassword, state, school})
		
		if (result !== "Usuário criado") { 
			return alert(result)
		} else {
			history.push('/login')
			return
		}
	}

	return (
		<div className="page-register">
      <PageHeader title="Olá, usuário!" link = "/" description="Receba suas aulas online"/>

      <main className="container">
				<form onSubmit={handleRegister}>

					<fieldset> <legend>Seus Dados</legend>
						<InputAnimated typing="text" 
							label="Nome completo" 
							name="completeName" required
							value={username} onChange={(e) => { setName(e.target.value) }}/>

						<InputAnimated typing="email" 
							label="E-mail" 
							name="email" required
							value={email} onChange={(e) => { setEmail(e.target.value) }}/>
					</fieldset>

					<fieldset> <legend>De onde você é?</legend>
						<Select name="state" label="Estado" required
							value={state} onChange={(e) => { setState(e.target.value) }}
							options={states}/>

						<Select name="school" label="Escola" required
							value={school} onChange={(e) => { setSchool(e.target.value) }}
							options={schools}/>
					</fieldset>
					
					<fieldset>
						<InputAnimated typing="password" 
							label="Senha" 
							name="password" required
							value={password} onChange={(e) => { setPassword(e.target.value) }}/>

						<InputAnimated typing="password" 
							label="Confirme a senha" 
								name="confirmPassword" required
							value={confirmPassword} onChange={(e) => { setConfirmPassword(e.target.value) }}/>
					</fieldset>
					
					<footer>
						<p>
							<AiOutlineWarning id='warning_icon'/>
							Importante<br/>
							Preencha todos os dados
						</p>
						<button id="confirm_button" type="submit">Salvar cadastro</button>
					</footer>
				</form>
      </main>
    </div>
	)
}