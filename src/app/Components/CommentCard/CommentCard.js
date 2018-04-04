import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { ProfileService } from './../../../services/ProfileService'


class CommentCard extends Component {
	constructor(props) {
		super(props)
		this.state = {
			author: null
		}
	}

	componentDidMount() {
		ProfileService.fetchProfileWithId(this.props.authorId)
			.then(author => this.setState({ author }))
	}

	displayAvatar = () => {
		if (this.state.author !== null) {
			return <img src={this.state.author.avatarUrl} className="img-responsive circle" alt="" />
		} else {
			return <h2>Loading</h2>
		}
	}

	render() {
		return (

			<div className="col s12" >
				<div >
					{this.displayAvatar()}
				</div>
				<div className="col s10">
					<span className="card-title">{this.props.authorName}</span>
					<span className="black-text">
						<p>{this.props.body}</p>
					</span>
				</div>
			</div >

		)
	}
}

CommentCard.propTypes = {
	authorId: PropTypes.number,
	authorName: PropTypes.string,
	body: PropTypes.string,
}

export { CommentCard }
