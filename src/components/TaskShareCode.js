import React from 'react';

export default ({ topicTitle, taskID, sharedCode, onChangeSharedCode, onClickSharedCodeSubmit }) => {
	let approved = sharedCode.getIn([topicTitle, taskID, 'approved']);
	let code = sharedCode.getIn([topicTitle, taskID, 'code']);
	let pending = !code && !approved;
	return (
	  	<div className="panel">
	  		<div className="form-group share-code">
			  	<label>Paste your code or a link to a working example on Codepen.io in the box below, then click save.</label>
			  	<textarea 
			  		className="form-control share-code__textarea" 
			  		rows="5"
			  		value={sharedCode.getIn([topicTitle, taskID, 'code']) ? code : ""}
			  		onChange={(e) => onChangeSharedCode(e.target.value, topicTitle, taskID)}
			  	></textarea>
				{pending ? 
					<p className="share-code__message green">Your code has been submitted and will be reviewed by an instructor very soon.</p> 
					: null
				}
				{approved ? 
					<p className="share-code__message green">Your code been reviewed. Please read the feedback shown below and put any suggestions into practice in your next coding exercise.</p> 
					: null
				}
				<button className="btn btn-default btn-logout btn-submit" onClick={() => onClickSharedCodeSubmit()}>Save</button>
			</div>
	  	</div>
	)
}
