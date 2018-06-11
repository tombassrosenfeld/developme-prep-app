import React from 'react';

export default ({ topicTitle, taskID, sharedCode, onChangeSharedCode, onClickSharedCodeSubmit }) => {
	return (
	  	<div className="panel">
	  		<div className="form-group share-code">
			  	<label>Paste your code or a link to a working example on Codepen.io in the box below, then click save.</label>
			  	<textarea 
			  		className="form-control share-code__textarea" 
			  		rows="5"
			  		value={sharedCode.getIn([topicTitle, taskID]) ? sharedCode.getIn([topicTitle, taskID, 'code']) : ""}
			  		onChange={(e) => onChangeSharedCode(e.target.value, topicTitle, taskID)}
			  	></textarea>
				<button className="btn btn-default btn-logout btn-submit" onClick={() => onClickSharedCodeSubmit()}>Save</button>
			</div>
	  	</div>
	)
}
