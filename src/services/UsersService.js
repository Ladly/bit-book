import {
	GETOPTIONS,
	USERS_PROFILES_REQUEST_URL
} from './../helpers/constants'

import {
	createUsersInstance
} from './../helpers/utils'

export class UsersService {
	static fetchUserProfiles = () => {
		return fetch(USERS_PROFILES_REQUEST_URL, GETOPTIONS)
			.then(response => response.json())
			.then(users => {
				return users.map(user => {
					return createUsersInstance(user)
				})
			})
	}
}