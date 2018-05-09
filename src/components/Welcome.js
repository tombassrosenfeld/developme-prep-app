import React from 'react';
import StudentFrontPage from './StudentFrontPage';


export default ({className, userProgress, numAssessments, numTasks, topics, userRole}) => {

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
			<StudentFrontPage
				topics = {topics}
				userProgress = {userProgress}
				numAssessments = {numAssessments}
				numTasks = {numTasks}
			/>
			:
			null }
		</div>
	)
}
// Instructions on how to use the app

