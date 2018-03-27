import React from 'react'
import PropTypes from 'prop-types'

export const ImagePost = (props) => {
	return (
		<img src={props.src} alt=""/>
	)
}

ImagePost.propTypes = {
	src: PropTypes.string
}
