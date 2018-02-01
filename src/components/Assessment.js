import React from 'react';
import AssessmentQuestion from '../containers/AssessmentQuestion';

export default ({ id, topicID, topics, userAssessmentData, onClickAssessmentSubmit}) => (
	<div className="col-xs-12 col-sm-8 col-sm-offset-4 col-md-6 col-md-offset-4 narrow-padding">
	
		<div className="panel">
			<h1>{+id + 1}. { topics.getIn([topicID, 'assessments', id, 'assessment_title']) }</h1>
	  		<h2>Questions</h2>
	  	</div>

		<div className="assessment-questions">
		  	{ topics.getIn([topicID, 'assessments', id, 'questions']).map( (question, questionID) => (
				<AssessmentQuestion 
					key={questionID} 
					question={question} 
					questionID={questionID}
					assessmentID={id}
					topicTitle={topics.getIn([topicID, 'short_title'])}
				/>
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