import React from 'react';

export default ({errors, dismissErrors}) => (
	<div 
		className="row error-message-container" 
		style={{ display: errors? 'block' : 'none' }}
		onClick={ () => dismissErrors() }
	>
		<div className="col-xs-12">
			<p className="error-message">{ errors }</p>
		</div>	
	</div>
)
