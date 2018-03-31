import React, { Component } from 'react'
import PropTypes from 'prop-types'

import M from 'materialize-css'

import { ModalView } from '../../Components/ModalView/ModalView'
import { PostService } from './../../../services/PostService'


class TextModal extends Component {
	constructor() {
		super()
		this.state = {
			inputValue: ''
		}
		this.modalContent = {
			type: 'text',
			text: 'Add text',
			id: 1
		}
	}
	
	componentDidMount() {
		const modalElement1 = document.querySelector('#modal1')
		this.modal1 = M.Modal.init(modalElement1)
	}

	sendData = () => {
		const body = this.state.inputValue
		var regex = new RegExp('^([a-zA-Z0-9 _-]+)$')
		if(!body.match(regex)){
			alert('Text input only')
			this.clearInput()
			this.props.getFreshData()
		} else {
			PostService.postTextRequest(body)
			this.modal1.close()
			this.clearInput()
			this.props.getFreshData()
		}
	}

	clearInput = () => {
		this.setState({
			...this.state,
			inputValue: ''
		})
	}

	handleChange = e => {
		this.setState({
			...this.state,
			inputValue: e.target.value
		})
	}



	render() {
		return (
			<ModalView value={this.state.inputValue} handleChange={this.handleChange} sendData={this.sendData} modalContent={this.modalContent}/>

		)
	}
}

TextModal.propTypes = {
	getFreshData: PropTypes.func
}

export { TextModal }

