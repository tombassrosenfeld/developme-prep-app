import React from 'react';

export default ({ assessmentID, assessmentTitle, answers, result, totalQuestions, retake, retakeOnClick}) => (
	<div className="panel">
		<h1>{+assessmentID + 1}. { assessmentTitle }</h1>
		{!retake && answers ? (
			<div className="retake-text">
				<p>You can retake the assessment by clicking the button below. You will lose your existing answers if you do this.</p>
				<button className="btn btn-default btn-logout btn-submit retake-button" onClick={retakeOnClick}>Retake</button>
			</div>
		) : null}
		<div className="row">
			<div className="col-xs-6">
				<h2>Questions</h2>
			</div>
			{result != null ?
			<div className="col-xs-6">
				<h2 className="pull-right">
					{ "Your score: " + result + " / " + totalQuestions }
				</h2>
			</div>
			: null
			}
		</div>
	</div>
)