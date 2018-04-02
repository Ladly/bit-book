import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { CardDetailHolder } from './../../Components/CardDetailHolder/CardDetailHolder'
import { CommentCard } from './../../Components/CommentCard/CommentCard'
import { CommentInput } from './../../Components/CommentInput/CommentInput'

import { PostService } from './../../../services/PostService'

class PostDetailsPage extends Component {
	constructor(props) {
		super(props)

		this.state = {
			post: null,
			comments: [],
			commentInputValue: ''
		}

		this.postId = this.props.match.params.id
		this.type = this.props.match.params.type
	}

	getPostWithId = () => {
		if (this.type === 'text') {
			PostService.singleTextPostRequest(this.postId)
				.then(post => this.setState({ ...this.state, post }))
		} else if (this.type === 'video') {
			PostService.singleVideoPostRequest(this.postId)
				.then(post => this.setState({ ...this.state, post }))
		} else {
			PostService.singleImagePostRequest(this.postId)
				.then(post => this.setState({ ...this.state, post }))
		}
	}

	getCommentsWithId = () => {
		return PostService.postCommentsFetch(this.postId)
			.then(comments => this.setState({ comments: comments.reverse() }))
			.then(() => {
				this.clearInput()
			})
	}

	createCommentCards = () => {
		if (this.state.comments.length) {
			return this.state.comments.map(comment => {
				return (
					<li className='center-align' key={comment.id}>
						<CommentCard authorName={comment.authorName} body={comment.body} authorId={comment.authorId} />
					</li>
				)
			})
		} else if (this.state.comments) {
			return <h2>No comments to display</h2>
		}
	}

	componentDidMount() {
		this.getPostWithId()
		this.getCommentsWithId()
	}

	postComment = () => {
		const data = {
			body: this.state.commentInputValue,
			postId: this.postId
		}

		PostService.postCommentsPost(data)
	}

	handleChange = (e) => {
		this.setState({ commentInputValue: e.target.value })
	}

	clearInput = () => {
		this.setState({
			commentInputValue: ''
		})
	}

	handleSubmit = () => {
		this.postComment()
		this.getCommentsWithId()
	}

	render() {
		console.log(this.state.comments)
		return (
			<div className='container'>
				<CardDetailHolder cardDetails={this.state.post} type={this.type} />
				<CommentInput value={this.state.commentInputValue} onChange={this.handleChange} submit={this.handleSubmit} />
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