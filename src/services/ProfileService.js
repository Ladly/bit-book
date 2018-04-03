import {
	GETOPTIONS,
	CREATEPUTOPTIONS,
	PROFILE_URL,
	UPDATE_PROFILE_URL,
	USERS_PROFILES_REQUEST_URL
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
		return fetch(`${USERS_PROFILES_REQUEST_URL}/${id}`, GETOPTIONS)
			.then(response => response.json())
	}

	static updateProfile = (data) => {
		console.log(data)
		return fetch(UPDATE_PROFILE_URL, CREATEPUTOPTIONS(data))
	}
}