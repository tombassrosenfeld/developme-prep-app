import React from 'react';
import { Link } from "react-router-dom";

export default ({userProgress, uncompletedTopics }) => {
	return (
		<div className="topics panel">
			<div className="topics-header">
				<div className="topics-header-icon"><i className="fa fa-2x fa-file" aria-hidden="true"></i></div>
			</div>
			<p className="uncompleted-topic-description">These are the next 2 topics you have left to complete:</p>
			
	  	
	  		<div className='uncompleted-tasks-list'>
		  		{uncompletedTopics.map((topic, i) => 
		  			<div key={i} className='topics-icon row uncompleted-tasks-list-item'>
			  			<Link to={ '/prep/topic/' + topic.get('id') }>
			  				<h5>{topic.get('short_title')}</h5>
			  			</Link>		
				  	</div>
		  		)}
	  		</div>

	  	</div>
	);
}
