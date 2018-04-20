import { connect } from "react-redux";
import UncompletedTasks from "../components/UncompletedTasks";


const mapStateToProps = state => {
	let userProgress = state.get('userProgress');
	let completedShortTitles = userProgress.map(el=>el.split('.')[0]); 
	let topics = state.get('topics');
	let uncompletedTopicsArray = topics.filter(topic => completedShortTitles.reduce((isComplete, shortTitle) => shortTitle !== topic.get('short_title'), false));
	console.log(uncompletedTopicsArray.toJS());
	var uncompletedTopics = uncompletedTopicsArray.slice(0, 3);
	console.log(uncompletedTopics.toJS());
	return {
		userProgress: userProgress,
	    uncompletedTopics: uncompletedTopics,
	}
}
	

export default connect(mapStateToProps)(UncompletedTasks);