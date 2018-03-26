import React from 'react';
import TaskResource from './TaskResource';
const Parser = require('html-react-parser');

export default ({ id, topicID, topics}) => (
	<div className="col-xs-12 col-sm-8 col-sm-offset-4 col-md-6 col-md-offset-4 narrow-padding">
		<div className="panel">
			<h1>{+id + 1}. { topics.getIn([topicID, 'tasks', id, 'task']) }</h1>
	  		<div>{ Parser(topics.getIn([topicID, 'tasks', id, 'description'])) }</div>
	  		{ topics.getIn([topicID, 'tasks', id, 'resources'])? <h2 className="panel-title">Resources</h2> : null }
	  	</div>
	  	<div className="task-resources">
	  		{topics.getIn([topicID, 'tasks', id, 'resources']) ?
	  			topics.getIn([topicID, 'tasks', id, 'resources']).map( (resource, i) => (
	  				<TaskResource 
	  					key={i}
	  					title={resource.get('title')}
	  					description={resource.get('description')}
	  					type={resource.get('resource_type')}
	  					link={resource.get('link')}
	  				/>
				)) 
				: null
	  		}
	  	</div>
	</div>
)