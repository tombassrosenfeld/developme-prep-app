import React from 'react';
import AssessmentListItem from './AssessmentListItem';
import SelectedTopicHeader from './SelectedTopicHeader';

export default ({selectedTopic, selectedAssessment, student, onClick}) => {
	console.log(selectedTopic.toJS());
	// console.log(student.toJS());
	const topic = selectedTopic.get('short_title');
	const allTasks = selectedTopic.get('tasks');
	const completedTasks = student.get('userProgress');

	const completedShortTitles = completedTasks.filter(el=>el.indexOf('.assess') === -1).filter(el=>el.indexOf(topic) > -1); //tasks completed for the given topic
	
	console.log(allTasks.toJS());
	console.log(completedShortTitles.toJS());

	return (
		<div className="panel selected-topic">
		


		{ allTasks.size !== completedShortTitles.size ?
	  		selectedTopic.get('assessments').map( (assessment, i) => (
	  		<AssessmentListItem 
	  			key={i} i={i} 
	  			assessment={assessment} 
	  			onClick={onClick} 
	  			questions={selectedAssessment ? selectedAssessment.get('questions') : null}
	  			topicTitle={selectedTopic.get('short_title')}
	  			studentAssessmentData={student.get('userAssessmentData')}
	  		/>)) :
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

							








