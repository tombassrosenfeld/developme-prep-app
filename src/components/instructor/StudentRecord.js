import React from 'react';
import ProgressBar from '../ProgressBar';
import StudentStatus from './StudentStatus';
import TopicList from '../../containers/instructor/TopicList';
import StudentMarking from '../../containers/instructor/StudentMarking';

export default ({student, totalTasks, userRole}) => {
	const progress = student.get('userProgress').size;
	return userRole === 'instructor' ? (
		<div className="col-xs-12 col-sm-8 col-md-6 narrow-padding student">
			<div className="student-header topics panel col-xs-12">
				<div className="topics-header">
					<div className="topics-header-icon"><i className="fa fa-2x fa-file" aria-hidden="true"></i></div>
				</div>
		  		<h1 className="topic-title student-title">{ student.get('name')}</h1>
		  		<div className="col-xs-12">
			  		<ProgressBar 
			  			text={"Progress"}
			  			value={progress} 
						maxValue={totalTasks} 
						progressPercentage={(progress / totalTasks * 100).toFixed(0) + '%'} 
			  		/>
		  		</div>
	  		<div className="hyperlink email-div col-xs-12">
				<a href={'mailto:' + student.get('email')} className="email-link btn btn-email btn-block">Email {student.get('name')} <i className="fa fa-2x fas fa-envelope" aria-hidden="true"></i></a>
			</div>

		  </div>
		  <StudentStatus progress={progress} notDone={totalTasks - progress} />
		  <TopicList student={student}/>
		  <StudentMarking student={student}/>
		</div>
	) : null;
}

