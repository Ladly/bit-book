import React from 'react'

export const FloatButtons = (props) => {

	return (
		<div className="fixed-action-btn">
			<a className="btn-floating btn-large red">
				<i className="large material-icons">mode_edit</i>
			</a>
			<ul>
				<li><a className="btn-floating red darken-1 modal-trigger" href="#modal1"><i data-type="text" className="material-icons">T</i></a></li>
				<li><a className="btn-floating yellow darken-1 modal-trigger" href="#modal2"><i data-type="image" className="material-icons">V</i></a></li>
				<li><a className="btn-floating green darken-1 modal-trigger" href="#modal3"><i data-type="video" className="material-icons">image</i></a></li>
			</ul>
		</div >
	)
}