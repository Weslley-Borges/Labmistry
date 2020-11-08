import React from 'react'
import { Link } from 'react-router-dom'

import PageHeader from '../components/pageHeader'

import '../assets/styles/registing.scss'
import chooseTeacher from '../assets/images/icons/chooseTeacher.svg'
import chooseStudent from '../assets/images/icons/chooseStudent.svg'

export default function ChooseRegister(){
	return (
		<div id="page-choose-profile">
			<PageHeader link="/" title="Eu sou..."/>
			<div id="page-choose-profile-content">
				<div className="container">
					<div className="box">
						<Link to="/create/student" className="student"><img src={chooseStudent} alt="Novo aluno"/>Novo aluno</Link>
					</div>
					<div className="box">
						<Link to="/create/teacher" className="teacher"><img src={chooseTeacher} alt="Novo professor"/>Novo professor</Link>
					</div>
				</div>
			</div>
		</div>
	)
}