import React from 'react'
import PropTypes from 'prop-types'

export const VideoCard = (props) => {

	const displayCardContent = () => {
		if(props.type || props.commentsNo){
			return (
				<div className="card-content">
					<hr />
					<p><span>{props.type}</span> <span className="right">{props.commentsNo}</span></p>
				</div>
			)
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