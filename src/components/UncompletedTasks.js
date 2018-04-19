import React from 'react';

export default ({userProgress, topics, maxValue }) => {
console.log(topics.toJS())

const uncompletedArray = [];
const userProgressValueArray = userProgress.map(el=>el.split('.')[0]);
console.log(userProgressValueArray.toJS()) 
	return (
		<div className="col-xs-12 col-sm-8 col-md-6 narrow-padding">
		<div className="topics panel">
			<div className="topics-header">
				<div className="topics-header-icon"><i className="fa fa-2x fa-file" aria-hidden="true"></i></div>
			</div>
			<p className="topic-description">The {maxValue - userProgress.size} tasks you have left to complete are:</p>
	  		<ul>
		  		{topics.map((topic, i) => 
		  			<li key={i}>{topic.get('short_title')}
		  				<ol>
				  			{topic.get('tasks').map((taskItem, i)=>
			  					<li key={i}>{taskItem.get('task')}</li>
			  				)}
				  		</ol>
				  	</li>
		  		)}

	  		</ul>
	  	</div>
	</div>
	)
}
