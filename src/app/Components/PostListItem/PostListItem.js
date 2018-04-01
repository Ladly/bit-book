import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { TextCard } from './../TextCard/TextCard'
import { VideoCard } from './../VideoCard/VideoCard'
import { ImageCard } from './../ImageCard/ImageCard'


export const PostListItem = (props) => {

	const pickType = () => {
		if(props.type === 'video') {
			
			return <VideoCard url={props.url} commentsNo={props.commentsNo} type={props.type} />			
		} else if (props.type === 'text') {
			
			return <TextCard text={props.text} commentsNo={props.commentsNo} type={props.type} />
		} else if (props.type === 'image'){
			
			return <ImageCard url={props.url} commentsNo={props.commentsNo} type={props.type} />
		}
	}

	return (
		<li>
			<Link to={`/details/${props.type}/${props.id}`}>
				{pickType()}
			</Link>
	  	</li>
	)
}

PostListItem.propTypes = {
	commentsNo: PropTypes.number,
	url: PropTypes.string,
	text: PropTypes.string,
	id: PropTypes.number,
	type: PropTypes.string
}