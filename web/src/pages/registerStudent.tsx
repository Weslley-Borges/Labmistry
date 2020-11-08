import React, { useState, FormEvent } from 'react'

import WarningIcon from "../assets/images/icons/warning.svg"
import PageHeader from '../components/pageHeader'
import Input from '../components/input'

import '../assets/styles/register.scss'

export default function RegisterStudent(){

	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [CPF, setCPF] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')

	function handleRegister(e: FormEvent){
		e.preventDefault()
		if(password === confirmPassword){
			const registerValues = {
				'Name':name, 'Email':email, 'Cpf':CPF,
				'Password':password, 'ConfirmPassword':confirmPassword}
			return alert(`
			Informações do aluno:
			Nome: ${registerValues.Name}
			Email: ${registerValues.Email}
			CPF: ${registerValues.Cpf}`)
		}alert('Ocorreu um erro:\nAs senhas devem ser iguais')}

	return (
		<div id="page-registro-aluno">
			<PageHeader link="/create" title="Olá, aluno!"/>

			<main id="page-registro-aluno-content" className="container">
				<form onSubmit={handleRegister}>
					<section>
						<Input typing="text" label="Nome completo" name="completeName" required
						value={name} onChange={(e) => { setName(e.target.value) }}/>
						<Input typing="email" label="E-mail" name="email" required
						value={email} onChange={(e) => { setEmail(e.target.value) }}/>
						<Input typing="number" label="CPF (somente números)" name="cpf" required
						value={CPF} onChange={(e) => { setCPF(e.target.value) }}/><br/>
					</section>
					<section>
						<Input typing="password" label="Senha" name="password" required
						value={password} onChange={(e) => { setPassword(e.target.value) }}/>
						<Input typing="password" label="Confirme a senha" name="confirmPassword" required
						value={confirmPassword} onChange={(e) => { setConfirmPassword(e.target.value) }}/>
					</section>

					<footer>
						<p> <img src={WarningIcon} alt="Aviso importante"/>Importante!<br/>Preencha todos os dados</p>
						<button type="submit">Cadastrar</button>
					</footer>
					
				</form>
			</main>
		</div>
	)
}