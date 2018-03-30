import React, { Component } from 'react'

import ModalView from './ModalView'
// import POST image service

export class ImageModal extends Component {
	constructor(props) {
		super(props)
		this.modalContent = {
			text: '',
			inputType: 'url'
		}
		this.state = {
			value: ''
		}
	}

	handleChange = e => {
		const { value } = e.target
		this.setState({ value })
	}

	handleSubmit = e => {
		e.preventDefault()
		console.log(this.state.value)
		this.resetForm()
	}

	sendImage = imageUrl => postService.sendImage(imageUrl).then(() => this.props.loadPosts())

	resetForm = () => this.setState({ value: '' })

	render() {
		return <ModalView value={this.state.value} handleSubmit={this.handleSubmit} handleChange={this.handleChange} modalContent={this.modalContent} />
	}
}