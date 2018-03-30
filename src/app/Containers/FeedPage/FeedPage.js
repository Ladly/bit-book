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
			inputValue: '',
			inputType: ''
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
		const modalElement = document.querySelector('#modal')

		M.FloatingActionButton.init(buttonElement)
		this.modal = M.Modal.init(modalElement)
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
		this.modal.close()
		this.clearInput()
	}

	sendImageData = () => {
		const body = this.state.inputValue
		// testImages(body)

		PostService.postImageRequest(body)
		this.modal.close()
		this.clearInput()
	}

	sendVideoData = () => {
		const body = this.state.inputValue
		PostService.postVideoRequest(body)
		this.modal.close()
		this.clearInput()
	}

	clearInput = () => {
		this.setState({
			...this.state,
			inputValue: ''
		})
	}

	getType = (type) => {
		this.setState({
			...this.state,
			inputType: type
		})
	}

	render() {
		return (
			<div className="container">
				<ul>
					<FeedPost posts={this.state.posts} />
				</ul>

				<Modal
					type={this.state.inputType}
					value={this.state.inputValue}
					fetchFreshData={this.fetchPosts}
					handleChange={this.handleChange}
					clickTextHandler={this.sendTextData}
					clickImageHandler={this.sendImageData}
					clickVideoHandler={this.sendVideoData}
				/>

				<FloatButtons getType={this.getType} />

			</div>
		)
	}
}

export default withRouter(FeedPage)

