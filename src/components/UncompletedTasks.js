import React from 'react';

export default ({userProgress, topics, maxValue }) => {
console.log(topics.toJS());
const completedShortTitles = userProgress.map(el=>el.split('.')[0]); 

topics = topics.filter(topic => completedShortTitles.reduce((isComplete, shortTitle) => shortTitle !== topic.get('short_title'), false));
	return (
		<div className="topics panel">
			<div className="topics-header">
				<div className="topics-header-icon"><i className="fa fa-2x fa-file" aria-hidden="true"></i></div>
			</div>
			<p className="topic-description">The {maxValue - userProgress.size} tasks you have left to complete are:</p>
			{/* JUST DISPLAYING ALL SHORT TITLES AND THEIR TASKS */}
	  		<ul className='uncompleted-tasks-list'>
		  		{topics.map((topic, i) => 
		  			<li key={i} className='short-title'><h5>{topic.get('short_title')}</h5>
		  				<p className='task-p'>-tasks:</p>
		  				<ol>
				  			{topic.get('tasks').map((taskItem, i)=>
			  					<li key={i}>{taskItem.get('task')}</li>
			  				)}
				  		</ol>
				  		{topic.get('assessments').size > 0 ?
				  			<div>
						  		<p className='assessment-p'>-assessments:</p>
						  		<ol>
						  			{topic.get('assessments').map((assessmentItem, i)=>
					  					<li key={i}>{assessmentItem.get('assessment_title')}</li>
					  				)}
						  		</ol>
					  		</div>
					  		: null
				  		}
				  	</li>
		  		)}
	  		</ul>

	  	</div>
	)
}
