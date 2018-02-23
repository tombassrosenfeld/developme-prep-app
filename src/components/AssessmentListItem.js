import React from 'react';

export default ({i, assessment, onClick, questions, studentAssessmentData, topicTitle}) => {
	const studentAssessmentsArrByTopic = studentAssessmentData.get(topicTitle),
	studentAnswersForAssessment = studentAssessmentsArrByTopic.find((assessment, index) => i === index);

	console.log(questions ? questions.toJS() : null);

	return (
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
								{question.get('answers').reduce((studentAnswer, ans, i) => i)}
							</p>
						</div>
					</div>
				)) : null}
			</div>
		</div>
	)
}