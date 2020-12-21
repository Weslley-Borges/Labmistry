import React from 'react'
import { RiMenu4Line, RiHome2Line } from 'react-icons/ri'
import { AiOutlineLogout, AiOutlineSetting, AiOutlineSearch } from 'react-icons/ai'
import { IoGameControllerOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'

import '../../assets/styles/pages/user/home.scss'

import LogoImg from '../../assets/images/logo.svg'
import students from '../../assets/images/Students.svg'

/* 
	src/pages/user/home.tsx, 12/18/2020
	Author: Weslley Borges dos Santos
	Este arquivo é o frontend do dashboard do usuário
*/

export default function Home() {
	return (
		<div id="page-home">
			<div className="page-home-content">
				<input type="checkbox" id="menu"/>

				<nav>
				<img src={LogoImg} alt="Labmistry"/>
					<ul>
						<li><a href="#">Logout</a></li>
					</ul>

					<label htmlFor="menu" className="menu-bar">
						<RiMenu4Line size="3rem" color="#fff"/>
					</label>

				</nav>

				<div className="side-menu">
					<main>
						<img src={students} alt=""/>
						<br/>
						<h2>Um estudante</h2>
					</main>
					<br/>

					<Link to="/" className="menu_option"> <RiHome2Line size="3rem" color="#fff" className= "option_img"/><span>Home</span></Link>
					<Link to="/" className="menu_option"> <AiOutlineSearch size="3rem" color="#fff" className= "option_img"/><span>Search</span></Link>
					<Link to="/" className="menu_option"> <IoGameControllerOutline size="3rem" color="#fff" className= "option_img"/><span>Play</span></Link>
					<Link to="/" className="menu_option"> <AiOutlineSetting size="3rem" color="#fff" className= "option_img"/><span>Settings</span></Link>

					<Link to="/" className="menu_option"> <AiOutlineLogout size="3rem" color="#fff" className= "option_img logout"/><span className="logout">LogOut</span></Link>


				</div>
			</div>
			
		</div>
)}