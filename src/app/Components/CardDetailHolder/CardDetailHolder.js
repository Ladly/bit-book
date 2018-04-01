import React from 'react'
import PropTypes from 'prop-types'

import { ImageCard } from './../../Components/ImageCard/ImageCard'
import { VideoCard } from './../../Components/VideoCard/VideoCard'
import { TextCard } from './../../Components/TextCard/TextCard'

export const CardDetailHolder = (props) => {
	const {cardDetails, type} = props

	const cardType = () => {
		if(cardDetails) {
			if(type === 'text') {
				return <TextCard text={props.cardDetails.text} />
			} else if (type === 'video') {
				return <VideoCard url={props.cardDetails.videoUrl} />
			}	else if (type === 'image') {
				return <ImageCard url={props.cardDetails.imageUrl} />
			} 
		} else {
			return <h3>loading</h3>
		}
	}

	return (
		<div>
			{cardType()}			
		</div>
	)
}

CardDetailHolder.propTypes = {
	cardDetails: PropTypes.object,
	type: PropTypes.string
}