import React from 'react';
import AssessmentQuestion from '../containers/AssessmentQuestion';
import AssessmentSubmit from '../containers/AssessmentSubmit';
import AssessmentHeader from './AssessmentHeader';
import { List } from "immutable";

export default ({ id, topicID, topics, userAssessmentData}) => (
	<div className="col-xs-12 col-sm-8 col-sm-offset-4 col-md-6 col-md-offset-4 narrow-padding">
		<AssessmentHeader 
			assessmentID={id}
			assessmentTitle={topics.getIn([topicID, 'assessments', id, 'assessment_title'])}
			result={userAssessmentData.getIn([topics.getIn([topicID, 'short_title']), id, 'result']) }
			totalQuestions={topics.getIn([topicID, 'assessments', id, 'questions']).size}
		/>

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

		{ userAssessmentData.getIn([topics.getIn([topicID, 'short_title']), id, 'result']) == null ? 
			<AssessmentSubmit 
				assessmentID={id}
				assessment={topics.getIn([topicID, 'assessments', id])}
				topicTitle={topics.getIn([topicID, 'short_title'])}
				userAnswers={
					userAssessmentData.getIn([topics.getIn([topicID, 'short_title']), id, 'answers']) ?
					userAssessmentData.getIn([topics.getIn([topicID, 'short_title']), id, 'answers']) : List([])
				}
			/>
			: null
		}
	</div>
)