import React from 'react';

export default ({title, i, onClick, totalTasks, topicProgress}) => {
	return (
		<div className="row task student-topic-status">
			<div className="col-xs-10">
				<p 
					className="taskList-task-title"
					onClick={onClick}
				>
				<strong>{i + 1}.</strong> {title}
				</p>
			</div>
			<div className="col-xs-2 icons">
				{ totalTasks === topicProgress ? 
					<i className="fa fa-check-circle-o" aria-hidden="true"></i> :
					<i className="fa fa-times-circle-o" aria-hidden="true"></i> 
				}
			</div>
		</div>
	)
}