import {
	POSTS_URL,
	IMAGE_POST_REQUEST_URL,
	TEXT_POST_REQUEST_URL,
	VIDEO_POST_REQUEST_URL,
	GETOPTIONS,
	CREATEOPTIONS,
	DEFAULTDELETEOPTIONS,
	DELETE_POST_REQUEST,
} from './../helpers/constants'

import {
	createPostInstance,
	createTextPostInstance,
	createImagePostInstance,
	createVideoPostInstance,
} from './../helpers/utils'


export class PostService {
	static fetchPosts() {
		return fetch(POSTS_URL, GETOPTIONS)
			.then(response => response.json())
			.then(response => createPostInstance(response, createTextPostInstance, createVideoPostInstance, createImagePostInstance))
	}

	static postTextRequest(postText) {
		const postOptions = CREATEOPTIONS({ text: postText })
		return fetch(TEXT_POST_REQUEST_URL, postOptions)
	}

	static postVideoRequest(postVideo) {
		const postOptions = CREATEOPTIONS({ videoUrl: postVideo })
		return fetch(VIDEO_POST_REQUEST_URL, postOptions)
	}

	static postImageRequest(postImage) {
		const postOptions = CREATEOPTIONS({ imageUrl: postImage })
		return fetch(IMAGE_POST_REQUEST_URL, postOptions)
	}

	static singleTextPostRequest(id, type) {
		return fetch(`${TEXT_POST_REQUEST_URL}/${id}`, GETOPTIONS)
			.then(response => response.json())
	}

	static singleVideoPostRequest(id) {
		return fetch(`${VIDEO_POST_REQUEST_URL}/${id}`, GETOPTIONS)
			.then(response => response.json())
	}

	static singleImagePostRequest(id) {
		return fetch(`${IMAGE_POST_REQUEST_URL}/${id}`, GETOPTIONS)
			.then(response => response.json())
	}

	static deletePost(id) {
		return fetch(`${DELETE_POST_REQUEST}/${id}`, DEFAULTDELETEOPTIONS)
	}
}
