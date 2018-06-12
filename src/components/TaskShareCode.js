import React from 'react';

export default ({ topicTitle, taskID, sharedCode, onChangeSharedCode, onClickSharedCodeSubmit, onClickSharedCodeSave }) => {
	let code = sharedCode.getIn([topicTitle, taskID, 'code']);
	let pending = sharedCode.getIn([topicTitle, taskID, 'pending']);
	let newFeedback = sharedCode.getIn([topicTitle, taskID, 'newFeedback']);
	return (
	  	<div className="panel">
	  		<div className="form-group share-code">
			  	<label>Paste your code or a link to a working example on Codepen.io in the box below. Save or submit for feedback.</label>
			  	<textarea 
			  		className="form-control share-code__textarea" 
			  		rows="5"
			  		value={code ? code : ""}
			  		onChange={(e) => onChangeSharedCode(e.target.value, topicTitle, taskID)}
			  	></textarea>
				{pending ? 
					<p className="share-code__message green">Your code has been submitted and will be reviewed by an instructor very soon.</p> 
					: null
				}
				{newFeedback ? 
					<p className="share-code__message green">Your code been reviewed. Please read the feedback shown below and put any suggestions into practice in your next coding exercise.</p> 
					: null
				}
				<button className="btn btn-default btn-logout btn-submit" onClick={() => onClickSharedCodeSave()}>Save</button>
			</div>
	  	</div>
	)
}
