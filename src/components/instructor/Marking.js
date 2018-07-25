import React from 'react';
import { List } from "immutable";
import { Link } from "react-router-dom";

export default ({marking, cohorts}) => {
	let students = List([]);
	marking.map( (student, i) => {
		let cohort = cohorts.filter((cohort) => cohort.get('name') == student.get('cohort'));
		let studentInfo = cohort.getIn([0, 'students']).filter((user) => user.get('id') == student.get('id')).get(0);
		students = students.push(studentInfo);
	});
	return (
		<div class="col-xs-12 col-sm-8 col-md-6 narrow-padding">
			<div className="panel">
				<div className="topics-header">
					<div className="topics-header-icon"><i className="fa fa-2x fas fa-users" aria-hidden="true"></i></div>
				</div>
				<h2 className="panel-title">Marking</h2> 
				{marking.size > 0 ? 
					<div>
						<p>The following students have shared code for you to review:</p>
						<div class="taskList">
							{students.map(student => (
								<div class="row narrow-padding">
									<div class="col-xs-12">
										<Link to={'/cohort/' + student.get('cohort') + '/' + student.get('id')}>
											{student.get('name')}
										</Link>
									</div>
								</div>
							))}
						</div>
					</div>
					:
					<p>You are up to date with all of your marking</p>
				}
			</div>
		</div>
	)
}
