import React from 'react';
import ProgressBar from "./ProgressBar";

export default ({className, userProgress, numAssessments, numTasks, topics, userRole}) => {

	const totalTasks = numTasks + numAssessments,
	progressPercentage = ((userProgress / totalTasks) * 100).toFixed(0) + '%';

	return (
		<div className="col-xs-12 col-sm-8 col-md-6 narrow-padding">
			<div className="topics panel">
				<div className="welcome">
					<div className="logo"></div>
					<h1 className="topic-title text-center">Coding Fellowship Student App</h1>
					<div className="welcome-banner">
					</div>
				{ userRole === 'student' ?
				<p className="topic-description"> Congratulations on your decision to join this 12 week intensive Coding Fellowship! It will be fully immersive and thoroughly challenging, but extremely rewarding.  In order for you to get the most out of the course, we have prepared this precourse work for you to complete prior to the start of the course.  It is worth noting that the students who have done the best on the course were the ones who put in the most effort into their preparation.  See you soon! 
				</p>	
	  			: <p className="topic-description">The cohorts are listed in the dropdown menu.  Click on the specific cohort to see the list of students.  You may see the student's progress on their tasks and assessments by clicking on the individual student. </p>
	  			}
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
		</div>
	)
}
// Instructions on how to use the app

