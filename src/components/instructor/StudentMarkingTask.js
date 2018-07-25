import React from 'react';
import { getTaskFromTitleAndId } from "../../utilities/utilities";
import StudentMarkingForm from "./StudentMarkingForm";
const Parser = require('html-react-parser');

export default ({answer, task, student, sharedCode }) => (
	<div className="marking-task share-code">
		<p className="text-white bgrd-red">{ answer.get('pending') ? student.get('slug') + ' has submitted this task to be marked' : ''}</p>
		<i>{ Parser(task) }</i>
		
		<p><strong>Student's answer</strong></p>
		<textarea 
			className="form-control share-code__textarea" 
			rows="5" 
			value={answer.get('code')}
			disabled>
		</textarea>

		{answer.get('pending') ? 
			<StudentMarkingForm student={student} sharedCode={sharedCode} />
		: null }

		{answer.get('feedback') ? 
			<div>
				<p><strong>Previous Comments</strong></p>
				<div>{ answer.get('feedback').map(comment => <p>{comment}</p> ) }</div>
			</div>
			: null
		}
	</div>
)