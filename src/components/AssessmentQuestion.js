import React from 'react';
import AssessmentQuestionChoices from '../containers/AssessmentQuestionChoices'

export default ({questionID, question, assessmentID, topicTitle, userAssessmentData }) => (
	<div className="panel" >
		<div className="row">
			<div className="col-xs-2 resource-icon-container .marker">
				{userAssessmentData.getIn([topicTitle, assessmentID, 'result']) == null ? 
					<i className="fa fa-2x fa-question"></i>
					:
					(question.get('correct_answer') - 1) === userAssessmentData.getIn([topicTitle, assessmentID, 'answers', questionID]) ?
						<i className="fa fa-check-circle-o" aria-hidden="true"></i> 
						: 
						<i className="fa fa-times-circle-o" aria-hidden="true"></i> 
				}
			</div>
			<div className="col-xs-10 resource-info">
				<h2 className="panel-title">{questionID + 1}. {question.get('question')}</h2>
				{ <AssessmentQuestionChoices 
						choices={question.get('answers')}
						topicTitle={topicTitle}
						assessmentID={assessmentID}
						questionID={questionID}
					/> }
			</div>
		</div>
  	</div>
)
