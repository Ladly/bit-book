import React from 'react'
import PropTypes from 'prop-types'
import './Input.css'

import { PostService } from './../../../services/PostService'

export const Input = (props) => {
	console.log('input', props)
	const submitData = () => {
		props.sendData()
		props.fetchFreshData()
	}

	const pickDisplay = () => {
		if (props.type === 'text') {
			return 'Add Text'
		} else if (props.type === 'video') {
			return 'Add video'
		} else if (props.type === 'image') {
			return 'Add image'
		}
	}

	const pickType = () => {
		return props.type === 'text' ? 'text' : 'url'
	}

	return (
		<div>
			<input type={pickType()} value={props.value} onChange={props.onChange} />
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



