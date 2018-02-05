import React from 'react';
import AssessmentQuestionChoices from '../containers/AssessmentQuestionChoices'

export default ({questionID, question, assessmentID, topicTitle, userAssessmentData }) => (
	<div className="panel" >
		<div className="row">
			<div className="col-xs-2 resource-icon-container">
				<i className="fa fa-2x fa-question"></i>
			</div>
			<div className="col-xs-10 resource-info">
				<h2 className="panel-title">{questionID + 1}. {question.get('question')}</h2>
				{!userAssessmentData.getIn([topicTitle, assessmentID, 'result'])? 
					<AssessmentQuestionChoices 
						choices={question.get('answers')}
						topicTitle={topicTitle}
						assessmentID={assessmentID}
						questionID={questionID}
					/>
					:
					<div>
						<p>Correct answer: {question.getIn(['answers', question.get('correct_answer') - 1, 'answer_choice'])}</p>
						<p>Your answer: {question.getIn(['answers', userAssessmentData.getIn([topicTitle, assessmentID, 'answers', questionID]), 'answer_choice'])}</p>
					</div>
				}
			</div>
		</div>
  	</div>
)
