import React from 'react'

import PropTypes from 'prop-types'

import { ImagePost } from './../ImagePost/ImagePost'           
import { TextPost } from './../TextPost/TextPost'           
import { VideoPost } from './../VideoPost/VideoPost'           

export const FeedPost = (props) => {
	const { posts } = props
	const pickRenderer = (post) =>{
		if(post.type === 'video') {
			return <VideoPost key={post.id} url={post.url} commentsNo={post.commentsNum} type={post.type}/>			
		} else if (post.type === 'text') {
			return <TextPost  key={post.id} text={post.text} commentsNo={post.commentsNum} type={post.type}/>
		} else if (post.type === 'image'){
			return <ImagePost  key={post.id} url={post.url} commentsNo={post.commentsNum} type={post.type}/>
		}
	}

	const mapProps = () => {		
		return posts.map((post) => {
			return pickRenderer(post)
		})
	}

	return (
		<ul>
			{mapProps()}
		</ul>		
	)

}

FeedPost.propTypes = {
	videoUrl: PropTypes.string,
	text: PropTypes.string,
	imageUrl: PropTypes.string,
	posts: PropTypes.array,
	type: PropTypes.string,
	comments: PropTypes.number
}
