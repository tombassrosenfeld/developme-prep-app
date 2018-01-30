import React from 'react';

export default ({ id, topicID, topics, userAssessmentData, onChangeAssessmentAnswer, onClickAssessmentSubmit}) => (
	<div className="col-xs-12 col-sm-8 col-sm-offset-4 col-md-6 col-md-offset-4 narrow-padding">
	
		<div className="panel">
			<h1>{+id + 1}. { topics.getIn([topicID, 'assessments', id, 'assessment_title']) }</h1>
	  		<h2>Questions</h2>
	  	</div>

		<div className="assessment-questions">
		  	{ topics.getIn([topicID, 'assessments', id, 'questions']).map( (question, questionID) => (
				<div className="panel" key={questionID}>
		  			<div className="row">
		  				<div className="col-xs-12">
		  					<p>{questionID + 1}. {question.get('question')}</p>
	  						{question.get('answers').map( (answer, answerID) => (
	  							// TODO, turn this into a component
								<div className="radio" key={answerID}>
									<label>
						            	<input 
							            	onChange={() => onChangeAssessmentAnswer(
												topics.getIn([topicID, 'short_title']), // topic short title
												id, // assessment id
												questionID,
												answerID,
											)}
						            		type="radio" 
						            		value="option1" 
						            		checked={
						            			userAssessmentData.getIn([topics.getIn([topicID, 'short_title']), id, 'answers', questionID ]) === answerID
						            		} 
						            	/>
								 		{answer.get('answer_choice')}
						         	</label>
						        </div>
	  						))}
		  				</div>
		  			</div>
			  	</div>
			)) }
		</div>

		<div className="panel submit-assessment">
			<div className="row">
				<div className="col-xs-12">
					<button 
						className="btn btn-default btn-logout btn-submit" 
						onClick={ () => onClickAssessmentSubmit(
							topics.getIn([topicID, 'short_title']), // topic short title
							id, // assessmentID
							topics.getIn([topicID, 'assessments', id]), // assessment
							userAssessmentData.getIn([topics.getIn([topicID, 'short_title']), id, 'answers']), // user assessment answers
						) }
					>Submit</button>
				</div>
			</div>
		</div>

	</div>
)