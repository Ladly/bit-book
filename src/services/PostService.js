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
		const postOptions = createOptions({ text: postText })
		return fetch(TEXT_POST_REQUEST_URL, postOptions)
	}

	
	static postVideoRequest(postVideo) {
		const postOptions = createOptions({ videoUrl: postVideo })
		console.log(postOptions)
		return fetch(VIDEO_POST_REQUEST_URL, postOptions)
	}
	
	static postImageRequest(postImage) {
		const postOptions = createOptions({ imageUrl: postImage })
		console.log(postOptions)
		return fetch(IMAGE_POST_REQUEST_URL, postOptions)
	}


}

export const postText = new PostService()