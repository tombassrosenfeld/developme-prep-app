import React from 'react';
import { getTaskFromTitleAndId } from "../../utilities/utilities";
import StudentMarkingForm from "../../containers/instructor/StudentMarkingForm";
const Parser = require('html-react-parser');

export default ({question, answer, taskID, topicID, student }) => (
	<div className="share-code">
		<p className="text-white bgrd-red">{ answer.get('pending') ? student.get('slug') + ' has submitted this task to be marked' : ''}</p>
		<i>{ Parser(question) }</i>
		
		<p><strong>Student's answer</strong></p>
		<textarea 
			className="form-control share-code__textarea" 
			rows="5" 
			value={answer.get('code')}
			disabled>
		</textarea>

		{answer.get('pending') ? 
			<StudentMarkingForm student={student} topicID={topicID} taskID={taskID}/>
		: null }

		{answer.get('feedback') ? 
			<div>
				<p><strong>Previous Comments</strong></p>
				<div>{ answer.get('feedback').map(comment => <p><i>"{comment}"</i></p> ) }</div>
			</div>
			: null
		}
	</div>
)