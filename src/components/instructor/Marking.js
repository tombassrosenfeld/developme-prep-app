import React from 'react';
import { Link } from "react-router-dom";

export default ({studentsToMark}) => (
	<div className="col-xs-12 col-sm-8 col-md-6 narrow-padding">
		<div className="panel">
			<div className="topics-header">
				<div className="topics-header-icon"><i className="fa fa-2x fas fa-users" aria-hidden="true"></i></div>
			</div>
			<h2 className="panel-title">Marking</h2> 
			{studentsToMark.size > 0 ? 
				<div>
					<p>The following students have shared code for you to review:</p>
					<div className="taskList">
						{studentsToMark.map((student, i) => (
							<div key={i} className="row narrow-padding">
								<div className="col-xs-12">
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
