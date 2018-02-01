import React from 'react';
import AssessmentQuestion from '../containers/AssessmentQuestion';
import AssessmentSubmit from '../containers/AssessmentSubmit';

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

		<AssessmentSubmit 
			assessmentID={id}
			assessment={topics.getIn([topicID, 'assessments', id])}
			topicTitle={topics.getIn([topicID, 'short_title'])}
			userAnswers={userAssessmentData.getIn([topics.getIn([topicID, 'short_title']), id, 'answers'])}
		/>

	</div>
)