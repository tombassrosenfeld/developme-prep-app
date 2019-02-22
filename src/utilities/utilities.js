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

export const getQuestionFromTitleAndId = (title, id, topics) => {
	let topic = topics.toJS().find((topic) => topic.short_title === title);
	return topic.tasks[id];
}

export const hasNewFeedback = (topics, sharedCode) => {
	let hasNewFeedback = false;
	topics.map(topic => {
		sharedCode.get(topic.get('short_title')) ? 
			sharedCode.get(topic.get('short_title')).map(task => task ? 
				hasNewFeedback = task.get('newFeedback') ? true : hasNewFeedback 
				: null
			)
		: null;
	});
	return hasNewFeedback;
}

export const sendSlackNotification = (username) => {
	const message = {
		username: 'Develop Me App',
		text: username + ' just added some code. Please login and go to the Marking section to review it.',
		icon_emoji: ':computer:'
	}

	const postData = (url, data) => {
	    return fetch(url, {
	        method: "POST",
	        mode: "cors",
	        cache: "no-cache",
	        credentials: "same-origin",
	        redirect: "follow",
	        referrer: "no-referrer",
	        body: JSON.stringify(data),
	    })
	    .then(response => response)
	};
	let slackToken = process.env.SLACK_TOKEN ? process.env.SLACK_TOKEN : process.env.REACT_APP_SLACK_TOKEN;

	return postData(`https://hooks.slack.com/services/TB2USJTQX/BBZEQ6V25/${slackToken}`, message)
		.then(data => console.log(data))
}	
