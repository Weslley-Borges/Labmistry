import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Landing from './pages/landing'
import Login from './pages/login'
import ChooseRegister from './pages/chooseRegister'
import RegisterStudent from './pages/registerStudent'

export default function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Landing}/>
				<Route path="/login" exact component={Login}/>
				<Route path="/create" exact component={ChooseRegister}/>
				<Route path="/create/student" exact component={RegisterStudent}/>
      </Switch>
		</BrowserRouter>
)}