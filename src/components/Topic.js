import React from 'react';
import TaskList from '../containers/TaskList';
import TopicStatus from '../containers/TopicStatus';
import AssessmentList from '../containers/AssessmentList';
const Parser = require('html-react-parser');

export default ({id, topic}) => (
	<div className="col-xs-12 col-sm-8 col-md-6 narrow-padding single-topic">
		<div className="topics panel">
			<div className="topics-header">
				<div className="topics-header-icon"><i className="fa fa-2x fa-file" aria-hidden="true"></i></div>
			</div>
			<div className="row">
				<div className="col-xs-8">
	  				<h1 className="topic-title">{ topic.get('short_title') } <small>{ topic.get('title') }</small></h1>
	  			</div>
	  			{topic.get('duration') ? 
				<div className="col-xs-4 resource-duration">
					<div className="pull-right">
						<i className="fa fa-clock-o" aria-hidden="true"></i>
						<p className="duration"><span>{topic.get('duration')}</span> {topic.get('duration') > 1 || +topic.get('duration') === 0.5 ? 'hours' : 'hour' }</p>
					</div>
				</div>
				: null }
			</div>
	  		<div className="topic-description">{ Parser(topic.get('description')) }</div>
	  	</div>
	  	<TaskList topic={ topic }/>
	  	<AssessmentList topic={ topic } />
	  	<TopicStatus topic={ topic }/>
	</div>
);
