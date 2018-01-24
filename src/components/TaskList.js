import React from 'react';
import { Link } from "react-router-dom";
import Completed from './Completed';

export default ({id, topics, userProgress, onClickUserProgress}) => (
	<div className="panel">
		<div className="row">
			<div className="col-xs-10">
				<h2 className="panel-title">Tasks</h2> 
			</div>
			<div className="col-xs-2">
				<h2 className="panel-title status-title">Done</h2> 
			</div>
		</div>
		<ol>
  		{ topics.getIn([id, 'tasks']).map( ({task}, i) => (
			<div className="row task" key={i}>
		  		<Link to={ '/tasks/' + id + '/' + i }>
					<div className="col-xs-10">
			  			<li className="task-info">{ task }</li>
					</div>
	  			</Link>
				<div className="col-xs-2">
		  			<Completed 
		  				completed={ userProgress.includes( topics.getIn([id, 'short_title']) + '.' + i) }
		  				onClick={ () => onClickUserProgress(topics.getIn([id, 'short_title']) + '.' + i) }
		  			/>
				</div>
			</div>
  		))}
  		</ol>
	</div>
)