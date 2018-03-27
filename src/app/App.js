import React from 'react'
import 'materialize-css/dist/css/materialize.css'
import { Switch, Route } from 'react-router-dom' 

import { Header } from './Components/Header/Header'
import { Footer } from './Components/Footer/Footer'
import { FeedPage } from './Containers/FeedPage/FeedPage'

export const App = () => {
	return (
		<div>
			<Header />
			<Switch>
				<Route exact path="/" component={FeedPage}/> 
				<Route exact path="/people"/> 
				<Route exact path="/profile"/> 
			</Switch>
			<Footer />
		</div>
	)
}

