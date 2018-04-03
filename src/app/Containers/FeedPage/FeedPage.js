import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import M from 'materialize-css'

import { PostService } from './../../../services/PostService'
import { ProfileService } from './../../../services/ProfileService'

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
			loggedUserId: 0
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

	fetchAuthor = () => {
		ProfileService.fetchProfile()
			.then(profile => this.setState({loggedUserId: profile.userId}))
	}

	componentDidMount() {
		this.fetchPosts()
		this.fetchAuthor()
		const buttonElement = document.querySelector('.fixed-action-btn')
		M.FloatingActionButton.init(buttonElement)
	}

	deletePost = (id) => {
		PostService.deletePost(id)
			.then(() => this.fetchPosts())
	}

	render() {
		return (
			<div className="container">
				<FeedPost posts={this.state.posts} loggedUserId={this.state.loggedUserId} deletePost={this.deletePost}/>

				<TextModal getFreshData={this.fetchPosts} />
				<VideoModal getFreshData={this.fetchPosts} />
				<ImageModal getFreshData={this.fetchPosts} />
				
				<FloatButtons />
			</div>
		)
	}
}

export default withRouter(FeedPage)

