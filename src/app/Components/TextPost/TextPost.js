import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export const TextPost = (props) => {
	return (
		<li>
			<Link to="/details">
				<div className="row">
					<div className="col s12">
						<div className="card">
							<div className="card-image center" >
								<p>{props.text}</p>
							</div>
							<div className="card-content">
								<hr />
								<p><span>{props.type}</span> <span className="right">{props.commentsNo}</span></p>
							</div>
						</div>
					</div>
				</div>
			</Link>
	  	</li>
	)
}

TextPost.propTypes = {
	text: PropTypes.string,
	type: PropTypes.string,
	commentsNo: PropTypes.number
}

