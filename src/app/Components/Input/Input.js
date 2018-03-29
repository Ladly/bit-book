import React from 'react'
import PropTypes from 'prop-types'
import './Input.css'

export const Input = (props) => {
	const { description } = props

	const submitData = () => {
		props.clickHandler()
		props.clearInput()  
		props.fetchFreshData()
		props.modalInstance.close()
	}

	return (
		<div>
			<input type={props.type} value={props.value} onChange={props.handleChange}/>
			<div className="buttons">
				<span className="helper-text" data-error="wrong" data-success="right">{props.helper}</span>
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



