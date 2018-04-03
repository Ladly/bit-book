import React, { Component } from 'react'
import PropTypes from 'prop-types'

import M from 'materialize-css'

class SelectOptions extends Component {
	constructor(props) {
		super(props)
		this.state = {
			selectValue: 'all'
		}
	}

	componentDidMount (){
		const select = document.querySelector('select')
		this.instance = M.FormSelect.init(select)
	}

	pickOption = e => {
		this.setState({selectValue: e.target.value}, () => {
			this.props.getData(this.state.selectValue)
		})	
	} 

	render() {
		return (
			<div className="input-field col s12">
				<select onChange={this.pickOption}>
					<option value="" disabled defaultValue>Choose your option</option>
					<option value="all">All</option>
					<option value="text">Text</option>
					<option value="video">Video</option>
					<option value="images">Image</option>
				</select>
				<label>Display</label>
			</div>
		)
	}
} 

SelectOptions.propTypes = {
	getData: PropTypes.func,
}



export { SelectOptions }