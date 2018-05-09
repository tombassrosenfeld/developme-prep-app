import React from 'react';
import ProgressBar from "./ProgressBar";

export default ({userProgress, numAssessments, numTasks, topics}) => {

	const totalTasks = numTasks + numAssessments,
	progressPercentage = ((userProgress.size / totalTasks) * 100).toFixed(0) + '%';

	return (
		<div>

		{ userProgress.size > 0 ?
			<div className="topics panel">
				<div>
					<h2 className="text-center panel-title">Your progress so far</h2>
					<ProgressBar 
						text={"Progress against all tasks and assessments. (" + userProgress.size +"/"+ totalTasks + ")"}
						value={userProgress.size} 
						maxValue={totalTasks} 
						progressPercentage={progressPercentage} 
					/>
				</div>

			</div>
			:
			<div className="topics panel">
				<h2 className="text-center panel-title">How to use the app</h2>
				<ul className="instructions">
					<li>Use the sidebar navigation to view each topic</li>
					<li>Each topic has a number of tasks for you to complete. Be sure to take a look at the resources for each task. Mark a task as complete when you&apos;re done</li>
					<li>When you&apos;re ready, have a go at the assessments for each topic</li>
					<li>Feel free to use other resources too. The more preparation you put in, the more you will get out of the Coding Fellowship!</li>
				</ul>
			</div>
		}	
		</div> 
		
	)
}