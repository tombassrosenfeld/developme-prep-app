import React from 'react';

export default ({i, assessment, onClick, questions}) => (
	<div>
		<div className="row task">
			<div className="col-xs-12">
	  		<h3
	  			className="taskList-task-title"
	  			onClick={() => onClick(assessment.get('assessment_title'))}
	  		>
	  		{i + 1}. {assessment.get('assessment_title')}
	  		</h3>
			</div>
		</div>
		<div className="row">
			{questions ? questions.map((question, i) => (
				<div className="col-xs-12">
					<p key={i}>{question.get('question')}</p>
				</div>
			)) : null}
		</div>
	</div>
)