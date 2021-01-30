import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Landing from './pages/landing'
import Login from './pages/login'
import Register from './pages/register'
import RegisterCompleted from './pages/registerCompleted'
import PeriodicTable from './pages/periodicTable'
import Home from './pages/user'
import LandingChat from './pages/chat/landing'
import NewChat from './pages/chat/newChat'


const Routes = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Landing}/>
				<Route path="/login" exact component={Login}/>
				<Route path="/create" exact component={Register}/>
				<Route path="/create/completed" exact component={RegisterCompleted}/>

				{/*Páginas principais (vão precisar da autenticação do usuário)*/}
				<Route path="/home" exact component={Home}/>


				<Route path="/periodc" exact component={PeriodicTable}/>
				<Route path="/chat" exact component={LandingChat}/>
				<Route path="/chat/create" exact component={NewChat}/>
      </Switch>
		</BrowserRouter>
)}
export default Routes