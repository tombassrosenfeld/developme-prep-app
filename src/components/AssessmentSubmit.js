import React from 'react';
import AssessmentCancel from './AssessmentCancel';

export default ({topicTitle, assessmentID, assessment, userAnswers, onSubmit, onClickAssessmentSubmit, onCancel, retake}) => (
	<div className="panel submit-assessment">
		<div className="row">
			<div className="col-xs-12 assessment-buttons">
				<button 
					className="btn btn-default btn-logout btn-submit" 
					onClick={ () => {onClickAssessmentSubmit(
						topicTitle,
						assessmentID,
						assessment,
						userAnswers
					); onSubmit(userAnswers);} }
				>Submit</button>
				{retake ?
				<AssessmentCancel
					onClick={() => onCancel(userAnswers)}
				/> : null}
			</div>
		</div>
	</div>
)