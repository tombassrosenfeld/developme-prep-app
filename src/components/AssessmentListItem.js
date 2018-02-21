import React from 'react';

export default ({i, assessment, onClick, questions}) => (
	<div className="row task">
		<div className="col-xs-12">
  		<p 
  			className="taskList-task-title"
  			onClick={() => onClick(assessment.get('assessment_title'))}
  		>
  		{i + 1}. {assessment.get('assessment_title')}
  		</p>
		</div>
		<div className="col-xs-12">
			{questions ? questions.map((question, i) => (

				<p key={i}>{question.get('question')}</p>

			)) : null}
		</div>
	</div>
)