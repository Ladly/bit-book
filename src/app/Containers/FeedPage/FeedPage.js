import React, { Component } from 'react'

import { PostService } from './../../../services/PostService'

import { FeedPost } from './../../Components/FeedPost/FeedPost'
import { Input } from './../../Components/Input/Input'
import {postText} from './../../../services/PostService'

class FeedPage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			posts: [],
			inputValue: ''
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

	componentDidMount(){
		this.fetchPosts()
	}

	handleChange = (e) => {
		this.setState({
			...this.state,
			inputValue: e.target.value
		})
	}

	sendTextData = () => {
		const body = this.state.inputValue
		// console.log(body)
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

	

 
	render() {		
		console.log(this.state.inputValue)
		return (
			<div className="container">
				<Input description={this.inputsContent.text} value={this.state.inputValue} handleChange={this.handleChange} clickHandler={this.sendTextData}/>
				{/* <Input description={this.inputsContent.video} value={this.state.inputValue} handleChange={this.handleChange} clickHandler={this.sendVideoData}/>
				<Input description={this.inputsContent.image} value={this.state.inputValue} handleChange={this.handleChange} clickHandler={this.sendImageData}/> */}
				<ul>
					<FeedPost posts={this.state.posts}/>
				</ul>
			</div>
		)
	}
}
export { FeedPage }