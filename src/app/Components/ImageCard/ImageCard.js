import React from 'react'
import PropTypes from 'prop-types'
import { CardContent } from './../CardContent/CardContent'

export const ImageCard = (props) => {
	
	const displayCardContent = () => {
		if(props.type || props.commentsNo){
			return <CardContent type={props.type} commentsNo={props.commentsNo}/>
		}
	}
	
	return (
		<div className="row">
			<div className="col s12">
				<div className="card">
					<div className="card-image">
						<img src={props.url} alt=""/>
					</div>
					{displayCardContent()}
				</div>
			</div>
		</div>
	)
}

ImageCard.propTypes = {
	url: PropTypes.string,
	type: PropTypes.string,
	id: PropTypes.number,
	commentsNo: PropTypes.number,
	loggedUserId: PropTypes.number,
	deletePost: PropTypes.func,
	postUserId: PropTypes.number
}