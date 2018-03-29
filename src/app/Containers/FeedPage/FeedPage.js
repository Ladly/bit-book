import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import M from 'materialize-css'

import { PostService } from './../../../services/PostService'

import { FeedPost } from './../../Components/FeedPost/FeedPost'
import { Input } from './../../Components/Input/Input'
import { FloatButtons } from './../../Components/FloatButtons/FloatButtons'
import { Modal } from './../../Components/Modal/Modal'

class FeedPage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			posts: [],
			inputValue: '',
			modalInstance: 0
		}
		this.inputsContent = {
			text: {
				helper: 'Add text',
				type: 'text',
			},
			video: {
				helper: 'Add video url',
				type: 'url',
			},
			image: {
				helper: 'Add image url',
				type: 'url',
			}
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
	}

	sendImageData = () => {
		const body = this.state.inputValue
		PostService.postImageRequest(body)
	}

	sendVideoData = () => {
		const body = this.state.inputValue
		PostService.postVideoRequest(body)
	}

	clearInput = () => {
		this.setState({
			...this.state,
			inputValue: ''
		})
	}

	checkButton = () => {
		this.setState({
			modalInstance: 2
		})
	}
	
	render() {	
		console.log(this.state.modalInstance)	
		return (
			<div className="container">				
				<ul>
					<FeedPost posts={this.state.posts} />
				</ul>
				{/* <div id="modal1" className="modal">
					<Input 
				
		
					/>
				</div>
				<div id="modal2" className="modal">
					<Input 
						description={this.inputsContent.image} 
						value={this.state.inputValue} 
						handleChange={this.handleChange} 
						clickHandler={this.sendImageData}
						fetchFreshData={this.fetchPosts}
						modalInstance = {this.modal2} 
						clearInput={this.clearInput}
					/>	
				</div>
				<div id="modal3" className="modal">
					<Input 
						description={this.inputsContent.video} 
						value={this.state.inputValue} 
						handleChange={this.handleChange} 
						clickHandler={this.sendVideoData}
						fetchFreshData={this.fetchPosts}
						modalInstance = {this.modal3}
						clearInput={this.clearInput}  
					/>
				</div> */}

				<Modal 
					value={this.state.inputValue}
					fetchFreshData={this.fetchPosts}
					clearInput={this.clearInput}
					description={this.inputsContent} 						 
					handleChange={this.handleChange} 
					clickHandler={this.sendTextData}
					modalInstance = {this.state.modalInstance}
				/>

				<FloatButtons checkButton={this.checkButton}/>

			</div>
		)
	}
}

export default withRouter(FeedPage)

