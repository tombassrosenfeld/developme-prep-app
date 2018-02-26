import React from 'react';
import AssessmentListItem from './AssessmentListItem';
import SelectedTopicHeader from './SelectedTopicHeader';

export default ({selectedTopic, selectedAssessment, student, onClick}) => (
	<div className="panel selected-topic">
		<SelectedTopicHeader title={selectedTopic.get('short_title')}/>
		{ selectedTopic.get('assessments').size > 0 ?
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
						<p className="taskList-task-title">There are currently no assessments for this topic.</p>
					</div>
				</div>
		}				  	
	</div>
)







