import React, { useState, FormEvent } from 'react'
import { useHistory } from 'react-router-dom'
import { AiOutlineWarning } from 'react-icons/ai'
import PageHeader from '../../components/pageHeader'
import Select from '../../components/select'
import InputAnimated from '../../components/inputAnimated'
import validateRegister from './src/UserRegister.validate.'
import GeoStates from '../../utils/states.json'
import Schools from '../../utils/schools.json'
import '../../../assets/styles/register.scss'

export default function Register(){

	const history = useHistory()

	const [username, setName] = useState('')
	const [email, setEmail] = useState('')
	const [geoState, setGeoState] = useState('')
	const [school, setSchool] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')


	const states = GeoStates.map((state) => {return( {value: state.name, label: state.name} )})
	let getSchools = Schools.filter(school => school.state === geoState)
		.map((school:any) => {return({value: school.name, label: school.name})})

	
	async function handleRegister(e: FormEvent){
		e.preventDefault()
		const data = { username, email, password, confirmPassword, geoState, school}

		const result = await validateRegister(data)
		if (result === "OK") {
			alert("Usuário criado com sucesso")
			history.push('/')
		} else return alert(result)
	}

	return (
		<div className="container page-register">
      <PageHeader title="Olá, usuário!" link = "/" description="Receba suas aulas online"/>

      <main>
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
						<Select name="geoState" label="Estado" required
							value={geoState} onChange={(e) => { setGeoState(e.target.value) }}
							options={states}/>

						<Select name="school" label="Escola" required
							value={school} onChange={(e) => { setSchool(e.target.value) }}
							options={getSchools}/>
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