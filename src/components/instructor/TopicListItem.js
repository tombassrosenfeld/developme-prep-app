import React from 'react';
import Completed from '../Completed';

export default ({title, i, onClick, totalTasks, topicProgress, hasMarking}) => (
	<div className="row task">
		<div className="col-xs-9">
			<p className="taskList-task-title" onClick={onClick}>
				<strong>{i + 1}.</strong> {title + ' '} 
				{hasMarking ? <span className="marking-notice">*marking</span> : null}
			</p>
		</div>
		<div className="col-xs-3">
			<Completed completed={totalTasks === topicProgress} />
		</div>
	</div>
)