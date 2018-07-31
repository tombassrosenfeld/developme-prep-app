import React from 'react';
import AssessmentCancel from './AssessmentCancel';

export default ({topicTitle, assessmentID, assessment, userAnswers, onSubmit, onClickAssessmentSubmit, onCancel, retake, disabled}) => (
	<div className="panel submit-assessment">
		<div className="row">
			<div className="col-xs-12 col-md-6 assessment-buttons">
				<button 
					className="btn btn-default btn-logout btn-submit btn-block btn-home-green"
					disabled={disabled} 
					onClick={ () => {onClickAssessmentSubmit(
						topicTitle,
						assessmentID,
						assessment,
						userAnswers
					); onSubmit(userAnswers);} }
				>Submit</button>
			</div>
			<div className="col-xs-12 col-md-6 assessment-buttons">
				{retake ?
				<AssessmentCancel
					onClick={() => onCancel(userAnswers)}
				/> : null}
			</div>
		</div>
	</div>
)