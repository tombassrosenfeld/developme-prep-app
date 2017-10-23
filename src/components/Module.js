import React from 'react';

export default ({id, modules}) => (
	<div className={'row module'}>
		<div className={ 'col-xs-12 col-md-6' }>
	  		<h1>Module { +id + 1} <small>{ modules.getIn([id, 'title']) }</small></h1>
	  		<p>{ modules.getIn([id, 'description']) }</p>
		</div>
		<div className={ 'col-xs-12 col-md-6' }>
	  		<h1><small>Tasks</small></h1>
	  		{ modules.getIn([id, 'tasks']).map( ({task, instructions, link}, i) => (
	  			<h3 className="task" key={ i }>{ task }</h3>
	  		))}

		</div>
	</div>
)