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
			filterType: 'all'
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
			.then(profile => this.setState({ loggedUserId: profile.userId }))
	}

	componentDidMount() {
		this.fetchPosts()
		this.fetchAuthor()
		const buttonElement = document.querySelector('.fixed-action-btn')
		M.FloatingActionButton.init(buttonElement)

		const select = document.querySelector('select')
		this.instance = M.FormSelect.init(select)
	}

	deletePost = (id) => {
		PostService.deletePost(id)
			.then(() => this.fetchPosts())
	}

	renderPosts = () => {
		const { posts, filterType } = this.state
		let postsToDisplay

		if (filterType === 'all') {
			postsToDisplay = this.state.posts
		} else if (filterType === 'text') {
			postsToDisplay = posts.filter(post => {
				return post.type === 'text'
			})

		} else if (filterType === 'video') {
			postsToDisplay = posts.filter(post => {
				return post.type === 'video'
			})

		} else if (filterType === 'images') {
			postsToDisplay = posts.filter(post => {
				return post.type === 'image'
			})
		}

		return <FeedPost posts={postsToDisplay} loggedUserId={this.state.loggedUserId} deletePost={this.deletePost} />
	}

	onPostFilterTypeChange = (type) => {
		this.setState({ filterType: type })
	}

	render() {
		return (
			<div className="container">

				<SelectOptions onTypeChange={this.onPostFilterTypeChange} />

				{this.renderPosts()}

				<TextModal getFreshData={this.fetchPosts} />
				<VideoModal getFreshData={this.fetchPosts} />
				<ImageModal getFreshData={this.fetchPosts} />

				<FloatButtons />
			</div>
		)
	}
}

export default withRouter(FeedPage)

