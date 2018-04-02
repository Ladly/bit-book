import React from 'react'
import PropTypes from 'prop-types'

export const ProfileListCard = (props) => {
	return (
		<div className="row">
			<div className="col s12">
				<div className="card">
					<div className="card-image">
						<img src={props.avatarUrl} alt=""/>
					</div>
					<div className="card-content">
						<h4>{props.name}</h4>
						<p>{props.aboutShort}</p>
					</div>
				</div>
			</div>
		</div>
	)
}

ProfileListCard.propTypes = {
	avatarUrl: PropTypes.string,
	name: PropTypes.string,
	aboutShort: PropTypes.string
}