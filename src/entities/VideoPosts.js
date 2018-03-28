import { Post } from './Post'

export class VideoPosts extends Post {
	constructor(url, type, commentsNum, userId, id) {
		super(type, commentsNum, userId, id)
		this.url = url
	}
}