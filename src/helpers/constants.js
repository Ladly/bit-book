export const POSTS_URL = 'http://bitbookapi.azurewebsites.net/api/posts'
export const IMAGE_POST_REQUEST_URL = 'http://bitbookapi.azurewebsites.net/api/ImagePosts'
export const TEXT_POST_REQUEST_URL = 'http://bitbookapi.azurewebsites.net/api/TextPosts'
export const VIDEO_POST_REQUEST_URL = 'http://bitbookapi.azurewebsites.net/api/VideoPosts'
export const DELETE_POST_REQUEST = 'http://bitbookapi.azurewebsites.net/api/Posts'

export const USERS_PROFILES_REQUEST_URL = 'http://bitbookapi.azurewebsites.net/api/users'

export const PROFILE_URL = 'http://bitbookapi.azurewebsites.net/api/profile'
export const UPDATE_PROFILE_URL = 'http://bitbookapi.azurewebsites.net/api/Profiles'

export const COMMENTS_REQUEST_URL = 'http://bitbookapi.azurewebsites.net/api/Comments'
export const COMMENTS_POST_REQUEST_URL = 'http://bitbookapi.azurewebsites.net/api/Comments'

export const GETOPTIONS = {
	method: 'GET',
	headers: {
		'Content-Type': 'application/json',
		'Key': '64C82EE',
		'SessionId': 'a84dc34e-59d8-4e9c-a890-2550dd57191d'
	}
}

export const DEFAULTDELETEOPTIONS = {
	method: 'DELETE',
	headers: {
		'Content-Type': 'application/json',
		'key': '64C82EE',
		'SessionId': 'a84dc34e-59d8-4e9c-a890-2550dd57191d'
	}
}

export const CREATEOPTIONS = (body) => {
	return {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Key': '64C82EE',
			'SessionId': 'a84dc34e-59d8-4e9c-a890-2550dd57191d'
		},
		body: JSON.stringify(body)
	}
}

export const CREATEPUTOPTIONS = (body) => {
	return {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
			'Key': '64C82EE',
			'SessionId': 'a84dc34e-59d8-4e9c-a890-2550dd57191d'
		},
		body: JSON.stringify(body)
	}
}

