import React from 'react';

export default ({number}) => (
	<div className="row">
		<div className={ 'col-xs-12 module module-' + number }>
	  		<h1>Module { number }</h1>
		</div>
	</div>
)