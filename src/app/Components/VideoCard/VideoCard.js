import React from 'react'
import PropTypes from 'prop-types'
import { CardContent } from './../CardContent/CardContent'

export const VideoCard = (props) => {

	const displayCardContent = () => {
		if(props.type || props.commentsNo){
			return <CardContent type={props.type} commentsNo={props.commentsNo}/>
		}
	}

	return (
		<div className="row">
			<div className="col s12">
				<div className="card">
					<div className="card-image">
						<iframe width="100%" src={props.url} allow="autoplay; encrypted-media"  height="500" title={props.url}></iframe> 
					</div>
					{displayCardContent()}
				</div>
			</div>
		</div>
	)
}

VideoCard.propTypes = {
	url: PropTypes.string,
	type: PropTypes.string,
	loggedUserId: PropTypes.number,
	postUserId: PropTypes.number,
	id: PropTypes.number,
	deletePost: PropTypes.func,
	commentsNo: PropTypes.number
}