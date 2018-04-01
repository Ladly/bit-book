import React from 'react'
import PropTypes from 'prop-types'

export const CardContent = (props) => {
	return (
		<div className="card-content">
			<hr />
			<p><span>{props.type}</span> <span className="right">{props.commentsNo}</span></p>
		</div>
	)
}

CardContent.propTypes = {
	type: PropTypes.string,
	commentsNo: PropTypes.number
}