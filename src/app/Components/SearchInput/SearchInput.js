import React, { Component } from 'react'
import PropTypes from 'prop-types'

class SearchInput extends Component {
	constructor(props) {
		super(props)

		this.state = {
			value: '',
		}
	}

	onChange = e => {
		this.setState({
			value: e.target.value
		})
		const currentValue = e.target.value
		return this.props.getCurrentInput(currentValue)
	}

	// onChange2 = e => {													two ways, need some extra thinking
	// 	this.setState({ value: e.target.value }, () => {
	// 		const currentValue = this.state.value
	// 		return this.props.getCurrentInput(currentValue)
	// 	})
	// }

	render() {
		return (
			<input type="text" value={this.state.value} onChange={this.onChange} placeholder="Search Users" />
		)
	}
}

export { SearchInput }

SearchInput.propTypes = {
	users: PropTypes.array,
	getCurrentInput: PropTypes.func
}