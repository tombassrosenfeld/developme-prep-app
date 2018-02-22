import React from 'react';

export default ({i, assessment, onClick, questions, studentAssessmentData, topicTitle}) => (
	<div>
		<div className="row task">
			<div className="col-xs-12">
	  		<p 
	  			className="taskList-task-title"
	  			onClick={() => onClick(assessment.get('assessment_title'))}
	  		>
	  		{i + 1}. {assessment.get('assessment_title')}
	  		</p>
			</div>
		</div>
		<div className="row">
			{questions ? questions.map((question, i) => (
				<div>
					<div className="col-xs-10" key={i}>
						<p>
							<strong>{question.get('question')} </strong> 
							{question.get('answers').find((a, i) => i + 1 === +question.get('correct_answer')).get('answer_choice')}
						</p>
					</div>
				</div>
			)) : null}
		</div>
	</div>
)