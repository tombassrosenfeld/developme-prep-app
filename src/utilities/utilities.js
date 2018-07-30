import { fromJS } from "immutable";
import { Events, scroller } from 'react-scroll';

export const preventDefault =  (e) => e.preventDefault();

// rewrite this function if the API changes 
export const processTopicsData = (modulesData) => {
	let data = modulesData.map((item, i) => ({
									id: i, 
									title: item.title.rendered, 
									order: item.acfs.topic_order,
									short_title: item.acfs.short_title,
									description: item.acfs.description,
									tasks: item.acfs.tasks ? item.acfs.tasks : [],
									assessments: item.acfs.assessment ? item.acfs.assessment : [],
									selected: 'selected',
								}));
	return fromJS(data); // make immutable
}

// TODO: refactor design of initial state so that this gets calculated on return of user progress API call 
export const calculateTopicStatus = (userProgress, topic) => {
	let tasksArr = topic.get('tasks');
	let assessmentArr = topic.get('assessments');
	let totalTasks = tasksArr.size + assessmentArr.size;
	let topicKey = topic.get('short_title');
	let done = userProgress.filter(task => task.indexOf(topicKey) !== -1).size;
	let notDone = totalTasks - done;
	let isComplete = notDone <= 0;
	let topicStatus = [
		done,
		notDone,
		isComplete ]
	return topicStatus;
}

//Returns if student or instructor
export const getUserRole = (rolesArr) => rolesArr.reduce((role, r) => role += r === 'student' || r === 'instructor' ? r : '', '');

export const startScrollEvents = () => {
	Events.scrollEvent.register('begin');
	Events.scrollEvent.register('end');
}

export const terminateScrollEvents = () => {
	Events.scrollEvent.remove('begin');
	Events.scrollEvent.remove('end');
}

export const scrollWithContainer = container => {
	let goToContainer = new Promise((resolve, reject) => {

		Events.scrollEvent.register('end', () => {
			resolve();
			Events.scrollEvent.remove('end');
		});

		scroller.scrollTo(container, {
			duration: 500,
			delay: 0,
			smooth: 'easeInOutQuart'
		});

	});
	return goToContainer;
}