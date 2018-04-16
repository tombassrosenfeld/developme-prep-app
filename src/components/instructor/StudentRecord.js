import React from 'react';
import ProgressBar from '../ProgressBar';
import StudentStatus from './StudentStatus';
import TopicList from '../../containers/instructor/TopicList';

export default ({student, totalTasks, userRole}) => {
	const progress = student.get('userProgress').size;
	return userRole === 'instructor' ? (
		<div className="col-xs-12 col-sm-8 col-md-6 narrow-padding">
			<div className="topics panel">
				<div className="topics-header">
					<div className="topics-header-icon"><i className="fa fa-2x fa-file" aria-hidden="true"></i></div>
				</div>
		  		<h1 className="topic-title">{ student.get('name')} - Student</h1>
		  		<ProgressBar 
		  			text={"Progress"}
		  			value={progress} 
						maxValue={totalTasks} 
						progressPercentage={(progress / totalTasks * 100).toFixed(0) + '%'} 
		  		/>
	  		<div className="narrow-padding hyperlink email-div">
				<div>
					<i className="fa fa-2x fas fa-envelope" aria-hidden="true"></i>
				</div>
				<a href={'mailto:' + student.get('email')} className="email-link">Email {student.get('name')}</a>
			</div>

		  </div>
		  <StudentStatus progress={progress} notDone={totalTasks - progress} />
		  <TopicList student={student}/>
		</div>
	) : null;
}

