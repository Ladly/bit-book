import React from 'react'
import { Input } from './../Input/Input'

export const Modal = (props) => {
	console.log('modal', props)

	const inputToRender = () => {
		if (props.type === 'text') {
			return <Input
				type={'text'} //for input type
				value={props.value}
				onChange={props.handleChange}
				fetchFreshData={props.fetchFreshData}
				clickHandler={props.clickTextHandler}
			/>
		} else if (props.type === 'video') {
			return <Input
				type={'video'}
				value={props.value}
				onChange={props.handleChange}
				fetchFreshData={props.fetchFreshData}
				clickHandler={props.clickVideoHandler}
			/>
		} else if (props.type === 'image') {
			return <Input
				type={'image'}
				value={props.value}
				onChange={props.handleChange}
				fetchFreshData={props.fetchFreshData}
				clickHandler={props.clickImageHandler}
			/>
		}
	}


	return (
		<div id='modal' className="modal">
			<div className="modal-content">
				{inputToRender()}
			</div>
		</div>
	)
}