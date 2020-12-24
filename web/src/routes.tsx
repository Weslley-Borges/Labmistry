import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Landing from './pages/landing'
import Login from './pages/login'
import ChooseRegister from './pages/chooseRegister'
import RegisterStudent from './pages/registerStudent'
import RegisterTeacher from './pages/registerTeacher'

import PeriodicTable from './pages/periodicTable'

import Home from './pages/user/home'

import LandingChat from './pages/chat/landingChat'
import NewChat from './pages/chat/newChat'

/* 
	13/11/2020 - Author: Weslley Borges dos Santos
	Todas as rotas do frontend
*/

export default function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Landing}/>
				<Route path="/login" exact component={Login}/>
				<Route path="/create" exact component={ChooseRegister}/>
				<Route path="/create/student" exact component={RegisterStudent}/>
				<Route path="/create/teacher" exact component={RegisterTeacher}/>

				{/*Páginas principais (vão precisar da autenticação do usuário)*/}
				<Route path="/home" exact component={Home}/>


				<Route path="/periodc" exact component={PeriodicTable}/>
				<Route path="/chat" exact component={LandingChat}/>
				<Route path="/chat/create" exact component={NewChat}/>
      </Switch>
		</BrowserRouter>
)}