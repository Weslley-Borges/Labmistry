import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Landing, Login, Register, RegisterCompleted, PeriodicTable, Home, LandingChat, NewChat } from "./pages"

export const Routes = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Landing}/>
				<Route path="/login" exact component={Login}/>
				<Route path="/create" exact component={Register}/>
				<Route path="/create/completed" exact component={RegisterCompleted}/>

				<Route path="/home" exact component={Home}/>
				<Route path="/periodc" exact component={PeriodicTable}/>
				<Route path="/chat" exact component={LandingChat}/>
				<Route path="/chat/create" exact component={NewChat}/>
      </Switch>
		</BrowserRouter>
)}