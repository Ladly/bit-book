export class Comments {
	constructor(id, authorName, body, dateCreated, postId, authorId) {
		this.authorName = authorName
		this.body = body
		this.dateCreated = dateCreated
		this.id = id
		this.postId = postId
		this.authorId = authorId
	}
}