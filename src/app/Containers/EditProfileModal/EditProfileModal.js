import React, { Component } from 'react'
import PropTypes from 'prop-types'

import M from 'materialize-css'

class EditProfileModal extends Component {
	constructor(props) {
		super(props)

		this.state = {
			imageInputValue: '',
			nameInputValue: '', 
			aboutInputValue: ''
		}
	}

	componentDidMount() {
		const modalElement4 = document.querySelector('#modal4')
		this.modal4 = M.Modal.init(modalElement4)
	}

	imageChange = (value) => {
		this.setState({imageInputValue: value})
	}

	nameChange = (value) => {
		this.setState({nameInputValue: value})
	}

	aboutChange = (value) => {
		this.setState({aboutInputValue: value})
	}

	handleChange = e => {
		const { value } = e.target
		if(e.target.className === 'image') {
			this.imageChange(value)
		} else if(e.target.className === 'name') {
			this.nameChange(value)
		} else if(e.target.className === 'about') {
			this.aboutChange(value)
		}		
	}

	clearInputs = () => {
		this.setState({
			imageInputValue: '',
			nameInputValue: '', 
			aboutInputValue: ''
		})
	}

	submit = () => {
		const body = {
			userId: 0,
			name: this.state.nameInputValue,
			email: 'debela',
			aboutShort: 'volim debelu ladovinu',
			about: this.state.aboutInputValue,
			avatarUrl: this.state.imageInputValue,
			postsCount: 0,
			commentsCount: 0
		}
		this.props.getData(body)
		this.clearInputs()
		this.modal4.close()
	}

	render() {
		return (
			<div id="modal4" className="modal">
				<div className="modal-content">
					<input type="url"  value={this.state.imageInputValue} className="image" onChange={this.handleChange} placeholder="Add image url" />
					<input type="text" value={this.state.nameInputValue} className="name" onChange={this.handleChange} placeholder="Add name" />
					<input type="text" value={this.state.aboutInputValue} className="about" onChange={this.handleChange} placeholder="About you" />
				</div>
				<div className="modal-footer">
					<a onClick={this.submit} className="waves-effect waves-light btn">Add</a>
					<a onClick={() => this.modal4.close()} className="waves-effect waves-light btn left-align">Close</a>
				</div>
			</div>
		)
	}
}

EditProfileModal.propTypes = {
	getData: PropTypes.func,
}

export { EditProfileModal }