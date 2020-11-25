import React from 'react'
import { Link } from 'react-router-dom'

import LogoImg from '../assets/images/logo.svg'
import LandingImg from '../assets/images/principal_image.svg'
import LoginIcon from '../assets/images/icons/login.svg'
import RegisterIcon from '../assets/images/icons/register.svg'

import '../assets/styles/pages/landing.scss'

/* 
	src/pages/landing.tsx, 11/18/2020
	Author: Weslley Borges dos Santos
	Este arquivo é o frontend da landing page
*/

export default function Landing() {
	return (
		<div id="page-landing">
			<div id="page-landing-content" className="container">
				<div className="logo-container">
					<img src={LogoImg} alt="Labmistry"/>
					<h2>Sua plataforma de química online</h2>
				</div>
				<img src={LandingImg} alt="" className="hero-image" />

				<div className="buttons-container">
					<Link to="/login" className="login">
						<img src={LoginIcon} alt="Login"/>Login
					</Link>
					<Link to="/create" className="register">
						<img src={RegisterIcon} alt="Estudar"/>Registrar
					</Link>
				</div>
			</div>
		</div>
)}