import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './PeoplePage.css'

import { UsersService } from './../../../services/UsersService'

import { ProfileListCard } from './../../Components/ProfileListCard/ProfileListCard'
import { SearchInput } from './../../Components/SearchInput/SearchInput'
import { createUsersInstance } from './../../../helpers/utils'


class PeoplePage extends Component {
	constructor(props) {
		super(props)

		this.state = {
			users: [],
			filteredUsers: [],
		}
	}

	componentDidMount() {
		UsersService.fetchUserProfiles()
			.then(users => this.setState({ users }))
	}

	makeProfileList = () => {
		if (this.state.users.length) {
			return this.state.users.map(user => {

				return (
					<li key={user.id}>
						<Link to={`/profile/${user.id}`}>
							<ProfileListCard name={user.name} avatarUrl={user.avatarUrl} aboutShort={user.aboutShort} />
						</Link>
					</li>
				)
			})
		} else {

			return <h2>Loading</h2>
		}
	}

	makeFilteredUsers = () => {
		if (this.state.filteredUsers.length) {
			return this.state.filteredUsers.map(filteredUser => {
				return (
					<li key={filteredUser.id}>
						<Link to={`/profile/${filteredUser.id}`}>
							<ProfileListCard name={filteredUser.name} avatarUrl={filteredUser.avatarUrl} aboutShort={filteredUser.aboutShort} />
						</Link>
					</li>
				)
			})
		}
	}

	displayList = () => {
		return (this.state.filteredUsers.length !== 0) ? this.makeFilteredUsers() : this.makeProfileList()
	}

	getCurrentInput = (inputValue) => {
		const filteredUsers = this.state.users.filter(user => {
			createUsersInstance(user)
			return user.name.includes(inputValue)
		})

		this.setState({ filteredUsers })
	}

	render() {
		return (
			<div className="container">
				<SearchInput getCurrentInput={this.getCurrentInput} />
				{this.displayList()}
			</div>
		)
	}
}

export { PeoplePage }