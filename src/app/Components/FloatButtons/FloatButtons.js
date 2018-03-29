import React from 'react'

export const FloatButtons = (props) => {
	console.log(props)

	return (
		<div className="fixed-action-btn">
			<a className="btn-floating btn-large red">
				<i className="large material-icons">mode_edit</i>
			</a>
			<ul>
				<li><a className="btn-floating red modal-trigger" href="#modal1"><i className="material-icons">T</i></a></li>
				<li><a className="btn-floating yellow darken-1 modal-trigger" href="#modal2"><i className="material-icons">image</i></a></li>
				<li><a className="btn-floating green darken-1 modal-trigger" href="#modal3">video</a></li>				
			</ul>
		</div>
	)
}