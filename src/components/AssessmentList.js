import React from 'react';
import { Link } from "react-router-dom";
import Completed from './Completed';

export default ({topic, userProgress}) => (
	<div className="panel">
		<div className="row">
			<div className="col-xs-9">
				<h2 className="panel-title">Assessments</h2> 
			</div>
			<div className="col-xs-3">
				<h2 className="panel-title status-title">Done</h2> 
			</div>
		</div>
		<div className="taskList">
		{ topic.get('assessments').size > 0 ?
	  		topic.get('assessments').map( (assessment, i) => (
				<div className="row task" key={i}>
			  		<Link to={ '/prep/topic/' + topic.get('id') + '/assessment/' + i }>
						<div className="col-xs-9">
				  			<p className="taskList-task-title">{i + 1}. { assessment.get('assessment_title') }</p>
						</div>
		  			</Link>
					<div className="col-xs-3">
			  			<Completed 
			  				completed={ userProgress.includes( topic.get('short_title') + '.assess.' + i) }
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