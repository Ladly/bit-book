import React from 'react'
import PropTypes from 'prop-types'

import { ImageCard } from './../../Components/ImageCard/ImageCard'
import { VideoCard } from './../../Components/VideoCard/VideoCard'
import { TextCard } from './../../Components/TextCard/TextCard'

export const CardDetailHolder = (props) => {
	const { cardDetails, type } = props

	const renderPostDetails = () => {
		if (type === 'text') {
			return <TextCard text={props.cardDetails.text} />
		} else if (type === 'video') {
			return <VideoCard url={props.cardDetails.videoUrl} />
		} else {
			return <ImageCard url={props.cardDetails.imageUrl} />
		}
	}

	const renderLoading = () => {
		return <h3>loading</h3>
	}

	return (
		<div>
			{cardDetails
				? renderPostDetails()
				: renderLoading()
			}
		</div>
	)
}

CardDetailHolder.propTypes = {
	cardDetails: PropTypes.object,
	type: PropTypes.string
}