import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import { ProfileListCard } from './../ProfileListCard/ProfileListCard'

export const ProfileListItem = (props) => {
	const { user } = props

	return (
		<li>
			<Link to="frr gusteru">
				<ProfileListCard name={user.name} avatarUrl={user.avatarUrl} aboutShort={user.aboutShort}/>
			</Link>
		</li>
	)
}

ProfileListItem.propTypes = {
	user: PropTypes.object,
}