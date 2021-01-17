import React, { useState, FormEvent } from 'react'

import PageHeader from '../../../../components/pageHeader'

import InputAnimated from '../../../../components/inputAnimated'
import '../../../../assets/styles/register.scss'
import { AiOutlineWarning } from 'react-icons/ai'

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