import React from 'react';

export default ({ topicTitle, taskID, sharedCode, onChangeSharedCode, onClickSharedCodeSubmit, onClickSharedCodeSave }) => {
	console.log(sharedCode.getIn([topicTitle, taskID]).toJS());
	let code = sharedCode.getIn([topicTitle, taskID, 'code']);
	let pending = sharedCode.getIn([topicTitle, taskID, 'pending']);
	let newFeedback = sharedCode.getIn([topicTitle, taskID, 'newFeedback']);
	return (
	  	<div className="panel">
	  		<div className="form-group share-code">
			  	<label>Paste your code or a link to a working example on Codepen.io in the box below. Save, or Submit for marking.</label>
			  	<textarea 
			  		className="form-control share-code__textarea" 
			  		rows="5"
			  		value={code ? code : ""}
			  		onChange={(e) => onChangeSharedCode(e.target.value, topicTitle, taskID)}
			  	></textarea>
				{pending ? 
					<p className="share-code__message green">You have submitted this code for review, an instructor will send you feedback soon.</p> 
					: null
				}
				{newFeedback ? 
					<p className="share-code__message green">Your code been reviewed. Please read the feedback shown below and put any suggestions into practice in your next coding exercise.</p> 
					: null
				}
				<button className="btn btn-default btn-logout btn-submit" onClick={() => onClickSharedCodeSave(topicTitle, taskID)}>Save</button>
				<button className="btn btn-default btn-logout btn-submit pull-right" onClick={() => onClickSharedCodeSubmit(topicTitle, taskID)}>Submit</button>
			</div>
	  	</div>
	)
}
