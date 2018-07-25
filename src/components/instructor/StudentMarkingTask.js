import React from 'react';
import { getTaskFromTitleAndId } from "../../utilities/utilities";
const Parser = require('html-react-parser');

export default ({sharedCode, task, studentName }) => (
	<div className="marking-task" style={{backgroundColor: sharedCode.get('pending') ? '#00e6b8' : ''}}>
		<p>{ sharedCode.get('pending') ? studentName + ' has submitted this task to be marked' : ''}</p>
		<i>{ Parser(task) }</i>
		<p>{sharedCode.get('code')}</p>
		<p>{sharedCode.get('pending')}</p>
		<p>Previous Feedback</p>
		{sharedCode.get('feedback') ? sharedCode.get('feedback').map(comment => (
			<p>{comment}</p>
			)) 
			: <p>You are yet to provide feedback for this code</p>
		}
	</div>
)