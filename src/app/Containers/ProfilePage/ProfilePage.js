import React, { Component } from 'react'

import { ProfileCard } from './../../Components/ProfileCard/ProfileCard'

import { ProfileService } from './../../../services/ProfileService'

class ProfilePage extends Component {
	constructor(props) {
		super()
		this.state = {
			profile: null
		}
	}

	componentDidMount() {
		ProfileService.fetchProfile()
			.then(profile => this.setState({...this.state, profile: profile}))
	}

	render() {
		console.log(this.state.profile)
		return (
			<div className="container">
			 	<ProfileCard profile={this.state.profile}/>
			</div>
		)
	}
}

export { ProfilePage }