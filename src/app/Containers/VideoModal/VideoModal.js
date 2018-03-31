import React, { Component } from 'react'
import PropTypes from 'prop-types'

import M from 'materialize-css'

import { ModalView } from '../../Components/ModalView/ModalView'
import { PostService } from './../../../services/PostService'
import { testVideo } from './../../../helpers/utils'

class VideoModal extends Component {
	constructor() {
		super()
		this.state = {
			inputValue: ''
		}
		this.modalContent = {
			type: 'url',
			text: 'Add video',
			id: 2
		}
	}
	
	componentDidMount() {
		const modalElement2 = document.querySelector('#modal2')
		this.modal2 = M.Modal.init(modalElement2)
	}

	sendData = () => {
		const body = this.state.inputValue
		PostService.postVideoRequest(body)
		this.modal2.close()
		this.clearInput()
		this.props.getFreshData()

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

VideoModal.propTypes = {
	getFreshData: PropTypes.func
}

export { VideoModal }