import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { CardDetailHolder } from './../../Components/CardDetailHolder/CardDetailHolder'
import { CommentListItem } from './../../Components/CommentListItem/CommentListItem'
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
		PostService.postCommentsFetch(this.postId)
			.then(comments => this.setState({ comments }))
	}

	createCommentCards = () => {
		if (this.state.comments.length) {
			return this.state.comments.map(comment => {
				return <CommentListItem key={comment.id} body={comment.body} authorName={comment.authorName} />
			})
		} else if (this.state.comments) {
			return <h2>no comments to display</h2>
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
		this.setState({ ...this.state, commentInputValue: e.target.value })
	}

	clearInput = () => {
		this.setState({
			...this.state,
			commentInputValue: ''
		})
	}

	reverseComments = () => {
		this.setState({
			comments: this.state.comments.reverse()
		})
	}

	handleSubmit = () => {
		this.postComment()
		this.getCommentsWithId()
		this.clearInput()
		this.reverseComments()
	}

	render() {
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