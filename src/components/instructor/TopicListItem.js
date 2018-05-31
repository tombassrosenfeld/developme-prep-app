import React from 'react';
import Completed from '../Completed';

export default ({title, i, onClick, totalTasks, topicProgress}) => {
	return (
		<div className="row task">
			<div className="col-xs-10">
				<p 
					className="taskList-task-title"
					onClick={onClick}
				>
				<strong>{i + 1}.</strong> {title}
				</p>
			</div>
			<div className="col-xs-2">
				<Completed completed={totalTasks === topicProgress} />
			</div>
		</div>
	)
}