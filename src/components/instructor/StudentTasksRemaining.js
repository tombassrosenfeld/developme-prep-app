import React from 'react';

export default ({selectedTopic, selectedAssessment, student, onClick}) => {
	const topic = selectedTopic.get('short_title');
	const allTopicTasks = selectedTopic.get('tasks');
	const completedTasks = student.get('userProgress');

	const completedShortTitles = completedTasks.filter(el=>el.indexOf('.assess') === -1).filter(el=>el.indexOf(topic) > -1); //tasks completed for the given topic
	const uncompletedShortTitles = completedShortTitles.map(el=>Number(el.split('.')[1]));
	const filteredTopicTasks = allTopicTasks.filter((task, ind)=> uncompletedShortTitles.indexOf(ind) === -1 );

	return (
		<div className="panel selected-topic"> 
			<h2 className="panel-title">Tasks to Complete:</h2>
			{ allTopicTasks.size !== completedShortTitles.size ?
				
		  		filteredTopicTasks.map((topic, i) => 
				<div className="row task" key={i}>
		  			<div className="col-xs-10">
						<p className="taskList-task-title">
						<strong>{i + 1}. </strong>
						{ topic.get('task') }
						</p>
					</div>
				</div>) :
		  		<div className="row task">
		  			<div className="col-xs-10">
							<p className="taskList-task-title">
							{
								selectedTopic.get('tasks').size ? 'This student has finished all of the tasks in this topic' : 'There are currently no tasks for this topic.'
							}
							</p>
					</div>
				</div>
			}				  	
		</div>
	)
}

							








