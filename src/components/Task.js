import React from 'react';

export default ({ id, topicID, topics}) => (
		<div className={ 'col-xs-12 col-md-6' }>
	  		<h1>topic { +topicID + 1} <small>{ topics.getIn([topicID, 'title']) }</small></h1>
	  		<p>{ topics.getIn([topicID, 'tasks'])[id].instructions }</p>
	  		<a href={ 'https://' + topics.getIn([topicID, 'tasks'])[id].link } target="_blank" >
	  			<p>{ topics.getIn([topicID, 'tasks'])[id].link }</p>
	  		</a>
		</div>
)