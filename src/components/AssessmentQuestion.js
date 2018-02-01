import React from 'react';
import AssessmentQuestionChoices from '../containers/AssessmentQuestionChoices'

export default ({questionID, question, assessmentID, topicTitle }) => (
	<div className="panel">
		<div className="row">
			<div className="col-xs-12">
				<p>{questionID + 1}. {question.get('question')}</p>
			</div>
		</div>
		
		<div className="row">
			<div className="col-xs-12">
				<AssessmentQuestionChoices 
					choices={question.get('answers')}
					topicTitle={topicTitle}
					assessmentID={assessmentID}
					questionID={questionID}
				/>
			</div>
		</div>

  	</div>
)
