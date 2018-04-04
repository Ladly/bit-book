import React from 'react'
import PropTypes from 'prop-types'

export const SelectOptions = (props) => {

	const pickOption = e => {
		props.onTypeChange(e.target.value)
	}

	return (
		<div className="input-field col s12">
			<select onChange={pickOption}>
				<option value="" disabled defaultValue>Choose your option</option>
				<option value="all">All</option>
				<option value="text">Text</option>
				<option value="video">Video</option>
				<option value="images">Image</option>
			</select>
			<label>Display</label>
		</div>
	)
}

SelectOptions.propTypes = {
	onTypeChange: PropTypes.func,
}

