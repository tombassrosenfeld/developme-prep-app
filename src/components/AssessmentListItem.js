import React from 'react';

export default ({i, assessment, onClick, questions, studentAssessmentData, topicTitle}) => {
	const studentAssessmentsArrByTopic = studentAssessmentData.get(topicTitle),
				studentAnswersForAssessment = studentAssessmentsArrByTopic.find((assessment, index) => i === index),
				studentAnswers = studentAnswersForAssessment.get('answers').toJS();
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
				{questions ? questions.map((question, i) => {
					const answers = question.get('answers').toJS(),
								correctAnswer = +question.get('correct_answer');
					return studentAnswers[i] + answers.length - studentAnswers.length  ? (
						<div>
							<div className="col-xs-10" key={i}>
								<p>
									<strong>{question.get('question')} </strong> 
								</p>
								<p>Students answer: {answers[studentAnswers[i]+1].answer_choice}</p>
								<p>Correct answer: {answers[correctAnswer].answer_choice}</p>
							</div>
							<div className="col-xs-2" key={i}>
								<p>{correctAnswer === studentAnswers[i]+1 ? 'Correct' : 'Incorrect'}</p>
							</div>
						</div>
					) : null;
				}) : null}
			</div>
		</div>
	)
}