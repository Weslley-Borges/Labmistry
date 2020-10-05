import React, { useState, FormEvent, Component } from 'react'

import WarningIcon from "../../assets/images/icons/warning.svg"
import PageHeader from '../../components/pageHeader'
import Input from '../../components/input'
import Select from '../../components/select'
import GeoStates from '../../utils/GeoStates.json'
import Schools from '../../utils/schools.json'

import './style.scss'

export default function RegisterStudent(){

	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [CPF, setCPF] = useState('')
	const [geoState, setGeoState] = useState('')
	const [school, setSchool] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')

	function handleRegisterStudent(e: FormEvent){
		e.preventDefault()
		if(password === confirmPassword){
			const StudentRegist_values = {
				'Name': name, 'Email': email, 'CPF': CPF, 'GeoState': geoState,'School': school,
				'Password': password, 'ConfirmPassword': confirmPassword
			}
			return console.log(StudentRegist_values);
		}alert('Ocorreu um erro:\nAs senhas devem ser iguais')}

	const states = GeoStates.map((state) => {return({value: state.sigla, label: state.nome})})
	var getSchools = Schools.filter((school) => school.State == geoState)
	var schools = getSchools.map((school) => {return({value: school.Name, label: school.Name})})
		

	return (
		<div id="page-registro-aluno">
			<PageHeader link="/registro" title="Aluno, cadastre-se!" description="Receba suas aulas online." />
			<div id="page-registro-aluno-content" className="container">
				<form onSubmit={handleRegisterStudent}>
					<section>
						<Input typing="text" label="Nome completo" name="completeName" required
						value={name} onChange={(e) => { setName(e.target.value) }}/>
						<Input typing="text" label="E-mail" name="email" required
						value={email} onChange={(e) => { setEmail(e.target.value) }}/>
						<Input typing="number" label="CPF (somente números)" name="cpf" required
						value={CPF} onChange={(e) => { setCPF(e.target.value) }}/><br/>

						<Select name="geoState" label="Estado" 
						value={geoState} required
						onChange={(e) => { setGeoState(e.target.value) }}
							options={states}/>
						<Select name="school" label="Escola" 
						value={school} required
						onChange={(e) => { setSchool(e.target.value) }}
							options={schools}/>
					</section>
					<section>
						<p>
							Dica: Use uma senha com mais de 8 caracteres
							para a sua segurança.
            </p><br/>
						<Input typing="password" label="Senha" name="password" required
						value={password} onChange={(e) => { setPassword(e.target.value) }}/>
						<Input typing="password" label="Confirme a senha" name="confirmPassword" required
						value={confirmPassword} onChange={(e) => { setConfirmPassword(e.target.value) }}/>
					</section>
					<footer>
						<p> 
							<img src={WarningIcon} alt="Aviso importante"/>
              Importante!<br/>Preencha todos os dados
            </p><button type="submit">Cadastrar</button>
					</footer>
				</form>
			</div>
		</div>
	)
}