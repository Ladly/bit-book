import React, { Component } from 'react'

import { UsersService } from './../../../services/UsersService'

import { ProfileListItem } from './../../Components/ProfileListItem/ProfileListItem'
import { SearchInput } from './../../Components/SearchInput/SearchInput'
import { createUsersInstance } from './../../../helpers/utils'


class PeoplePage extends Component {
	constructor() {
		super()

		this.state = {
			users: [],
			filteredUsers: [],
		}
	}

	componentDidMount() {
		UsersService.fetchUserProfiles()
			.then(users => this.setState({ ...this.state, users }))
	}

	makeProfileList = () => {
		if (this.state.users.length) {
			return this.state.users.map(user => {

				return <ProfileListItem key={user.id} user={user} />
			})
		} else {

			return <h2>Loading</h2>
		}
	}

	makeFilteredUsers = () => {
		if (this.state.filteredUsers.length) {
			return this.state.filteredUsers.map(filteredUser => {
				return <ProfileListItem key={filteredUser.id} user={filteredUser} />
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
		console.log(this.state.filteredUsers)
		console.log(this.state.filteredUsers.length)
		return (
			<div className="container">
				<SearchInput getCurrentInput={this.getCurrentInput} />
				{this.displayList()}
			</div>
		)
	}
}

export { PeoplePage }