import React from 'react'
import PropTypes from 'prop-types'

export const TextCard = (props) => {

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
					<div className="card-image center" >
						<p>{props.text}</p>
					</div>
					{displayCardContent()}
				</div>
			</div>
		</div>
	)
}

TextCard.propTypes = {
	text: PropTypes.string,
	type: PropTypes.string,
	id: PropTypes.number,
	postUserId: PropTypes.number,
	loggedUserId: PropTypes.number,
	deletePost: PropTypes.func,
	commentsNo: PropTypes.number
}