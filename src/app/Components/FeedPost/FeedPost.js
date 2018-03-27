import React from 'react'

import PropTypes from 'prop-types'

import { ImagePost } from './../ImagePost/ImagePost'           
import { TextPost } from './../TextPost/TextPost'           
import { VideoPost } from './../VideoPost/VideoPost'           

export const FeedPost = (props) => {

	const pickRenderer = (post) =>{
		const { type, text } = post
		if(type === 'video') {
			return <VideoPost  src={props.videoUrl}/>			
		} else if (type === 'text') {
			return <TextPost text={text} />
		} else if (type === 'image'){
			return <ImagePost src={props.imageUrl}/>
		}
	}

	const mapProps = () => {		
		return props.posts.map((post) => {
			console.log(post)
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
