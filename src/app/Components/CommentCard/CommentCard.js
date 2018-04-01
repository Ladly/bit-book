import React from 'react'
import PropTypes from 'prop-types'

export const CommentCard = (props) => {
	return (
		<div className="row">
			<div className="col s12">
				<div className="card">
					<div className="card-image">
						{/* <img src={props.avatar} alt="" /> */}
					</div>
					<span className="card-title">{props.authorName}</span>
					<div className="card-content">
						<p>{props.body}</p>
					</div>
				</div>
			</div>
		</div>
	)
}

CommentCard.propTypes = {
	authorName: PropTypes.string,
	body: PropTypes.string
}