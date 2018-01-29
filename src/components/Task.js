import React from 'react';

export default ({ id, topicID, topics}) => (
	<div className="col-xs-12 col-sm-8 col-sm-offset-4 col-md-6 col-md-offset-4 narrow-padding">
		<div className="panel">
			<h1>{+id + 1}. { topics.getIn([topicID, 'tasks', id, 'task']) }</h1>
	  		<p>{ topics.getIn([topicID, 'tasks', id, 'description']) }</p>
	  		{ topics.getIn([topicID, 'tasks', id, 'resources'])? <h2 className="panel-title">Resources</h2> : null }
	  	</div>
	  	<div className="task-resources">
	  		{topics.getIn([topicID, 'tasks', id, 'resources']) ?
	  			topics.getIn([topicID, 'tasks', id, 'resources']).map( (resource, i) => (
		  			<a href={resource.link} target="_blank" className="resource-link" key={i}>
			  			<div className="panel" >
				  			<div className="row">
				  				<div className="col-xs-2 resource-icon-container">
				  					<i className={'fa fa-2x resource-icon ' + resource.get('resource_type')}></i>
				  				</div>
				  				<div className="col-xs-10 resource-info">
				  					<h2 className="panel-title">{resource.get('title')}</h2>
				  					<p>{resource.get('description')}</p>
				  				</div>
				  			</div>
					  	</div>
					</a>
				)) 
				: null
	  		}
	  	</div>
	</div>
)