import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Landing from './pages/landing'
import LandingChat from './pages/chat/landingChat'
import NewChat from './pages/chat/newChat'
import Login from './pages/login'
import ChooseRegister from './pages/chooseRegister'
import RegisterStudent from './pages/registerStudent'
import RegisterTeacher from './pages/registerTeacher'
import TeacherProfile from './pages/teacherProfile'

import PeriodicTable from './pages/periodicTable'



export default function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Landing}/>
				<Route path="/login" exact component={Login}/>
				<Route path="/create" exact component={ChooseRegister}/>
				<Route path="/create/student" exact component={RegisterStudent}/>
				<Route path="/create/teacher" exact component={RegisterTeacher}/>
				<Route path="/user/teacher" exact component={TeacherProfile}/>

				<Route path="/periodc" exact component={PeriodicTable}/>
				<Route path="/chat" exact component={LandingChat}/>
				<Route path="/chat/create" exact component={NewChat}/>
      </Switch>
		</BrowserRouter>
)}