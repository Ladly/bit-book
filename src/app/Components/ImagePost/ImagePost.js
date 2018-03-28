import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export const ImagePost = (props) => {
	return (
		<li >
			<Link to="/details">
				<div className="row">
					<div className="col s12">
						<div className="card">
							<div className="card-image">
								<img src={props.url} alt=""/>
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

ImagePost.propTypes = {
	url: PropTypes.string,
	type: PropTypes.string,
	commentsNo: PropTypes.number
}
