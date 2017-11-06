import React from 'react';
import { Link } from "react-router-dom";

export default ({id, modules, userProgress}) => (
	<div className={ 'col-xs-12 col-md-6 tasks' }>
  		{ modules.getIn([id, 'tasks']).map( ({task}, i) => (
  			<Link key={ i } to={ '/tasks/' + id + '/' + i }>
  				<h3 className="task" key={ i }>{ task }</h3>
  			</Link>
  		))}
	</div>
)