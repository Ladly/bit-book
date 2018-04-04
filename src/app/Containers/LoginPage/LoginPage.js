import React, { Component } from 'react'


export const Auth = (ComponentToRender) => {
	return class LoginPage extends Component {
		componentDidMount() {
			console.log('works?')
		}

		render() {

			return <ComponentToRender />
		}
	}
}