import React from 'react';
import StudentTasksRemaining from './StudentTasksRemaining';
import AssessmentListItem from './AssessmentListItem';
import SelectedTopicHeader from './SelectedTopicHeader';

export default ({selectedTopic, selectedAssessment, student, onClick}) => {
	return (<div className="panel selected-topic">

		<SelectedTopicHeader title={selectedTopic.get('short_title')}/>
		<StudentTasksRemaining
			selectedTopic = { selectedTopic }
			selectedAssessment = { selectedAssessment }
			student = { student }
			onClick = { onClick }
		/>
		<h2 className="panel-title">Assessments:</h2>
		{ selectedTopic.get('assessments').size > 0 && student.get('userAssessmentData').size ?
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
							selectedTopic.get('assessments').size ? 'This student has no assessment data for this topic' : 'There are currently no assessments for this topic.'
						}
						</p>
					</div>
				</div>
		}				  	
	</div>
	)
}

							








