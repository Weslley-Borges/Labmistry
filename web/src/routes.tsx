import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Landing from './pages/landing'
import Login from './pages/login'
import Register from './pages/register'

export default function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Landing}/>
				<Route path="/login" exact component={Login}/>
				<Route path="/registro" exact component={Register}/>
      </Switch>
		</BrowserRouter>
)}