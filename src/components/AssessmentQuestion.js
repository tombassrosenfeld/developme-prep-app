import React from 'react';
import AssessmentQuestionChoices from '../containers/AssessmentQuestionChoices'

export default ({questionID, question, assessmentID, topicTitle, userAssessmentData }) => (
	<div className="panel">
		<div className="row">
			<div className="col-xs-12">
				<p>{questionID + 1}. {question.get('question')}</p>
			</div>
		</div>
		
		<div className="row">
			<div className="col-xs-12">
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
