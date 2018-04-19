import React from 'react';
import ProgressBar from "./ProgressBar";
import StudentFrontPage from './StudentFrontPage';


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
	  			<p className="topic-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
	  		</div>
  		</div>
			{ userRole === 'student' ?
			<StudentFrontPage
				topics = {topics}
				userProgress = {userProgress}
				numAssessments = {numAssessments}
				numTasks = {numTasks}
			topics = {topics}
			/>
			:
			null }
		</div>
	)
}
// Instructions on how to use the app

