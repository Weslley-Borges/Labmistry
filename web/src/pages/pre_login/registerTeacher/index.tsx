import React, { useState, FormEvent } from 'react'

import PageHeader from '../../../components/pageHeader'
import Select from '../../../components/select'
import InputAnimated from '../../../components/inputAnimated'
import Textarea from '../../../components/textarea'

import GeoStates from '../../../utils/states.json'
import Schools from '../../../utils/schools.json'
import '../assets/styles/pages/register.scss'
import { AiOutlineWarning } from 'react-icons/ai'

/* 
	18/11/2020 - Author: Weslley Borges dos Santos
	Página de registro do professor
*/

export default function RegisterTeacher(){
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [geoState, setGeoState] = useState('')
	const [school, setSchool] = useState('')
	const [whatsapp, setWhatsapp] = useState('')
	const [bio, setBio] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')

	/*
		Recebe todos os dados e retorna um array de
		objetos para usar no select de estados
	*/
	const states = GeoStates.map((state) => {
		return( {value: state.name, label: state.name} )
	})

	/*
		Recebe todas as escolas cujo o nome do estado seja igual a geoState
		e retorna um array de objetos com os dados dessas escolas
	*/
	let getSchools:any = Schools.filter( school => school.state === geoState)
	let schools = getSchools.map( (school:any) => { return( {value: school.name, label: school.name} )})

	/*
		Os dados do formulário são recebidos e avaliados, depois são 
		mostrados em um alert, com os dados do registro (por enquanto).
	*/
	function handleRegister(e: FormEvent){
		e.preventDefault()
		if(password === confirmPassword){
			const registerValues = {
				'Name':name, 
				'Email':email, 
				'State': geoState,
				'School': school,
				'Whatsapp': whatsapp,
				'Biography': bio,
				'Password':password, 
				'ConfirmPassword':confirmPassword
			}
			return alert(`
			Informações do aluno:
			Nome: ${registerValues.Name}
			Email: ${registerValues.Email}
			Estado: ${registerValues.State}
			Escola: ${registerValues.School}`
			)
		}
		alert('Ocorreu um erro:\nAs senhas devem ser iguais')}

	return(
		<div className="container page-register">
      <PageHeader
        title="Olá, professor"
        description="Seus alunos te esperam"
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
						<Textarea
              name = "bio"
              label = "Escreva sobre você (300 caracteres no máximo)"
              value = {bio}
              onChange = {(e) => { setBio(e.target.value) }}
              maxLength = {300}
            />
						<InputAnimated typing="number" 
							label="Whatsapp (somente números)" 
							name="whatsapp" required
							value={whatsapp} onChange={(e) => { setWhatsapp(e.target.value) }}
						/>
					</fieldset>

					<fieldset>
						<legend>Onde você trabalha?</legend>
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
							<AiOutlineWarning id='warning_icon'/>
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