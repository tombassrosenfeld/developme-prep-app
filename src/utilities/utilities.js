import { Map, List } from "immutable";

export const preventDefault =  (e) => e.preventDefault();

// rewrite this function if the API changes 
export const modulesDataToJSON = (modulesData) => {
	console.log(modulesData);
	let formattedJSON = modulesData.map((item, i) => Map({
									id: i, 
									title: item.title.rendered, 
									short_title: item.acfs.short_title,
									description: item.acfs.description,
									tasks: item.acfs.tasks ? item.acfs.tasks : [],
									selected: 'selected',
								}));
	return List(formattedJSON);
}

// TODO: refactor design of initial state so that this gets calculated on return of user progress API call 
export const calculateTopicStatus = (userProgress, topic) => {
	let userProgressArr = userProgress.toJS();
	let tasksArr = topic.get('tasks');
	let topicKey = topic.get('short_title');
	let done = userProgressArr.filter(task => task.indexOf(topicKey) !== -1).length;
	let notDone = tasksArr.length - done;
	let isComplete = notDone <= 0;
	let topicStatus = [
		done,
		notDone,
		isComplete ]
	return topicStatus;
}

