import React from 'react';
import AssessmentListItem from './AssessmentListItem';

export default ({student, totalTasks}) => (
	<div className="panel">
		<div className="row">
			<div className="col-xs-12">
				<h2 className="panel-title">{selectedTopic.get('short_title')}</h2> 
			</div>
			<div className="col-xs-12">
				<p className="topic-description">Assessments for this topic:</p>
			</div>
		</div>
		{ selectedTopic.get('assessments').size > 0 ?
	  		selectedTopic.get('assessments').map( (assessment, i) => <AssessmentListItem 
	  			key={i} i={i} 
	  			assessment={assessment} 
	  			onClick={this.changeAssessment} 
	  			questions={selectedAssessment ? selectedAssessment.get('questions') : null}
	  			topicTitle={selectedTopic.get('short_title')}
	  			studentAssessmentData={this.props.student.get('userAssessmentData')}
	  		/>) :
	  		<div className="row task">
	  			<div className="col-xs-10">
						<p className="taskList-task-title">There are currently no assessments for this topic.</p>
					</div>
				</div>
		}				  	
	</div>
)







