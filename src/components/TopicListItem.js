import React from 'react';

export default ({title, i, onClick}) => (
	<div className="row task">
		<div className="col-xs-10">
  		<p 
  			className="taskList-task-title"
  			onClick={onClick}
  		>
  		{i + 1}. {title}
  		</p>
		</div>
		<div className="col-xs-2">
		</div>
	</div>
)