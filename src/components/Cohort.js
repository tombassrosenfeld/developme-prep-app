import React from 'react';
import StudentList from '../containers/StudentList';

export default ({cohort, id}) => (
	<div className="col-xs-12 col-sm-8 col-md-6 narrow-padding">
		<div className="topics panel">
			<div className="topics-header">
				<div className="topics-header-icon"><i className="fa fa-2x fa-file-o" aria-hidden="true"></i></div>
			</div>
	  		<h1 className="topic-title">{ cohort.get('name') }</h1>
	  		<p className="topic-description">{ cohort.getIn([id, 'description']) }</p>
	  	</div>
	  	<StudentList 
	  		cohortID={id}
	  		cohortName={cohort.get('name')} 
	  		students={cohort.get('students')} 
	  	/>
	</div>
)