import React from 'react';
import { Link } from "react-router-dom";

export default ({id, modules}) => (
	<div className={'row module'}>
		<div className={ 'col-xs-12 col-md-6' }>
	  		<h1>Module { +id + 1} <small>{ modules.getIn([id, 'title']) }</small></h1>
	  		<p>{ modules.getIn([id, 'description']) }</p>
		</div>
		<div className={ 'col-xs-12 col-md-6 tasks' }>
	  		{ modules.getIn([id, 'tasks']).map( ({task}, i) => (
	  			<Link key={ i } to={ '/tasks/' + id + '/' + i }>
	  				<h3 className="task" key={ i }>{ task }</h3>
	  			</Link>
	  		))}
		</div>
	</div>
)