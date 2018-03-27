import React from 'react'
import PropTypes from 'prop-types'

export const VideoPost = (props) => {
	return (
		<iframe width="560" height="315" src={props.src} allow="autoplay; encrypted-media" title="title kate"></iframe> 
		// { dont forget about title }
	)
}

VideoPost.propTypes = {
	src: PropTypes.string
}