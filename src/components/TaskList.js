import React from 'react';
import { Link } from "react-router-dom";
import Completed from './Completed';

export default ({id, topics, userProgress, onClickUserProgress}) => (
	<div className="panel">
		<div className="row">
			<div className="col-xs-10">
				<h2 className="panel-title">Tasks</h2> 
			</div>
			<div className="col-xs-2">
				<h2 className="panel-title status-title">Done</h2> 
			</div>
		</div>
		<div className="taskList">
			{ topics.getIn([id, 'tasks']).size > 0 ?
		  		topics.getIn([id, 'tasks']).map( (task, i) => (
					<div className="row task" key={i}>
				  		<Link to={ '/prep/topic/' + id + '/task/' + i }>
							<div className="col-xs-10">
					  			<p className="taskList-task-title">{i + 1}. { task.get('task') }</p>
							</div>
			  			</Link>
						<div className="col-xs-2">
				  			<Completed 
				  				completed={ userProgress.includes( topics.getIn([id, 'short_title']) + '.' + i) }
				  				onClick={ () => onClickUserProgress( topics.getIn([id, 'short_title']) + '.' + i) }
				  			/>
						</div>
					</div>
		  		)) :
		  		<div className="row task">
		  			<div className="col-xs-10">
						<p className="taskList-task-title">There are currently no tasks for this topic</p>
					</div>
				</div>
		  	}
		</div>
	</div>
)