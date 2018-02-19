import React from 'react';
import { Link } from "react-router-dom";
import Completed from './Completed';

export default ({students}) => (
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
					<div className="row task" key={i}>
							<div className="col-xs-4">
								<p>{student.get('name')}</p>
							</div>
						<div className="col-xs-8">
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
	</div>
)