import React from 'react';

export default ({questionID, question, assessmentID, topicTitle, userAssessmentData, onChangeAssessmentAnswer }) => (
	<div className="panel">
		<div className="row">
			<div className="col-xs-12">
				<p>{questionID + 1}. {question.get('question')}</p>
				{question.get('answers').map( (answer, answerID) => (
					// TODO, turn this into a component
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
				))}
			</div>
		</div>
  	</div>
)
