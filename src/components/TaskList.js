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
				<div className="row task" key={i}>
			  		<Link to={ '/tasks/' + id + '/' + i }>
						<div className="col-xs-1">
				  			<h2 className="task-number">{ i + 10 }.</h2>
						</div>
						<div className="col-xs-10">
				  			<h2 className="task-title">{ task }</h2>
						</div>
		  			</Link>
					<div className="col-xs-1">
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