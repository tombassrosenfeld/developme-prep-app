import React from 'react';

export default ({topicTitle, assessmentID, assessment, userAnswers, onClickAssessmentSubmit}) => (
	<div className="panel submit-assessment">
		<div className="row">
			<div className="col-xs-12">
				<button 
					className="btn btn-default btn-logout btn-submit" 
					onClick={ () => onClickAssessmentSubmit(
						topicTitle,
						assessmentID,
						assessment,
						userAnswers
					) }
				>Submit</button>
			</div>
		</div>
	</div>
)
