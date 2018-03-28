import { Post } from './Post'

export class TextPosts extends Post {
	constructor(text, type, commentsNum, userId, id) {
		super(type, commentsNum, userId, id)
		this.text = text
	}
}