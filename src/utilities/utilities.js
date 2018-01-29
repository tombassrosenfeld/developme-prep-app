import { fromJS } from "immutable";

export const preventDefault =  (e) => e.preventDefault();

// rewrite this function if the API changes 
export const modulesDataToJSON = (modulesData) => {
	let data = modulesData.map((item, i) => ({
									id: i, 
									title: item.title.rendered, 
									short_title: item.acfs.short_title,
									description: item.acfs.description,
									tasks: item.acfs.tasks ? item.acfs.tasks : [],
									assessments: item.acfs.assessment ? item.acfs.assessment : [],
									selected: 'selected',
								}));
	return fromJS(data); // make immutable
}

// export const userAssessmentDataToJSON = (assessmentData) => {
// 	let formattedJSON = {};
// 	for (var property in assessmentData) {
// 	    if (assessmentData.hasOwnProperty(property)) {
// 	        formattedJSON.property = Map({answers: List(property.answers), result: property.result});
// 	    }
// 	}
// 	console.log(Map(formattedJSON));
// 	return Map(formattedJSON);
// }

// TODO: refactor design of initial state so that this gets calculated on return of user progress API call 
export const calculateTopicStatus = (userProgress, topic) => {
	let userProgressArr = userProgress.toJS();
	let tasksArr = topic.get('tasks');
	let assessmentArr = topic.get('assessments');
	let totalTasks = tasksArr.toArray().length + assessmentArr.toArray().length;
	let topicKey = topic.get('short_title');
	let done = userProgressArr.filter(task => task.indexOf(topicKey) !== -1).length;
	let notDone = totalTasks - done;
	let isComplete = notDone <= 0;
	let topicStatus = [
		done,
		notDone,
		isComplete ]
	return topicStatus;
}

