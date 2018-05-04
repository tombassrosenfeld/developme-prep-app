import React from 'react';
import { Link } from "react-router-dom";

export default ({userProgress, uncompletedTopics }) => {
	return (
		<div>
			<p className="uncompleted-topic-description">We suggest you complete the next two topics:</p>
	  	
	  		<div className='uncompleted-tasks-list'>
		  		{uncompletedTopics.map((topic, i) => 
		  			<div key={i} className='uncompleted-tasks-list-item'>
		  				<h5>
				  			<Link to={ '/prep/topic/' + topic.get('id') }>
				  				{topic.get('short_title')}
				  			</Link>	
			  			</h5>	
				  	</div>
		  		)}
	  		</div>

	  	</div>
	);
}
