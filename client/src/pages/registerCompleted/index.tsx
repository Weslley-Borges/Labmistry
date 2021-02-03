import React, { useState } from 'react'
import { AiOutlineCheckCircle } from 'react-icons/ai'
import "./styles.scss"


/* 
	18/11/2020 - Author: Weslley Borges dos Santos
	Fronted da página de conclusão do registro
*/

export const RegisterCompleted = () => {

	return (
		<div className="page-registerCompleted">
			<div className="messageBox">
        <div className="image">
          <AiOutlineCheckCircle color="#f00" id="image"/>
        </div>
        <div className="message-content">
          <h1>Registro Concluído</h1>
          <p>Parabéns por se registar, você está registrado como aluno, mas poderá mudar para um perfil de educador através das configurações</p>
        </div>
      </div>
		</div>
	)
}  