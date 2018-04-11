import React from 'react';

export default ({ assessmentID, assessmentTitle, result, totalQuestions, retake, retakeOnClick}) => (
	<div className="panel">
		<h1>{+assessmentID + 1}. { assessmentTitle }</h1>
		<div className="row">
			<div className="col-xs-6">
				<h2>Questions</h2>
				{!retake ? <button onClick={retakeOnClick}>Retake</button> : null}
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