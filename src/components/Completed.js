import React from 'react';

export default ({ completed, onClick }) => (
	<div className="taskList marker" onClick={ onClick }>
		{ completed? <i className="fa fa-check-circle-o" aria-hidden="true"></i> : <i className="fa fa-times-circle-o" aria-hidden="true"></i> }
	</div>
)