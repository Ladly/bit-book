import React, { Component } from 'react'
import { Input } from './../Input/Input'

class Modal extends Component {
	constructor(props) {
		super(props)
		this.type = ''
		console.log('modal', props)
	}

	pickType = () => {
		if (parseInt(this.props.id) === 1) {
			return this.type = 'text'
		} else if (parseInt(this.props.id) === 2) {
			return this.type = 'video'
		} else if (parseInt(this.props.id) === 3) {
			return this.type = 'image'
		}
	}

	render() {
		return (
			<div id={`modal${this.props.id}`} className="modal">
				<div className="modal-content">
					<Input type={this.pickType()} fetchFreshData={this.props.fetchFreshData} sendData={this.props.sendData} onChange={this.props.onChange} value={this.props.value} />
				</div>
			</div>
		)
	}
}

export { Modal }