import React from 'react';

export default ({onClick}) => (
	<button 
		className="btn btn-default btn-danger btn-cancel btn-block" 
		onClick={onClick}
	>Cancel</button>
)