import React from 'react';
import { Link } from "react-router-dom";

import TaskList from './TaskList';

export default ({id, moduleID, modules}) => (
	<div className={'row module'}>
		<div className={ 'col-xs-12 col-md-6' }>
	  		<h1>Module { +moduleID + 1} <small>{ modules.getIn([moduleID, 'title']) }</small></h1>
	  		<p>{ modules.getIn([moduleID, 'tasks'])[id].instructions }</p>
	  		<a href={ 'https://' + modules.getIn([moduleID, 'tasks'])[id].link } target="_blank" >
	  			<p>{ modules.getIn([moduleID, 'tasks'])[id].link }</p>
	  		</a>
	  		
		</div>

		<TaskList id={ moduleID } modules={modules} />

	</div>
)