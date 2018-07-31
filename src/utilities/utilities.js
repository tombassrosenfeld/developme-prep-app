import { fromJS } from "immutable";
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
		text: username + ' just added some code. Please login and go to the Marking section to review it.',
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
	    .then(response => response.json())
	};

	return postData('https://hooks.slack.com/services/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', message)
		.then(data => console.log(data))
}	

