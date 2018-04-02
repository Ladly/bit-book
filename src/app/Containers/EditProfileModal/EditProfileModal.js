import React, { Component } from 'react'

import M from 'materialize-css'

class EditProfileModal extends Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		const modalElement4 = document.querySelector('#modal4')
		this.modal4 = M.Modal.init(modalElement4)
	}

	render() {
		return (
			<div id="modal4" className="modal">
				<div className="modal-content">
					<input type="url" placeholder="Add image url"/>
					<input type="text" placeholder="Add name"/>
					<input type="text" placeholder="About you"/>
				</div>
				<div className="modal-footer">
					<a className="waves-effect waves-light btn">Add</a>
					<a className="waves-effect waves-light btn left-align">Close</a>
				</div>
			</div>
		)
	}
}

export { EditProfileModal }