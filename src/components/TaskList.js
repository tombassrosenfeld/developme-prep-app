import React from 'react';
import { Link } from "react-router-dom";
import Completed from './Completed';

export default ({topic, userProgress, onClickUserProgress}) => (
	<div className="panel">
		<div className="row">
			<div className="col-xs-9">
				<h2 className="panel-title">Tasks</h2> 
			</div>
			<div className="col-xs-3">
				<h2 className="panel-title status-title">Done</h2> 
			</div>
		</div>
		<div className="taskList">
			{ topic.get('tasks').size > 0 ?
		  		topic.get('tasks').map( (task, i) => (
					<div className="row task" key={i}>
				  		<Link to={ '/prep/topic/' + topic.get('id') + '/task/' + i }>
							<div className="col-xs-9">
					  			<p className="taskList-task-title">{i + 1}. { task.get('task') }
					  			</p>

							</div>
			  			</Link>
						<div className="col-xs-3">
				  			<Completed 
				  				completed={ userProgress.includes( topic.get('short_title') + '.' + i) }
				  				onClick={ () => onClickUserProgress( topic.get('short_title') + '.' + i) }
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