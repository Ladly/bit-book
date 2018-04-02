import React from 'react'

import PropTypes from 'prop-types'

import { PostListItem } from './../PostListItem/PostListItem'     

export const FeedPost = (props) => {
	const { posts } = props
	
	const pickRenderer = (post) =>{
		if(post.type === 'video') {

			return <PostListItem key={post.id} id={post.id} url={post.url} commentsNo={post.commentsNum} type={post.type} />		
		} else if (post.type === 'text') {
			
			return <PostListItem key={post.id} id={post.id} text={post.text} commentsNo={post.commentsNum} type={post.type} />
		} else if (post.type === 'image'){
			
			return 	<PostListItem key={post.id} id={post.id} url={post.url} commentsNo={post.commentsNum} type={post.type} />
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
