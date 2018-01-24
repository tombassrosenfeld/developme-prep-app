import React from 'react';

export default ({ id, topicID, topics}) => (
		<div className="col-xs-12 col-sm-8 col-sm-offset-4 col-md-6 col-md-offset-4 narrow-padding">
			<div className="panel">
				<h1 className="panel-title">{ topics.getIn([topicID, 'tasks'])[id].task }</h1>
		  		<p>{ topics.getIn([topicID, 'tasks'])[id].instructions }</p>
		  		<a href={ 'https://' + topics.getIn([topicID, 'tasks'])[id].link } target="_blank" >
		  			<p>{ topics.getIn([topicID, 'tasks'])[id].link }</p>
		  		</a>
		  	</div>
		</div>
)