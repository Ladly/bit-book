import React from 'react'
import { CommentCard } from './../CommentCard/CommentCard'
import PropTypes from 'prop-types'

export const CommentListItem = (props) => {
	return (
		<li className='center-align'>
			<CommentCard authorName={props.authorName} body={props.body}/>	
		</li>
	)
}

CommentListItem.propTypes = {
	authorName: PropTypes.string,
	body: PropTypes.string
}