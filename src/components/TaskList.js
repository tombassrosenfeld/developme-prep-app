import React from 'react';
import { Link } from "react-router-dom";
import Completed from './Completed';

export default ({id, topics, userProgress, onClickUserProgress}) => (
	<div className="col-xs-12 col-sm-8 col-md-6 narrow-padding">
		<div className="taskList panel">
			<div className="row">
				<div className="col-xs-10">
					<h2 className="taskList-title">Tasks</h2> 
				</div>
				<div className="col-xs-2">
					<h2 className="taskList-title-done">Done</h2> 
				</div>
			</div>
	  		{ topics.getIn([id, 'tasks']).map( ({task}, i) => (
				<div className="row" key={i}>
					<div className="col-xs-10">
			  			<div className="task">
				  			<Link to={ '/tasks/' + id + '/' + i }>
				  				<h2 className="task-title">{ i + 1 }. { task }</h2>
				  			</Link>
				  		</div>
					</div>
					<div className="col-xs-2">
			  			<Completed 
			  				completed={ userProgress.includes( topics.getIn([id, 'short_title']) + '.' + i) }
			  				onClick={ () => onClickUserProgress(topics.getIn([id, 'short_title']) + '.' + i) }
			  			/>
					</div>
				</div>
	  		))}

		</div>
	</div>
)