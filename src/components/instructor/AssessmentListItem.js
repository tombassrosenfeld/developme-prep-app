import React from 'react';

export default ({i, assessment, onClick, questions, studentAssessmentData, topicTitle}) => {
	const studentAnswersForAssessment = studentAssessmentData.get(topicTitle).find((assessment, index) => i === index),
				studentAnswers = studentAnswersForAssessment.get('answers').toJS();
	return (
		<div className="row assessment-item">
			<div className="col-xs-12 task">
	  		<p 
	  			className="taskList-task-title"
	  			onClick={() => onClick(assessment.get('assessment_title'))}
	  		>
	  		<strong>{i + 1}</strong>. {assessment.get('assessment_title')}
	  		</p>
			</div>
			{questions ? 
			<div className="col-xs-12">
	  		<p className="panel-title questions-header">Questions:</p>
			</div> : null }
			<div className="col-xs-12">
				{questions ? questions.map((question, i) => {
					const answers = question.get('answers').toJS(),
								correctAnswer = +question.get('correct_answer');

					//Condition which prevents undefined error if tasks are added after the student has completed the assessment
					//studentsAnswers[i] can be 0 so can't check for existence but can check agaisnt the difference between the 2 array lengths
					return studentAnswers[i] + answers.length - studentAnswers.length  ? (
						<div className="row question-answer">
							<div className="col-xs-10 question" key={i}>
								<p>
									<strong>{i+1}: </strong> 
									{question.get('question')}
								</p>
								<p><strong>Students answer: </strong>{answers[studentAnswers[i]+1].answer_choice}</p>
								<p><strong>Correct answer: </strong>{answers[correctAnswer].answer_choice}</p>
							</div>
							<div className="col-xs-2" key={i}>
								<div className="marker topicStatus-marker">
									{correctAnswer === studentAnswers[i]+1 ? 
									<i className="fa fa-check-circle-o" aria-hidden="true"></i> : 
									<i className="fa fa-times-circle-o" aria-hidden="true"></i>
									}
								</div>
							</div>
						</div>
					) : null;
				}) : null}
			</div>
		</div>
	)
}