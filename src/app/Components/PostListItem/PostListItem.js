import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { TextCard } from './../TextCard/TextCard'
import { VideoCard } from './../VideoCard/VideoCard'
import { ImageCard } from './../ImageCard/ImageCard'


export const PostListItem = (props) => {

	const displayDelete = () => {
		if(props.loggedUserId === props.postUserId) {
			return <button onClick={() => props.deletePost(props.id)} className="waves-effect waves-light btn random-button">Delete</button>
		}
	}


	const pickType = () => {
		if(props.type === 'video') {			
			return (
				<li className="col s12">
					<Link to={`/details/${props.type}/${props.id}`}>
						<VideoCard url={props.url} id={props.id} commentsNo={props.commentsNo} type={props.type} />
					</Link>	
					{displayDelete()}				
				</li>
			)			
		} else if (props.type === 'text') {
			return (
				<li>
					<Link to={`/details/${props.type}/${props.id}`}>
						<TextCard text={props.text} id={props.id} commentsNo={props.commentsNo} type={props.type} />
					</Link>
					{displayDelete()}
				</li>
			)
		} else if (props.type === 'image'){
			return (
				<li>
					<Link to={`/details/${props.type}/${props.id}`}>
						<ImageCard url={props.url} id={props.id} commentsNo={props.commentsNo} type={props.type} />
					</Link>
					{displayDelete()}
				</li>
			)		
		}
	}

	return (
		<React.Fragment>
			{pickType()}
		</React.Fragment>
	)
}

PostListItem.propTypes = {
	commentsNo: PropTypes.number,
	url: PropTypes.string,
	text: PropTypes.string,
	id: PropTypes.number,
	loggedUserId: PropTypes.number,
	postUserId: PropTypes.number,
	deletePost: PropTypes.func,
	type: PropTypes.string
}