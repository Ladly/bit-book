import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import M from 'materialize-css'

import { PostService } from './../../../services/PostService'
import { testImages } from './../../../helpers/utils'

import { FeedPost } from './../../Components/FeedPost/FeedPost'
import { FloatButtons } from './../../Components/FloatButtons/FloatButtons'
import { Modal } from './../../Components/Modal/Modal'

class FeedPage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			posts: [],
			inputValue: ''
		}
	}

	fetchPosts = () => {
		PostService.fetchPosts()
			.then(response => {
				this.setState({
					posts: response
				})
			})
	}

	componentDidMount() {
		this.fetchPosts()

		const buttonElement = document.querySelector('.fixed-action-btn')
		const modalElement1 = document.querySelector('#modal1')
		const modalElement2 = document.querySelector('#modal2')
		const modalElement3 = document.querySelector('#modal3')

		M.FloatingActionButton.init(buttonElement)
		this.modal1 = M.Modal.init(modalElement1)
		this.modal2 = M.Modal.init(modalElement2)
		this.modal3 = M.Modal.init(modalElement3)
	}

	handleChange = (e) => {
		this.setState({
			...this.state,
			inputValue: e.target.value
		})
	}

	sendTextData = () => {
		const body = this.state.inputValue
		PostService.postTextRequest(body)
		this.modal1.close()
		this.clearInput()
	}

	sendVideoData = () => {
		const body = this.state.inputValue
		PostService.postVideoRequest(body)
		this.modal2.close()
		this.clearInput()
	}

	sendImageData = () => {
		const body = this.state.inputValue
		PostService.postImageRequest(body)
		this.modal3.close()
		this.clearInput()
	}

	clearInput = () => {
		this.setState({
			...this.state,
			inputValue: ''
		})
	}

	render() {
		return (
			<div className="container">
				<ul>
					<FeedPost posts={this.state.posts} />
				</ul>

				<ImageModal />
				
				<Modal id={1} sendData={this.sendTextData} value={this.state.inputValue} fetchFreshData={this.fetchPosts} onChange={this.handleChange} />
				<Modal id={2} sendData={this.sendVideoData} value={this.state.inputValue} fetchFreshData={this.fetchPosts} onChange={this.handleChange} />
				<Modal id={3} sendData={this.sendImageData} value={this.state.inputValue} fetchFreshData={this.fetchPosts} onChange={this.handleChange} />

				<FloatButtons />
			</div>
		)
	}
}

export default withRouter(FeedPage)

