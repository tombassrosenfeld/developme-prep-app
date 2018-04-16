import React from 'react';
import TaskList from '../containers/TaskList';
import TopicStatus from '../containers/TopicStatus';
import AssessmentList from '../containers/AssessmentList';
const Parser = require('html-react-parser');

export default ({id, topic}) => (
	<div className="col-xs-12 col-sm-8 col-md-6 narrow-padding">
		<div className="topics panel">
			<div className="topics-header">
				<div className="topics-header-icon"><i className="fa fa-2x fa-file" aria-hidden="true"></i></div>
			</div>
	  		<h1 className="topic-title">{ topic.get('short_title') } <small>{ topic.get('title') }</small></h1>
	  		<div className="topic-description">{ Parser(topic.get('description')) }</div>
	  	</div>
	  	<TaskList topic={ topic }/>
	  	<AssessmentList topic={ topic } />
	  	<TopicStatus topic={ topic }/>
	</div>
);
