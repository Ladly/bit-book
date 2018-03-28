import {
	POSTS_URL, 
	IMAGE_POST_REQUEST_URL, 
	TEXT_POST_REQUEST_URL, 
	VIDEO_POST_REQUEST_URL 
} from './../helpers/constants'

import { 
	createPostInstance,
	createTextPostInstance,
	createImagePostInstance,
	createVideoPostInstance
} from './../helpers/utils'

const getOptions = {
	method: 'GET',
	headers: {
		'Content-Type': 'application/json',
		'Key': 'bitbook',
		'SessionId': '7A5D8FF8-B04D-4C8C-9812-8B44EB7E4C94'
	}
}

const createOptions = (body) => {
	return {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Key': 'bitbook',
			'SessionId': '7A5D8FF8-B04D-4C8C-9812-8B44EB7E4C94'
		},
		body: JSON.stringify(body)
	}
}

export class PostService {
	static fetchPosts() {
		return fetch(POSTS_URL, getOptions)
			.then(response => response.json())
			.then(response => createPostInstance(response, createTextPostInstance, createVideoPostInstance, createImagePostInstance))
	}

	static postTextRequest(postText) {
		const postOptions = createOptions({text: postText})
		return fetch(TEXT_POST_REQUEST_URL, postOptions)
			.then(response => console.log(response))
	}
	// look for prev example and understand it
	static postVideoRequest(body) {
		const postOptions = createOptions(body)
		return fetch(VIDEO_POST_REQUEST_URL, postOptions)
			.then(response => console.log(response))
	}

	static postImageRequest(body) {
		const postOptions = createOptions(body)
		return fetch(IMAGE_POST_REQUEST_URL, postOptions)
			.then(response => console.log(response))
	}

}

export const postText = new PostService()