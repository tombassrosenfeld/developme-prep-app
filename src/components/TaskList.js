import React from 'react';
import { Link } from "react-router-dom";
import Completed from './Completed';

export default ({id, topics, userProgress, onClickUserProgress}) => (
	<div className={ 'col-xs-12 col-md-6 tasks' }>
  		{ topics.getIn([id, 'tasks']).map( ({task}, i) => (
  			<div className="task" key={ i }>
	  			<Completed 
	  				completed={ userProgress.includes( topics.getIn([id, 'short_title']) + '.' + i)? 'complete' : null }
	  				onClick={ () => onClickUserProgress(topics.getIn([id, 'short_title']) + '.' + i) }
	  			/>
	  			<Link to={ '/tasks/' + id + '/' + i }>
	  				<h3 className="task-title" key={ i }>{ task }</h3>
	  			</Link>
	  		</div>
  		))}
	</div>
)