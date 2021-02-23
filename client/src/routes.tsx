import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Landing, Login, Register, PeriodicTable, Home, LandingChat, NewChat} from "./pages"

export const Routes = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Landing}/>
				<Route path="/login" exact component={Login}/>
				<Route path="/create" exact component={Register}/>

				<Route path="/home" exact component={Home}/>
				<Route path="/periodc" exact component={PeriodicTable}/>
				<Route path="/chat" exact component={LandingChat}/>
				<Route path="/chat/create" exact component={NewChat}/>
				<Route path="/ss" exact component={Home}/>
      </Switch>
		</BrowserRouter>
)}