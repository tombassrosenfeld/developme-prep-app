import React from 'react';

export default ({message, dismissMessage}) => (
	<div 
		className="message-container" 
		style={{ display: message? 'block' : 'none' }}
		onClick={ () => dismissMessage() }
	>
		<div className="col-xs-12">
			<p className="message">{ message }</p>
		</div>	
	</div>
)
