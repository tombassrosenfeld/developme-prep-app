import React from 'react';
import AssessmentListItem from './AssessmentListItem';

export default ({title}) => (
	<div className="row">
		<div className="col-xs-12">
			<h2 className="panel-title">{title}</h2> 
		</div>
		<div className="col-xs-12">
			<p className="topic-description">Assessments for this topic:</p>
		</div>
	</div>
)







