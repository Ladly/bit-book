import React from 'react'
import { Input } from './../Input/Input'

export const Modal = (props) => {
	console.log(props)

	return (
		<div id={`modal${props.modalInstance}`} className="modal">
			<div className="modal-content">
				<Input type={props.description.text.type} value={props.value} onChange={props.handleChange} />
			</div>
		</div>
	)
}