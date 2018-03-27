import React, { Component } from 'react'

import { PostService } from './../../../services/PostService'

import { FeedPost } from './../../Components/FeedPost/FeedPost'

class FeedPage extends Component {
	constructor(props) {
		super(props)
		this.randomText = 'this is some randomText for testing'
		this.imageUrl = 'https://www.famousbirthdays.com/headshots/kate-beckinsale-6.jpg'
		this.youtubeLink = 'https://www.youtube.com/embed/2Ok8sXQ9CsA'
		this.state = {
			posts: []
		}
	}

	fetchPosts = () => {
		PostService.fetchPosts()
			.then(response => this.setState({
				posts: response
			}))
	}

	componentDidMount(){
		this.fetchPosts()
	}

	render() {		
		return (
			<div className="container">
				<ul>
					<FeedPost posts={this.state.posts}/>
					{/* <FeedPost videoUrl={this.youtubeLink} type={'video'} comments={14}/>	
					<FeedPost imageUrl={this.imageUrl} type={'image'} comments={100}/>	
					<FeedPost text={this.randomText} type={'text'} comments={35}/>	 */}
				</ul>
			</div>
		// { carefully passing props !!????}
		)
	}
}
export { FeedPage }