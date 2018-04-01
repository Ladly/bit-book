import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { CardDetailHolder } from './../../Components/CardDetailHolder/CardDetailHolder'
import { CommentListItem } from './../../Components/CommentListItem/CommentListItem'

import { PostService } from './../../../services/PostService'

class PostDetailsPage extends Component {
	constructor(props) {
		super(props)

		this.state = {
			post: null,
			comments: []
		}

		this.postId = this.props.match.params.id
		this.type = this.props.match.params.type
	}

	getPostWithId = () => {
		if(this.type === 'text') {
			PostService.singleTextPostRequest(this.postId)
				.then(post => this.setState({ ...this.state, post}))
		} else if(this.type === 'video'){
			PostService.singleVideoPostRequest(this.postId)
				.then(post => this.setState({ ...this.state, post}))
		} else {
			PostService.singleImagePostRequest(this.postId)
				.then(post => this.setState({ ...this.state, post}))
		}		
	}

	getCommentsWithId = () => {
		PostService.postCommentsFetch(this.postId)
			.then(comments => this.setState({...this.state, comments}))
	}

	createCommentCards = () => {
		if(this.state.comments.length) {
			return this.state.comments.map(comment => {
				return <CommentListItem key={comment.id} body={comment.body} authorName={comment.authorName}/>
			})
		} else if (this.state.comments) {			 
			return <h2>no comments to display</h2>	
		}
	}

	componentDidMount() {
		this.getPostWithId()
		this.getCommentsWithId()
	}

	render() {
		console.log(this.state.comments)
		return (
			<div className ='container'>
				<CardDetailHolder cardDetails={this.state.post} type={this.type} />
				<ul className='center-align'>
					{this.createCommentCards()}
				</ul>
			</div>
		)
	}
}

PostDetailsPage.propTypes = {
	props: PropTypes.object,
	match: PropTypes.object,
	params: PropTypes.object
}

export { PostDetailsPage }