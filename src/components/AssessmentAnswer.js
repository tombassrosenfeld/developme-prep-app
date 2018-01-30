import React from 'react';
import AssessmentAnswer from './AssessmentAnswer';

export default ({topicTitle, answerTitle assessmentID, questionID, answerID, userAnswer, onChangeAssessmentAnswer}) => (
	<input 
    	onChange={() => onChangeAssessmentAnswer(
			topicTitle, 
			assessmentID,
			questionID,
			answerID,
		)}
		type="radio" 
		value="option1" 
		checked={ userAnswer === answerID } 
	/>
	{answerTitle}
)
