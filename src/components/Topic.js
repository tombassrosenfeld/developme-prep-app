import React from 'react';

export default ({id, topics}) => (
	<div className="col-xs-12 col-sm-8 col-md-6 narrow-padding">
		<div className="topics panel">
			<div className="topics-header">
				<div className="topics-header-icon"><i className="fa fa-2x fa-file-o" aria-hidden="true"></i></div>
			</div>
	  		<h1 className="topic-title">Topic { +id + 1} <small>{ topics.getIn([id, 'title']) }</small></h1>
	  		<p className="topic-description">{ topics.getIn([id, 'description']) }</p>
	  	</div>
	</div>
)