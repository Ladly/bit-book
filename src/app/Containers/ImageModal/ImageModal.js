import React, { Component } from 'react'
import PropTypes from 'prop-types'

import M from 'materialize-css'

import { ModalView } from '../../Components/ModalView/ModalView'
import { PostService } from './../../../services/PostService'

class ImageModal extends Component {
	constructor() {
		super()
		this.state = {
			inputValue: ''
		}
		this.modalContent = {
			type: 'url',
			text: 'Add image',
			id: 3
		}
	}

	componentDidMount() {
		const modalElement3 = document.querySelector('#modal3')
		this.modal3 = M.Modal.init(modalElement3)
	}

	sendData = () => {
		const body = this.state.inputValue
		const regexp = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/g
		if (!body.match(regexp)) {
			alert('image url not valid')
			this.modal3.close()
			this.clearInput()
		} else {
			PostService.postImageRequest(body)
			this.modal3.close()
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
			<ModalView value={this.state.inputValue} handleChange={this.handleChange} sendData={this.sendData} modalContent={this.modalContent} />
		)
	}
}

ImageModal.propTypes = {
	getFreshData: PropTypes.func
}

export { ImageModal }