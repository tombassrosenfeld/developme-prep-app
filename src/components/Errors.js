import React from 'react';

export default ({errors, dismissErrors}) => (
	<div 
		className="message-container message-container__red" 
		style={{ display: errors? 'block' : 'none' }}
		onClick={ () => dismissErrors() }
	>
		<div className="col-xs-12">
			<p className="message">{ errors }</p>
		</div>	
	</div>
)
