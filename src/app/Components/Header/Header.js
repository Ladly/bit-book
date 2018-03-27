import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
	return (
		<nav className="#b39ddb #512da8 deep-purple darken-2">
			<div className="nav-wrapper container">
				<a className="brand-logo">BitBook</a>
				<ul id="nav-mobile" className="right hide-on-med-and-down">
					<li><Link to="/">Feed</Link></li>
					<li><Link to="/people">People</Link></li>
					<li><Link to="/profile">Profile</Link></li>
				</ul>
			</div>
		</nav>
	)
}