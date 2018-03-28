import React, { Component } from 'react'

import { PostService } from './../../../services/PostService'

import { FeedPost } from './../../Components/FeedPost/FeedPost'

class FeedPage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			posts: []
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

	render() {		
		return (
			<div className="container">
				<ul>
					<FeedPost posts={this.state.posts}/>
				</ul>
			</div>
		)
	}
}
export { FeedPage }