import React from 'react';

export default ({error, message, dismissMessage}) => (
	<div 
		className={error ? "message-container message-container__red" : "message-container"}
		style={{ display: message? 'block' : 'none' }}
		onClick={ () => dismissMessage() }
	>
		<div className="col-xs-12">
			<p className="message">{ message }</p>
		</div>	
	</div>
)
