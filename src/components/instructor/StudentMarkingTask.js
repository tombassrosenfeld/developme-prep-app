import React from 'react';
import { getTaskFromTitleAndId } from "../../utilities/utilities";
import StudentMarkingForm from "./StudentMarkingForm";
const Parser = require('html-react-parser');

export default ({sharedCode, task, studentName }) => (
	<div className="marking-task share-code">
		<p className="text-white bgrd-red">{ sharedCode.get('pending') ? studentName + ' has submitted this task to be marked' : ''}</p>
		<i>{ Parser(task) }</i>
		
		<p><strong>Student's answer</strong></p>
		<textarea 
			className="form-control share-code__textarea" 
			rows="5" 
			value={sharedCode.get('code')}
			disabled>
		</textarea>

		{sharedCode.get('pending') ? 
			<StudentMarkingForm studentName={studentName} />
		: null }

		{sharedCode.get('feedback') ? 
			<div>
				<p><strong>Previous Comments</strong></p>
				<div>{ sharedCode.get('feedback').map(comment => <p>{comment}</p> ) }</div>
			</div>
			: null
		}
	</div>
)