import {
	GETOPTIONS,
	CREATEOPTIONS,
	PROFILE_URL
} from './../helpers/constants'

import {
	createProfileInstance
} from './../helpers/utils'

export class ProfileService {
	static fetchProfile = () => {
		return fetch(PROFILE_URL, GETOPTIONS)
			.then(response => response.json())
			.then(profile => createProfileInstance(profile))
	}

	static fetchProfileWithId = (id) => {
		return fetch(`http://bitbookapi.azurewebsites.net/api/users/${id}`, GETOPTIONS)
			.then(response => response.json())
	}
}