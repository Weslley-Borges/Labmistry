import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import * as page from "./pages"

export const Routes = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={page.Landing}/>
				<Route path="/login" exact component={page.Login}/>
				<Route path="/create" exact component={page.Register}/>

				<Route path="/home" exact component={page.Home}/>
				<Route path="/periodc" exact component={page.PeriodicTable}/>
				<Route path="/chat" exact component={page.LandingChat}/>
				<Route path="/chat/create" exact component={page.NewChat}/>
				<Route path="/ss" exact component={page.Home}/>
      </Switch>
		</BrowserRouter>
)}