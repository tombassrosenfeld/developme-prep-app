import React from 'react';
import ProgressBar from "./ProgressBar";
import Issues from './Issues';

export default ({className, userProgress, numAssessments, numTasks, topics, userRole}) => {

	const totalTasks = numTasks + numAssessments,
	progressPercentage = ((userProgress / totalTasks) * 100).toFixed(0) + '%';

	return (
		<div className="col-xs-12 col-sm-8 col-md-6 narrow-padding">
			<div className="topics panel">
				<div className="welcome">
					<div className="logo"></div>
					<h1 className="topic-title text-center">Coding Fellowship Student App</h1>
					<div className="welcome-banner"></div>
					
	  			<p className="topic-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
		  		</div>
	  		</div>
			
			{ userRole === 'student' ?
			<div>
				<div className="topics panel">
					<div>
						<h2 className="text-center panel-title">Your progress so far</h2>
						<ProgressBar 
							text={"Progress against all tasks and assessments. (" + userProgress +"/"+ totalTasks + ")"}
							value={userProgress} 
							maxValue={totalTasks} 
							progressPercentage={progressPercentage} 
						/>
					</div>
				</div>
				<div className="topics panel">
					<h2 className="text-center panel-title">How to use the app</h2>
					<ul className="instructions">
						<li>Use the sidebar navigation to view each topic</li>
						<li>Each topic has a number of tasks for you to complete. Be sure to take a look at the resources for each task. Mark a task as complete when you're done</li>
						<li>When you're ready, have a go at the assessments for each topic</li>
						<li>Feel free to use other resources too. The more preparation you put in, the more you will get out of the Coding Fellowship!</li>
					</ul>
				</div>
			</div>
			:
			null }
			<Issues /> 
		</div>		

	)
}
// Instructions on how to use the app

