import React, { Component } from 'react'

import { UsersService } from './../../../services/UsersService'

class PeoplePage extends Component {
	constructor(){
		super()

		this.state = {
			users: []
		}
	}

	componentDidMount() {
		UsersService.fetchUserProfiles()
			.then(users => this.setState({ ...this.state, users }))
	}

	render() {
		console.log(this.state.users)
		return(
			'hello from people page'
		)
	}
}

export { PeoplePage }