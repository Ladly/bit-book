import React from 'react'
import PropTypes from 'prop-types'
import { CardContent } from './../CardContent/CardContent'

export const TextCard = (props) => {

	const displayCardContent = () => {
		
		if(props.type || props.commentsNo){
			return <CardContent type={props.type} commentsNo={props.commentsNo}/>
		}
	}

	return (
		<div className="row">
			<div className="col s12">
				<div className="card">
					<div className="card-image center" >
						<p>{props.text}</p>
					</div>
					{displayCardContent()}
				</div>
			</div>
		</div>
	)
}

TextCard.propTypes = {
	text: PropTypes.string,
	type: PropTypes.string,
	id: PropTypes.number,
	postUserId: PropTypes.number,
	loggedUserId: PropTypes.number,
	deletePost: PropTypes.func,
	commentsNo: PropTypes.number
}