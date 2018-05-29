import React from 'react';
import TaskResource from './TaskResource';
const Parser = require('html-react-parser');

export default ({ id, topicID, topic}) => {

	return <div className="col-xs-12 col-sm-8 col-md-6 col-md-offset-4 narrow-padding">
		<div className="panel">
			<h1>{+id + 1}. { topic.getIn(['tasks', id, 'task']) }</h1>
	  		<div>{ Parser(topic.getIn(['tasks', id, 'description']).replace(/\\n/g, "")) }</div>
	  		{ topic.getIn(['tasks', id, 'resources'])? <h2 className="panel-title">Resources</h2> : null }
	  	</div>
	  	<div className="task-resources">
	  		{topic.getIn(['tasks', id, 'resources']) ?
	  			topic.getIn(['tasks', id, 'resources']).map( (resource, i) => (
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
}