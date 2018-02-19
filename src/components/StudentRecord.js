import React from 'react';
import AssessmentList from '../containers/AssessmentList';
import ProgressBar from '../components/ProgressBar';

export default ({student, totalTasks}) => (
	<div className="col-xs-12 col-sm-8 col-md-6 narrow-padding">
		<div className="topics panel">
			<div className="topics-header">
				<div className="topics-header-icon"><i className="fa fa-2x fa-file-o" aria-hidden="true"></i></div>
			</div>
	  		<h1 className="topic-title">{ 'Student: ' + student.get('name') }</h1>
	  		<ProgressBar 
	  			text={"Progress"}
	  			value={student.get('progress').size} 
					maxValue={totalTasks} 
					progressPercentage={(student.get('progress').size / totalTasks * 100).toFixed(0) + '%'} 
	  		/>
	  </div>
	  <div className="panel narrow-padding">
	  </div>
	</div>
)

