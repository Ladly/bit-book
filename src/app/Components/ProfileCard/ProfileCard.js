import React from 'react' 
import PropTypes from 'prop-types'

export const ProfileCard = (props) => {
	const content = () => {
		if(props.profile === null) {
			return <h2>loading</h2>
		} else {
			return (
				<div className="row">
					<div className="col s12">
						<div className="card large">
							<div className="card-image">
								<img src={props.profile.avatarUrl} alt=""/>
							</div>
							<div className="card-content center">
								<p>{props.profile.aboutShort}</p>
							</div>
							<div className="card-action">
								<p ><span className="left">{props.profile.postsCount}</span><span className="right">{props.profile.commentsCount}</span></p>
							</div>
						</div>
					</div>
				</div>
			)
		}
	}

	return (
		<div>
			{content()}
		</div>
	)

}

ProfileCard.propTypes = {
	profile: PropTypes.object
}