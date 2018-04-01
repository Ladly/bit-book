import React from 'react'
import PropTypes from 'prop-types'


export const CommentInput = (props) => {
	const disableButton = () => {
		if(props.value === '') {
			return 'disabled'
		}
	}

	return (
		<div className="row">
			<div className="input-field col s12">
				<input placeholder="Add comment" type="text" value={props.value} onChange={props.onChange} />
				<a onClick={props.submit} className={`waves-effect waves-light btn ${disableButton()}`} >Add</a>
			</div>
		</div>
	)
}

CommentInput.propTypes = {
	value: PropTypes.string,
	onChange: PropTypes.func,
	getFreshComments: PropTypes.func,
	submit: PropTypes.func
}