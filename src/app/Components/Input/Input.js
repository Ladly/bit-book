import React from 'react'
import PropTypes from 'prop-types'

export const Input = (props) => {
	const { description } = props
	return (
		<div>
			<input type={description.type} value={props.value} onChange={props.handleChange}/>
			<span className="helper-text" data-error="wrong" data-success="right">{description.helper}</span>
			<button className="right" onClick={props.clickHandler}>Add</button>
		</div>
	)
}

Input.propTypes = {
	description: PropTypes.object,
	value: PropTypes.string,
	handleChange: PropTypes.func,
	clickHandler: PropTypes.func
}



