import React from 'react';
import { Link } from "react-router-dom";
import Completed from './Completed';

export default ({topic, userProgress, onClickUserProgress}) => {	
	let completedCount = 0;
	return <div className="panel">
		<div className="row">
			<div className="col-xs-9 col-sm-10">
				<h2 className="panel-title">Tasks</h2> 
			</div>
			<div className="col-xs-3 col-sm-2">
				<h2 className="panel-title status-title">Done</h2> 
			</div>
			<div className="col-xs-12">
				<p><i className="fa fa-info-circle task-info" aria-hidden="true"></i> As you complete a task mark it as done on the right, this will unlock further tasks for you to complete.</p> 
			</div>
		</div>
		<div className="taskList">
			{ topic.get('tasks').size > 0 ?
		  		topic.get('tasks').map( (task, i) => { 
		  			const isTaskComplete = userProgress.includes( topic.get('short_title') + '.' + i);
		  			if(isTaskComplete) {
		  				completedCount += 1;
		  			}
		  			return isTaskComplete || completedCount === i || (i > completedCount && isTaskComplete) ? (
					<div className="row task" key={i}>
				  		<Link to={ '/prep/topic/' + topic.get('id') + '/task/' + i }>
							<div className="col-xs-9 col-sm-10">
					  			<p className="taskList-task-title">{i + 1}. { task.get('task') }
					  			</p>

							</div>
			  			</Link>
						<div className="col-xs-3 col-sm-2">
				  			<Completed 
				  				completed={ userProgress.includes( topic.get('short_title') + '.' + i) }
				  				onClick={ () => onClickUserProgress( topic.get('short_title') + '.' + i) }
				  			/>
						</div>
					</div>
		  		) : null}) :
		  		<div className="row task">
		  			<div className="col-xs-10">
						<p className="taskList-task-title">There are currently no tasks for this topic</p>
					</div>
				</div>
		  	}
		</div>
	</div>
}