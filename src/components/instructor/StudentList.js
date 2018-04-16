import React from 'react';
import ProgressBar from '../ProgressBar';
import { Link } from "react-router-dom";

export default ({students, numAssessments, numTasks, cohortName, cohortID}) => {
	const totalTasks = numTasks + numAssessments,
				mailto = students.reduce((mto, student) => mto += student.get('email') + '; ' , '');

	return ( 
	<div className="panel">
		<div className="row">
			<div className="col-xs-3">
				<h2 className="panel-title">Students</h2> 
			</div>
			<div className="col-xs-9">
				<h2 className="panel-title status-title">Progress</h2> 
			</div>
		</div>
		<div className="taskList">
			{ students.size > 0 ?
		  		students.map( (student, i) => (
					<div className="row narrow-padding" key={i}>
						<div className="col-xs-3">
							<Link 
								to={'/cohort/' + cohortID + '/' + student.get('id')}
							>
								{student.get('name')}
							</Link>
						</div>
						<div className="col-xs-9">
							<ProgressBar 
								value={student.get('userProgress').size} 
								maxValue={totalTasks} 
								progressPercentage={((student.get('userProgress').size / totalTasks) * 100).toFixed(0) + '%'} 
							/>
						</div>
					</div>
		  		)) :
		  		<div className="row task">
		  			<div className="col-xs-10">
						<p className="taskList-task-title">There are currently no students in this cohort</p>
					</div>
				</div>
		  	}
		</div>
		<div className="narrow-padding hyperlink email-div">
			<div class="topics-header-icon">
				<i className="fa fa-2x fas fa-envelope" aria-hidden="true"></i>
			</div>
			<a href={'mailto:' +mailto} className="email-link">Email {cohortName} </a>
		</div>
	</div>
	);
}