import React from 'react'
import { Link } from 'react-router-dom'

import { ImEnter } from 'react-icons/im'
import { FaPlus } from 'react-icons/fa'
import { BiArrowBack } from 'react-icons/bi'

import '../../assets/styles/pages/chat/landingChat.scss'
import GroupChat from '../../assets/images/groupChat.svg'


/* 
	src/pages/chat/landingChat.tsx, 11/18/2020
	Author: Weslley Borges dos Santos
	Este arquivo é o frontend da landing page dos chats
*/

export default function LandingChat() {
	return (
		<div id="page-landingChat">
			<div className="page-landingChat-content">
				<div className="image-wrapper">
					<img src={GroupChat} alt="GroupChat"/>
					<h3>Converse com outros alunos e professores</h3>
				</div>
				<div className="buttons-wrapper">
					<Link to="/" className="button">
						<ImEnter color="#FFF" className="image"/>Entrar na sala
					</Link>
					<Link to="/chat/create" className="button">
						<FaPlus color="#FFF" className="image"/>Criar uma sala
					</Link>
					<Link to="/" className="button">
						<BiArrowBack color="#FFF" className="image"/>Voltar para o perfil
					</Link>
				</div>
			</div>
		</div>
)}