import React from 'react';
import { Link } from "react-router-dom";

export default ({userProgress, uncompletedTopics }) => {

	return (
		<div className="topics panel">
			<div className="topics-header">
				<div className="topics-header-icon"><i className="fa fa-2x fa-file" aria-hidden="true"></i></div>
			</div>
			<p className="topic-description">These are the next 3 tasks you have left to complete:</p>

	  		<ul className='uncompleted-tasks-list'>
		  		{uncompletedTopics.map((topic, i) => 
		  			<li key={i} className='short-title'><h5>{topic.get('short_title')}</h5>
		  				<p className='task-p'>-tasks:</p>
		  				<ol>
		  					<Link to={ '/prep/topic/' + topic.get('id') + '/task/' + i }>
					  			{topic.get('tasks').map((taskItem, i)=>
				  					<li key={i}>{taskItem.get('task')}</li>
				  				)}	
			  				</Link>
			  				
				  		</ol>
				  		{topic.get('assessments').size > 0 ?
				  			<div>
						  		<p className='assessment-p'>-assessments:</p>
						  		<ol>
						  			<Link to={ '/prep/topic/' + topic.get('id') + '/assessment/' + i }>
							  			{topic.get('assessments').map((assessmentItem, i)=>
						  					<li key={i}>{assessmentItem.get('assessment_title')}</li>
						  				)}
					  				</Link>
						  		</ol>
					  		</div>
					  		: null
				  		}
				  	</li>
		  		)}
	  		</ul>

	  	</div>
	);
}
