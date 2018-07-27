import React from 'react';

export default ({ completed, onClick }) => (
	<div className="marker taskList-marker" onClick={ onClick }>
		{ completed? 
			<i className="fa fa-check-circle-o" aria-hidden="true"></i> 
			: 
			<i className="fa fa-circle-o" aria-hidden="true"></i> 
		}
	</div>
)