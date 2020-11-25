import React from 'react'
import { Link } from 'react-router-dom'

import PageHeader from '../components/pageHeader'
import chooseTeacher from '../assets/images/icons/chooseTeacher.svg'
import chooseStudent from '../assets/images/icons/chooseStudent.svg'

import '../assets/styles/pages/registing.scss'

/* 
	src/pages/chooseRegister.tsx, 11/18/2020
	Author: Weslley Borges dos Santos
	Este arquivo é o frontend da página de escolha do tipo de registro
*/

export default function ChooseRegister(){
	return (
		<div id="page-choose-profile">
			<PageHeader link="/" title="Eu sou..."/>
			<div id="page-choose-profile-content">
				<div className="container">

					<div className="box">
						<Link to="/create/student" className="student">
							<img src={chooseStudent} alt="Novo aluno"/>Novo aluno
						</Link>
					</div>

					<div className="box">
						<Link to="/create/teacher" className="teacher">
							<img src={chooseTeacher} alt="Novo professor"/>Novo professor
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}