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
  		{ topics.getIn([id, 'tasks']).map( ({task}, i) => (
			<div className="row task" key={i}>
		  		<Link to={ '/topics/' + id + '/' + i }>
					<div className="col-xs-10">
			  			<p className="task-info">{ task }</p>
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
	</div>
)