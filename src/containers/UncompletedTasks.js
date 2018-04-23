import { connect } from "react-redux";
import UncompletedTasks from "../components/UncompletedTasks";


const mapStateToProps = state => {
	let userProgress = state.get('userProgress');
	let completedShortTitles = userProgress.map(el=>el.split('.')[0]); 
	let topics = state.get('topics');

	let tasks = topics.map(topic => topic.get('tasks').size);
	let assessments = topics.map(topic => topic.get('assessments').size);
	let lengthArray = tasks.map((num, i)=> num + assessments.get(i));

	// OBJECT FOR EACH TOPIC AND ITS LENGTH OF TASKS+ASSESSMENTS
	let titles = topics.map(topic => topic.get('short_title'));
	let lengthObject = {};
	titles.forEach((key,i)=>lengthObject[key] = lengthArray.get(i));

	// OBJECT FOR WHICH TOPICS AND HOW MANY OF ITS TASKS+ASSESSMENTS WAS COMPLETED
	let completedObject = completedShortTitles.reduce((obj, title) => {
		obj[title] = obj[title] + 1 || 1;
		return obj;
	}, {});

	// OBJECT FOR TOPICS WHERE THE USER HAS NOT COMPLETED ALL ITS TASKS+ASSESSMENTS
	let completedAllTasksObject = (obj1, obj2) => {
		return Object.keys(obj1).filter(function(key){
			return obj1[key] !== obj2[key];
		});
	}
	let uncompletedTopicsArray = completedAllTasksObject(lengthObject, completedObject);

	// TOPICS ARE FILTERED BASED ON TOPICS THAT AREN'T COMPLETED
	const uncompletedTopics = topics.filter(topic => uncompletedTopicsArray.find(incompleteTopic => topic.get('short_title') === incompleteTopic));

	// LIMITING THE NUMBER OF TOPICS SHOWN TO 3
	const shortenedUncompletedTopicsArray = uncompletedTopics.slice(0, 2);

	return {
		userProgress: userProgress,
	    uncompletedTopics: shortenedUncompletedTopicsArray,
	}
}
	

export default connect(mapStateToProps)(UncompletedTasks);