import { Post } from './../entities/Post'

export const createPostInstance = (posts) => {
	return posts.map(post => {
		return new Post(post.text, post.type, post.commentsNum)
	})
}