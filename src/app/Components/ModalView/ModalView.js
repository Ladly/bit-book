import React from 'react'
import PropTypes from 'prop-types'

export const ModalView = (props) => {
	const { modalContent } = props
	return (
	   <div id={`modal${modalContent.id}`} className="modal">
		   <div className="modal-content">
				<span className="helper-text" data-error="wrong" data-success="right">{modalContent.text}</span>
			   <input type={modalContent.type} value={props.value} onChange={props.handleChange} />
				   <button className="right" onClick={props.sendData}>Add</button>
		   </div>
	   </div>
	)
}

ModalView.propTypes = {
	modalContent: PropTypes.object, 
	value: PropTypes.string, 
	sendData: PropTypes.func, 
	handleChange: PropTypes.func, 
}