import React from 'react';
import AssessmentQuestion from '../containers/AssessmentQuestion';
import AssessmentSubmit from '../containers/AssessmentSubmit';
import AssessmentHeader from './AssessmentHeader';
import { List } from "immutable";

export default ({ id, topic, userAssessmentData}) => (
	<div className="col-xs-12 col-sm-8 col-sm-offset-4 col-md-6 col-md-offset-4 narrow-padding">
		<AssessmentHeader 
			assessmentID={id}
			assessmentTitle={topic.getIn(['assessments', id, 'assessment_title'])}
			result={userAssessmentData.getIn([topic.getIn(['short_title']), id, 'result']) }
			totalQuestions={topic.getIn(['assessments', id, 'questions']).size}
		/>

		<div className="assessment-questions">
		  	{ topic.getIn(['assessments', id, 'questions']).map( (question, questionID) => (
				<AssessmentQuestion 
					key={questionID} 
					question={question} 
					questionID={questionID}
					assessmentID={id}
					topicTitle={topic.getIn(['short_title'])}
				/>
			)) }
		</div>

		{ <AssessmentSubmit 
				assessmentID={id}
				assessment={topic.getIn(['assessments', id])}
				topicTitle={topic.getIn(['short_title'])}
				userAnswers={
					userAssessmentData.getIn([topic.getIn(['short_title']), id, 'answers']) ?
					userAssessmentData.getIn([topic.getIn(['short_title']), id, 'answers']) : List([])
				}
			/> }
	</div>
)