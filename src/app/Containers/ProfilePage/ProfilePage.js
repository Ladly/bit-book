import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { ProfileCard } from './../../Components/ProfileCard/ProfileCard'

import { ProfileService } from './../../../services/ProfileService'

class ProfilePage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			profile: null
		}
	}

	componentDidMount() {
		const id = this.props.match.params.id
		if (!id) {
			ProfileService.fetchProfile()
				.then(profile => this.setState({ profile }))
		} else {
			ProfileService.fetchProfileWithId(id)
				.then(profile => this.setState({ profile }))
		}

	}

	render() {
		return (
			<div className="container">
				<ProfileCard profile={this.state.profile} />
			</div>
		)
	}
}

ProfilePage.propTypes = {
	match: PropTypes.object,
}

export { ProfilePage }