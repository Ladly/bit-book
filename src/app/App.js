import React from 'react'
import { Switch, Route } from 'react-router-dom'
import 'materialize-css/dist/css/materialize.css'
import 'materialize-css/dist/js/materialize.min.js'

import { Header } from './Components/Header/Header'
import { Footer } from './Components/Footer/Footer'
import FeedPage from './Containers/FeedPage/FeedPage'
import { PostDetailsPage } from './Containers/PostDetailsPage/PostDetailsPage'
import { ProfilePage } from './Containers/ProfilePage/ProfilePage'
import { PeoplePage } from './Containers/PeoplePage/PeoplePage'

export const App = () => {
	return (
		<div>
			<Header />
			<Switch>
				<Route exact path="/" component={FeedPage} />
				<Route exact path="/details/:type/:id" component={PostDetailsPage} />
				<Route exact path="/people" component={PeoplePage} />
				<Route exact path="/profile" component={ProfilePage} />
				<Route exact path="/profile/:id" component={ProfilePage} />
			</Switch>
			<Footer />
		</div>
	)
}

