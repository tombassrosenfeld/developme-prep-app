import React from 'react';
import { Link } from "react-router-dom";
import ModulesNav from "./ModulesNav";

export default ({className, userProgress, numAssessments, numTasks}) => {

	let totalTasks = numTasks + numAssessments,
	progressPercentage = ((userProgress / totalTasks) * 100).toFixed(0) + '%';

	return (
		<div className={className}>
			<div className="topics panel">
				<div className="topics-header">
					<div className="topics-header-icon"><i className="fa fa-2x fa-file-o" aria-hidden="true"></i></div>
				</div>
				<div>
					<h1 className="text-center topic-title">Fellowship Student App</h1>
	  			<p className="topic-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
	  		</div>
  		</div>
  		<div className="topics panel">
				<h2 className="text-center panel-title">Your progress so far</h2>
				<p className="text-center">Progress against all tasks and assessments</p>	 
				<div className="progress">
				  <div className="progress-bar" role="progressbar" aria-valuenow={userProgress} aria-valuemin="0" aria-valuemax={totalTasks} style={{width: progressPercentage}}>
				  	{progressPercentage}
				    <span className="sr-only">{progressPercentage} Complete</span>
				  </div>
				</div>
  		</div>
		</div>
	)
}
// Instructions on how to use the app

