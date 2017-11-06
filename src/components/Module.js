import React from 'react';

import TaskList from './TaskList';

export default ({id, modules}) => (
	<div className={'row module'}>
		<div className={ 'col-xs-12 col-md-6' }>
	  		<h1>Module { +id + 1} <small>{ modules.getIn([id, 'title']) }</small></h1>
	  		<p>{ modules.getIn([id, 'description']) }</p>
		</div>
		<TaskList id={ id } modules={modules} />
	</div>
)