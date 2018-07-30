import React from 'react';

export default ({ topicTitle, taskID, sharedCode, onChangeSharedCode, onClickSharedCodeSubmit, onClickSharedCodeSave }) => {
	let code = sharedCode.getIn([topicTitle, taskID, 'code']);
	let pending = sharedCode.getIn([topicTitle, taskID, 'pending']);
	let newFeedback = sharedCode.getIn([topicTitle, taskID, 'newFeedback']);
	let feedback = sharedCode.getIn([topicTitle, taskID, 'feedback']);
	return (
		<div>
		  	<div className="panel">
		  		<div className="form-group share-code">
				  	<label>Paste your code or a link to a working example on Codepen.io in the box below. Save, or Submit for marking.</label>
				  	<textarea 
				  		className="form-control share-code__textarea" 
				  		rows="5"
				  		value={code ? code : ""}
				  		onChange={(e) => onChangeSharedCode(e.target.value, topicTitle, taskID)}
				  	></textarea>
					<button className="btn btn-default btn-logout bgrd-grey" onClick={() => onClickSharedCodeSave(topicTitle, taskID)}>Save</button>
					<button className="btn btn-default btn-logout bgrd-green pull-right" onClick={() => onClickSharedCodeSubmit(topicTitle, taskID)}>Submit</button>
					{pending ? 
						<p className="share-code__message green">You have submitted this code for review, an instructor will send you feedback soon.</p> 
						: null
					}
				</div>
			</div>
			<div className="panel">
				<div className="share-code">
					{feedback ?
						<div>
							<label>Comments</label>
							<div>{ feedback.map((comment, i) => <p key={i}><i>"{comment}"</i></p> ) }</div>
						</div>
						: null
					}
				</div>
		  	</div>
		</div>
	)
}
