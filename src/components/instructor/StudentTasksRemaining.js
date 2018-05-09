import React from 'react';
import SelectedTopicHeader from './SelectedTopicHeader';

export default ({selectedTopic, selectedAssessment, student, onClick}) => {
	// console.log(selectedTopic.toJS());
	// console.log(student.toJS());
	const topic = selectedTopic.get('short_title');
	const allTopicTasks = selectedTopic.get('tasks');
	const completedTasks = student.get('userProgress');

	const completedShortTitles = completedTasks.filter(el=>el.indexOf('.assess') === -1).filter(el=>el.indexOf(topic) > -1); //tasks completed for the given topic
	const uncompletedShortTitles = completedShortTitles.map(el=>Number(el.split('.')[1]));
	const filteredTopicTasks = allTopicTasks.filter((task, ind)=> uncompletedShortTitles.indexOf(ind) === -1 );

	// uncompletedShortTitles.indexOf(task > -1)
	 //tasks uncompleted for the given topic
	// console.log(allTopicTasks.toJS());
	// console.log(completedShortTitles.toJS());
	// console.log(uncompletedShortTitles.toJS());
	// console.log(filteredTopicTasks.toJS());
	return (
		<div className="panel selected-topic">
			<p>Tasks to Complete:</p>
			{ allTopicTasks.size !== completedShortTitles.size ?
				
		  		filteredTopicTasks.map((topic, i) => 
				<div className="row task">
		  			<div className="col-xs-10 task">
						<p className="taskList-task-title">
						<strong>{i + 1}</strong>.
						{ topic.get('task') }
						</p>
					</div>
				</div>) :
		  		<div className="row task">
		  			<div className="col-xs-10">
							<p className="taskList-task-title">
							{
								selectedTopic.get('tasks').size ? 'This student has finished all of the tasks in this topic' : 'There are currently no assessments for this topic.'
							}
							</p>
					</div>
				</div>
			}				  	
		</div>
	)
}

							








