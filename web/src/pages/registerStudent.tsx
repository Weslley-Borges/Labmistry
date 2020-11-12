import React, { useState, FormEvent } from 'react'

import warningIcon from "../assets/images/icons/warning.svg"
import PageHeader from '../components/pageHeader'
import Select from '../components/select'
import InputAnimated from '../components/inputAnimated'

import GeoStates from '../utils/states.json'
import Schools from '../utils/schools.json'
import '../assets/styles/register.scss'

export default function RegisterStudent(){

	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [CPF, setCPF] = useState('')
	const [geoState, setGeoState] = useState('')
	const [school, setSchool] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')

	const states = GeoStates.map((state) => {
		return(
			{value: state.name, label: state.name}
		)
	})
	let getSchools:any = Schools.filter( school => school.state == geoState)
	let schools = getSchools.map( (school:any) => {
		return(
			{value: school.name, label: school.name}
		)
	})

	function handleRegister(e: FormEvent){
		e.preventDefault()
		if(password == confirmPassword){
			const registerValues = {
				'Name':name, 
				'Email':email, 
				'Cpf':CPF,
				'State': geoState,
				'School': school,
				'Password':password, 
				'ConfirmPassword':confirmPassword
			}
			return alert(`
			Informações do aluno:
			Nome: ${registerValues.Name}
			Email: ${registerValues.Email}
			CPF: ${registerValues.Cpf}
			Estado: ${registerValues.State}
			Escola: ${registerValues.School}`
			)
		}
		alert('Ocorreu um erro:\nAs senhas devem ser iguais')}

	return(
		<div className="container page-register" id="page-teacher-form">
      <PageHeader
        title="Olá, aluno!"
        description="Receba suas aulas online"
				link = "/create"
			/>

      <main>
				<form onSubmit={handleRegister}>
					<fieldset>
						<legend>Seus Dados</legend>
						<InputAnimated typing="text" label="Nome completo" name="completeName" required
						value={name} onChange={(e) => { setName(e.target.value) }}/>
						<InputAnimated typing="email" label="E-mail" name="email" required
						value={email} onChange={(e) => { setEmail(e.target.value) }}/>
						<InputAnimated typing="number" label="CPF (somente números)" name="cpf" required
						value={CPF} onChange={(e) => { setCPF(e.target.value) }}/><br/>
					</fieldset>

					<fieldset>
						<legend>Onde você estuda?</legend>
						<Select name="geoState" label="Estado" 
						value={geoState} required
						onChange={(e) => { setGeoState(e.target.value) }}
							options={states}/>
						<Select name="school" label="Escola" 
						value={school} required
						onChange={(e) => { setSchool(e.target.value) }}
							options={schools}/>
					</fieldset>
					
					<fieldset>
						<InputAnimated typing="password" label="Senha" name="password" required
						value={password} onChange={(e) => { setPassword(e.target.value) }}/>
						<InputAnimated typing="password" label="Confirme a senha" name="confirmPassword" required
						value={confirmPassword} onChange={(e) => { setConfirmPassword(e.target.value) }}/>
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