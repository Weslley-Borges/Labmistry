import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Landing from './pages/pre_login/landing'
import Login from './pages/pre_login/login'
import ChooseRegister from './pages/pre_login/profileType'
import RegisterStudent from './pages/pre_login/registerStudent'
import RegisterTeacher from './pages/pre_login/registerTeacher'
import RegisterCompleted from './pages/pre_login/registerCompleted'

import PeriodicTable from './pages/pos_login/periodicTable'

import Home from './pages/pos_login/user'

import LandingChat from './pages/pos_login/chat/landing'
import NewChat from './pages/pos_login/chat/newChat'

/* 
	13/11/2020 - Weslley Borges dos Santos
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
				<Route path="/create/completed" exact component={RegisterCompleted}/>

				{/*Páginas principais (vão precisar da autenticação do usuário)*/}
				<Route path="/home" exact component={Home}/>


				<Route path="/periodc" exact component={PeriodicTable}/>
				<Route path="/chat" exact component={LandingChat}/>
				<Route path="/chat/create" exact component={NewChat}/>
      </Switch>
		</BrowserRouter>
)}