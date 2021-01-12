import React, { useState, FormEvent, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { AiOutlineWarning } from 'react-icons/ai'

import PageHeader from '../../../components/pageHeader'
import Select from '../../../components/select'
import InputAnimated from '../../../components/inputAnimated'
import validateRegister from '../../../services/microservices/userRegister_validate/validateRegister'

import GeoStates from '../../../utils/states.json'
import Schools from '../../../utils/schools.json'
import '../assets/styles/pages/register.scss'
import API from '../../../services/api'

/* 
	18/11/2020 - Weslley Borges dos Santos
	Frontent da página de registro
*/

export default function Register(){

	const history = useHistory()

	const [username, setName] = useState('')
	const [email, setEmail] = useState('')
	const [geoState, setGeoState] = useState('')
	const [school, setSchool] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')

	//	Recebe todos os estados e retorna um array de
	//	objetos para usar no select de estados
	const states = GeoStates.map((state) => {
		return( {value: state.name, label: state.name} )
	})
	
	//	Recebe todas as escolas cujo o nome do estado seja igual ao estado selecionado
	//	e retorna um array de objetos com os dados dessas escolas
	let getSchools:any = Schools.filter( school => school.state === geoState)
	let schools = getSchools.map( (school:any) => { return( {value: school.name, label: school.name} )})

	
	async function handleRegister(e: FormEvent){
		e.preventDefault()

		const data = { username, email, password, confirmPassword, geoState, school}

		let email_is_unique
		await API.get(`getting/${data.email}`).then(response => email_is_unique = response.data)

		if (email_is_unique === "OK") {
			console.log("O email é único")
			const result = await validateRegister(data)
			if (result === "OK") {
				alert("Usuário criado com sucesso")
				document.getElementById('confirm_button')?.setAttribute('disabled', 'true')
				history.push('/')
			}
			return alert(result)
		}
		alert("Já existe um usuário com esse email")
	}

	return (
		<div className="container page-register">
      <PageHeader title="Olá, usuário!" link = "/create" description="Receba suas aulas online"/>

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