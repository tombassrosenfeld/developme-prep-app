import React from 'react';

export default ({choices, topicTitle, assessmentID, questionID, userAssessmentData, onChangeAssessmentAnswer }) => (
	choices.map( (answer, answerID) => (
		<div className="radio" key={answerID}>
			<label>
            	<input 
	            	onChange={() => onChangeAssessmentAnswer(
						topicTitle,
						assessmentID,
						questionID,
						answerID,
					)}
            		type="radio" 
            		value="option1" 
            		checked={
            			userAssessmentData.getIn([topicTitle, assessmentID, 'answers', questionID ]) === answerID
            		} 
            	/>
		 		{answer.get('answer_choice')}
         	</label>
        </div>
	))
)
