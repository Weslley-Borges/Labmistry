import React, { useState, FormEvent } from 'react'

import warningIcon from "../../assets/images/icons/warning.svg"
import PageHeader from '../../components/pageHeader'

import InputAnimated from '../../components/inputAnimated'
import '../../assets/styles/pages/register.scss'

/* 
	src/pages/registerTeacher.tsx, 12/17/2020
	Author: Weslley Borges dos Santos
	Este arquivo é o frontend da página de criação de sala
*/

export default function NewChat(){
	const [name, setName] = useState('')
	const [description, setDescription] = useState('')

	/*
		Na função handleCreate, os dados do formulário são recebidos 
		e avaliados, depois são mostrados em um alert, com os dados do registro (por enquanto).
	*/
	function handleCreate(e: FormEvent){
		e.preventDefault()
		const registerValues = {
			'Name':name, 
			'Description': description, 
		}
		return alert(
			alert("Sala criada")
		)
	}

	return(
		<div className="container page-register">
      <PageHeader
        title="Crie sua sala"
        description="e converse com outros alunos"
				link = "/chat"
			/>

      <main>
				<form onSubmit={handleCreate}>
					<fieldset>
						<legend>Dados da sala</legend>
						<InputAnimated typing="text" 
							label="Nome da sala" 
							name="chatName" required
							value={name} 
							onChange={(e) => { setName(e.target.value) }}
						/>
						<InputAnimated typing="text" 
							label="Descrição da sala" 
							name="description" required
							value={description} 
							onChange={(e) => { setDescription(e.target.value) }}
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