import React from 'react';

export default ({ assessmentID, assessmentTitle, result, totalQuestions}) => (
	<div className="panel">
		<h1>{+assessmentID + 1}. { assessmentTitle }</h1>
		<div className="row">
			<div className="col-xs-6">
  				<h2>Questions</h2>
  			</div>
  			{result ?
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