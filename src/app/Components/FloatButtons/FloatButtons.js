import React from 'react'

export const FloatButtons = (props) => {

	const checkType = (e) => {
		let type = ''
		if (e.target.innerHTML === 'T') {
			type = 'text'
		} else if (e.target.innerHTML = 'video') {
			type = 'video'
		} else if (e.target.innerHTML = 'image') {
			type = 'image'
		}

		props.getType(type)
		return type
	}

	return (
		<div className="fixed-action-btn">
			<a className="btn-floating btn-large red">
				<i className="large material-icons">mode_edit</i>
			</a>
			<ul>
				<li><a onClick={checkType} className="btn-floating red darken-1 modal-trigger" href="#modal"><i data-type="text" className="material-icons">T</i></a></li>
				<li><a onClick={checkType} className="btn-floating yellow darken-1 modal-trigger" href="#modal"><i data-type="image" className="material-icons">image</i></a></li>
				<li><a onClick={checkType} className="btn-floating green darken-1 modal-trigger" href="#modal"><i data-type="video" className="material-icons">video</i></a></li>
			</ul>
		</div >
	)
}