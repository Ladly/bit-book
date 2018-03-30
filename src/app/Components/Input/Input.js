import React from 'react'
import PropTypes from 'prop-types'
import './Input.css'

export const Input = (props) => {
	const submitData = () => {
		props.clickHandler()
		props.fetchFreshData()
	}

	const pickDisplay = () => {
		if (props.type === 'text') {
			return 'add text'
		} else if (props.type === 'video') {
			return 'add video'
		} else if (props.type === 'image') {
			return 'add image'
		}
	}

	return (
		<div>
			<input type={props.type} value={props.value} onChange={props.onChange} />
			<div className="buttons">
				<span className="helper-text" data-error="wrong" data-success="right">{pickDisplay()}</span>
				<button className="right" onClick={submitData}>Add</button>
			</div>
		</div>
	)
}

Input.propTypes = {
	description: PropTypes.object,
	value: PropTypes.string,
	handleChange: PropTypes.func,
	clickHandler: PropTypes.func,
	fetchFreshData: PropTypes.func,
	modalInstance: PropTypes.object,
	close: PropTypes.func,
	clearInput: PropTypes.func
}



