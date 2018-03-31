import { VideoPosts } from './../entities/VideoPosts'
import { ImagePosts } from './../entities/ImagePosts'
import { TextPosts } from './../entities/TextPosts'

export const createTextPostInstance = (post) => {
	return new TextPosts(post.text, post.type, post.commentsNum, post.userId, post.id)
}

export const createImagePostInstance = (post) => {
	return new ImagePosts(post.imageUrl, post.type, post.commentsNum, post.userId, post.id)

}

export const createVideoPostInstance = (post) => {
	const goodFormat = makeYouTubeEmbedded(post.videoUrl)
	return new VideoPosts(goodFormat, post.type, post.commentsNum, post.userId, post.id)

}

export const createPostInstance = (posts, textCallback, videoCallback, imageCallback) => {
	return posts.map(post => {

		if (post.type === 'text') {

			return textCallback(post)
		} else if (post.type === 'video') {

			return videoCallback(post)
		} else if (post.type === 'image') {

			return imageCallback(post)
		}
	})
}

const makeYouTubeEmbedded = (url) => {
	const embed = 'embed/'
	const toReplace = 'watch?v='
	const wellFormatedUrl = url.replace(toReplace, embed)
	return wellFormatedUrl
}

export const testVideo = (url) =>{
	console.log(url.search('/embed/'))
	if(url.search('/embed/')) {
		return true
	}

	return false
}


