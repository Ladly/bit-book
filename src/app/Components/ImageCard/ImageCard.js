import React from 'react'
import PropTypes from 'prop-types'

export const ImageCard = (props) => {
	
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
						<img src={props.url} alt=""/>
					</div>
					{displayCardContent()}
				</div>
			</div>
		</div>
	)
}

ImageCard.propTypes = {
	url: PropTypes.string,
	type: PropTypes.string,
	id: PropTypes.number,
	commentsNo: PropTypes.number,
	loggedUserId: PropTypes.number,
	deletePost: PropTypes.func,
	postUserId: PropTypes.number
}