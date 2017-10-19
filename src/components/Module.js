import React from 'react';

export default ({id, modules}) => (
	<div className="row">
		<div className={ 'col-xs-12 module module-' + id }>
	  		<h1>Module { id } <small>{ modules.getIn([id, 'title']) }</small></h1>
		</div>
	</div>
)