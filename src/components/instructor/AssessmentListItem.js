import React from 'react';
import CodeSnippet from '../CodeSnippet';

export default ({i, assessment, onClick, questions, studentAssessmentData, topicTitle}) => {
	const studentAnswersForAssessment = studentAssessmentData.get(topicTitle) ? studentAssessmentData.get(topicTitle).find((assessment, index) => i === index) : null,
				studentAnswers = studentAnswersForAssessment ? studentAnswersForAssessment.get('answers').toJS() : null,
				attemptsForAssessment = studentAnswersForAssessment ? studentAnswersForAssessment.get('attempts') : null;

	return attemptsForAssessment ? (
		<div className="panel">
			<div className="row assessment-item">
				<div className="col-xs-8 task">
			  		<p 
			  			className="taskList-task-title"
			  			onClick={() => onClick(assessment.get('assessment_title'))}
			  		>
			  			<strong>{i + 1}</strong>. {assessment.get('assessment_title')}
			  		</p>
				</div>
				<div className="col-xs-4">
		  			<p className="attempts">Attempts: {attemptsForAssessment}</p>
				</div>
			</div>
			<div className="row">
				{questions ? 
				<div className="col-xs-12">
		  			<p className="panel-title questions-header">Questions</p>
				</div> : null }
			</div>
			<div className="assessment-questions">
				{questions ? questions.map((question, i) => {
					const answers = question.get('answers').toJS(),
								correctAnswer = +question.get('correct_answer');
					//If studentAnswers does not have a value at the index, then do no not run this code. 
					//+ answers.length - studentAnswers.length - is used as studentAnswers[i] can be 0, which returns false.
					return studentAnswers[i] + answers.length - studentAnswers.length || answers.length === studentAnswers.length ? (
							<div className="panel row">
								<div className="col-xs-2 resource-icon-container .marker">
									{correctAnswer === studentAnswers[i]+1 ? 
										<i className="fa fa-check-circle-o" aria-hidden="true"></i> : 
										<i className="fa fa-times-circle-o" aria-hidden="true"></i>
									}
								</div>
								<div className="col-xs-10 resource-info">
									<h2 className="panel-title">{i+1}. {question.get('question')}</h2>
									{question.get('code_snippet') ? <CodeSnippet snippet={question.get('code_snippet')} /> : null}
									<div>
										<p><strong>Student's answer: </strong>{answers[studentAnswers[i]].answer_choice}</p>
										<p><strong>Correct answer: </strong>{answers[correctAnswer-1].answer_choice}</p>
									</div>
								</div>
							</div>
					) : null;
				}) : null}
			</div>
		</div>
	) : <div className="row">
			<div className="col-xs-12">
				<p>This student has not taken any of the assessments for this topic yet.</p>
			</div>
		</div>
			
}