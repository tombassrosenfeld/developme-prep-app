import React from 'react';
import { Link } from "react-router-dom";
import Completed from './Completed';

export default ({id, topics, userProgress}) => (
	<div className="panel">
		<div className="row">
			<div className="col-xs-10">
				<h2 className="panel-title">Assessments</h2> 
			</div>
			<div className="col-xs-2">
				<h2 className="panel-title status-title">Done</h2> 
			</div>
		</div>
		<div className="taskList">
		{ topics.getIn([id, 'assessments']).length > 0 ?
	  		topics.getIn([id, 'assessments']).map( (assessment, i) => (
				<div className="row task" key={i}>
			  		<Link to={ '/prep/topic/' + id + '/assessment/' + i }>
						<div className="col-xs-10">
				  			<p className="taskList-task-title">{i + 1}. { assessment.assessment_title }</p>
						</div>
		  			</Link>
					<div className="col-xs-2">
			  			<Completed 
			  				completed={ userProgress.includes( topics.getIn([id, 'short_title']) + '.assess.' + i) }
			  			/>
					</div>
				</div>
	  		)) :
	  		<div className="row task">
	  			<div className="col-xs-10">
					<p className="taskList-task-title">There are currently no assessments for this topic</p>
				</div>
			</div>
	  	}
		</div>
	</div>
)