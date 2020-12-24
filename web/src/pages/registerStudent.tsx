import React, { useState, FormEvent } from 'react'
import { useHistory } from 'react-router-dom'

import warningIcon from "../assets/images/icons/warning.svg"
import PageHeader from '../components/pageHeader'
import Select from '../components/select'
import InputAnimated from '../components/inputAnimated'
import API from '../services/api'

import GeoStates from '../utils/states.json'
import Schools from '../utils/schools.json'
import '../assets/styles/pages/register.scss'


/* 
	src/pages/registerStudent.tsx, 11/18/2020
	Author: Weslley Borges dos Santos
	Este arquivo é o frontend da página de registro do aluno
*/

export default function RegisterStudent(){

	const history = useHistory()

	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [geoState, setGeoState] = useState('')
	const [school, setSchool] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')

	/*
		A constante 'states' recebe todos os estados do arquivo
		src/utils/states.json e depois retorna um array de 
		objetos com valor e uma label, para servir no select de estados
	*/
	const states = GeoStates.map((state) => {
		return( {value: state.name, label: state.name} )
	})
	/*
		A variável 'getSchools' recebe todas as escolas cujo o estado seja
		igual ao valor do select. A variável 'schools' envia um array de
		objetos para ser usado no select de escolas
	*/
	let getSchools:any = Schools.filter( school => school.state === geoState)
	let schools = getSchools.map( (school:any) => { return( {value: school.name, label: school.name} )})

	/*
		Na função handleRegister, os dados do formulário são recebidos 
		e avaliados, depois são mostrados em um alert, com os dados do registro (por enquanto).
	*/
	async function handleRegister(e: FormEvent){
		e.preventDefault()

		if(password === confirmPassword){
			
			const data = { 
				name, 
				email, 
				password, 
				geoState, 
				school 
			}
			console.log(data)
			await API.post('createStudent', data)
			
			alert("Usuário cadastrado com sucesso")

			return history.push('/')
		}
		alert('Ocorreu um erro:\nAs senhas devem ser iguais')
	}

	return(
		<div className="container page-register">
      <PageHeader
        title="Olá, aluno!"
        description="Receba suas aulas online"
				link = "/create"
			/>

      <main>
				<form onSubmit={handleRegister}>
					<fieldset>
						<legend>Seus Dados</legend>
						<InputAnimated typing="text" 
							label="Nome completo" 
							name="completeName" required
							value={name} 
							onChange={(e) => { setName(e.target.value) }}
						/>
						<InputAnimated typing="email" 
							label="E-mail" 
							name="email" required
							value={email} 
							onChange={(e) => { setEmail(e.target.value) }}
						/>
					</fieldset>

					<fieldset>
						<legend>Onde você estuda?</legend>
						<Select name="geoState" label="Estado" 
							value={geoState} required
							onChange={(e) => { setGeoState(e.target.value) }}
							options={states}
						/>
						<Select name="school" label="Escola" 
							value={school} required
							onChange={(e) => { setSchool(e.target.value) }}
							options={schools}
						/>
					</fieldset>
					
					<fieldset>
						<InputAnimated typing="password" 
							label="Senha" 
							name="password" required
							value={password} onChange={(e) => { setPassword(e.target.value) }}
						/>
						<InputAnimated typing="password" 
							label="Confirme a senha" 
								name="confirmPassword" required
							value={confirmPassword} onChange={(e) => { setConfirmPassword(e.target.value) }}
						/>
					</fieldset>
					
					<footer>
						<p>
							<img src={warningIcon} alt="Aviso Importante" />
							Importante <br />
							Preencha todos os dados
						</p>
						<button type="submit">Salvar cadastro</button>
					</footer>
				</form>
      </main>
    </div>
	)
}