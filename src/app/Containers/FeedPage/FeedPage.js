import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import M from 'materialize-css'

import { PostService } from './../../../services/PostService'

import { FeedPost } from './../../Components/FeedPost/FeedPost'
import { FloatButtons } from './../../Components/FloatButtons/FloatButtons'
import { TextModal } from './../TextModal/TextModal'
import { VideoModal } from './../VideoModal/VideoModal'
import { ImageModal } from './../ImageModal/ImageModal'

class FeedPage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			posts: [],
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
		M.FloatingActionButton.init(buttonElement)
	}

	render() {
		return (
			<div className="container">
				<FeedPost posts={this.state.posts} />

				<TextModal getFreshData={this.fetchPosts} />
				<VideoModal getFreshData={this.fetchPosts} />
				<ImageModal getFreshData={this.fetchPosts} />
				
				<FloatButtons />
			</div>
		)
	}
}

export default withRouter(FeedPage)

