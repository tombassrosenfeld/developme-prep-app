import React from 'react';

export default ({ id, topicID, topics}) => (
	<div className="col-xs-12 col-sm-8 col-sm-offset-4 col-md-6 col-md-offset-4 narrow-padding">
		<div className="panel">
			<h1>{+id + 1}. { topics.getIn([topicID, 'assessments'])[id].assessment_title }</h1>
	  		<h2>Questions</h2>
	  	</div>
	  	{ topics.getIn([topicID, 'assessments'])[id].questions.map( (question, i) => (
		  	<div className="task-resources">
		  		<p>{question.question}</p>
		  	</div>
		)) }
	</div>
)