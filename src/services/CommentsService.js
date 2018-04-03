import {
	COMMENTS_REQUEST_URL,
	GETOPTIONS,
	CREATEOPTIONS,
	COMMENTS_POST_REQUEST_URL
} from './../helpers/constants'

import {
	createCommentsInstance,
} from './../helpers/utils'

export class CommentsService {
	static postCommentsFetch(id) {
		return fetch(`${COMMENTS_REQUEST_URL}?postId=${id}`, GETOPTIONS)
			.then(response => response.json())
			.then(comments =>  comments.map(comment => createCommentsInstance(comment)))
	}

	static postCommentsPost(data){
		const postOptions = CREATEOPTIONS(data)
		return fetch(COMMENTS_POST_REQUEST_URL, postOptions)
	}
}