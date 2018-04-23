import React from 'react';

export default ({onClick}) => (
	<button 
		className="btn btn-default btn-danger btn-cancel" 
		onClick={onClick}
	>Cancel</button>
)