import { POSTS_URL } from './../helpers/constants'
import { createPostInstance } from './../helpers/utils'

const options = {
	method: 'GET',
	headers: {
		'Content-Type': 'application/json',
		'Key': 'bitbook',
		'SessionId': '7A5D8FF8-B04D-4C8C-9812-8B44EB7E4C94'
	}
}

export class PostService {
	static fetchPosts() {
		return fetch(POSTS_URL, options)
			.then(response => response.json())
			.then(response => createPostInstance(response))

	}
}