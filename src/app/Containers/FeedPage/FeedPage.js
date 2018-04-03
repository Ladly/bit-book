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
import { SelectOptions } from './../SelectOptions/SelectOptions'

class FeedPage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			posts: [],
			loggedUserId: 0,
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

	filterPost = (value) => {
		const { posts } = this.state
		if(value === 'all') {
			this.fetchPosts()
		} else if (value === 'text'){
			const textPosts = posts.filter(post => {
				return post.type === 'text'
			})
			this.setState({posts:textPosts})

		} else if (value === 'video'){
			const videoPosts = posts.filter(post => {
				return post.type === 'video'
			})
			this.setState({posts: videoPosts})

		} else if (value === 'image') {
			const imagePosts = posts.filter(post => {
				return post.type === 'image'
			})
			this.setState({posts: imagePosts})
		}

	}

	getDataFromOptions = (data) => {
		this.filterPost(data)
	}


	render() {
		console.log(this.state.posts)
		return (
			<div className="container">

				<SelectOptions getData={this.getDataFromOptions}/>
			
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

