import React from 'react';
import ProgressBar from '../ProgressBar';
import StudentStatus from '../StudentStatus';
import TopicList from '../../containers/instructor/TopicList';

export default ({student, totalTasks}) => {
	const progress = student.get('userProgress').size;
	return (
		<div className="col-xs-12 col-sm-8 col-md-6 narrow-padding">
			<div className="topics panel">
				<div className="topics-header">
					<div className="topics-header-icon"><i className="fa fa-2x fa-file-o" aria-hidden="true"></i></div>
				</div>
		  		<h1 className="topic-title">{ student.get('name')} - Student</h1>
		  		<ProgressBar 
		  			text={"Progress"}
		  			value={progress} 
						maxValue={totalTasks} 
						progressPercentage={(progress / totalTasks * 100).toFixed(0) + '%'} 
		  		/>
	  		<div className="narrow-padding hyperlink">
					<a href={'mailto:' + student.get('email')}>Email {student.get('name')}</a>
		  	</div>
		  </div>
		  <StudentStatus progress={progress} notDone={totalTasks - progress} />
		  <TopicList student={student}/>
		</div>
	)
}

