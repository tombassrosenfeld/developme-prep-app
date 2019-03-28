import initial from "./initial";
import {List, fromJS} from "immutable";

import { ONFORMELEMENTCHANGE, UPDATE_ERRORS, UPDATE_MESSAGE, LOGOUT, SET_REGISTERING, SET_ACTIVE_MODULE, CANCEL_REGISTRATION, ONCLICK_ICON, DELETE_ASSESSMENT_DATA, GET_ARCHIVED_ASSESSMENT_DATA, UPDATEISSUE, UPDATEISSUEFALSE, UPDATESHAREDCODE, SET_USER_REGISTERED } from "../data/actions";
import { USER_DATA, UPDATE_CREDENTIALS, USER_PROGRESS, USER_ASSESSMENT_DATA, USER_SHARED_CODE, SHARED_CODE_FEEDBACK, SET_STUDENTS, TOPICS_DATA} from "../data/actions_API";

const updateUsernameAndPassword = (state, { id, val }) => {
	return state.setIn(['user', id], val);
}

// FROM API
const updateCredentials = (state, { data }) => {
	return state.setIn(['user', 'token'], data.token)
				.setIn(['user', 'user_display_name'], data.user_display_name)
				.setIn(['user', 'user_email'], data.user_email)
				.set('loggedIn', true)
				.set('userRegistered', false);
}

const updateErrors = (state, { errorMessage }) => {
	return state.set('errors', errorMessage);
}

const updateMessage = (state, { message }) => {
	return state.set('message', message);
}

const updateUser = (state, { data }) => {
	let user = data;
	const cohort = user.cohort ? user.cohort : 'Coding Fellowship';
	return state.set('lastActive', new Date().getTime())
				.setIn(['user', 'id'], user.id)
				.setIn(['user', 'username'], user.username) // update username with the value provided by api
				.setIn(['user', 'roles'], user.roles)
				.setIn(['user', 'cohort'], cohort); // update roles with the value provided by api
}

const updateUserProgress = (state, { data }) => {
	return state.set('lastActive', new Date().getTime())
			.set('userProgress', data);
}

const updateUserAssessmentData = (state, { data }) => {
	return state.set('lastActive', new Date().getTime())
			.set('assessmentData', data);
}

// From API
const updateUserSharedCode = (state, {data}) => {
	return state.set('lastActive', new Date().getTime())
			.set('sharedCode', data);
}


const updateStudentSharedCodeFeedback = (state, {data, cohort, studentID}) => {
	let cohorts = state.get('cohorts');
	let cohortIndex = cohorts.toJS().findIndex(co => co.name === cohort);
	let studentIndex = cohorts.get(cohortIndex).get('students').toJS().findIndex(student => student.id === studentID);
	cohorts = cohorts.setIn([cohortIndex, 'students', studentIndex, 'userSharedCode'], data);
	let studentsToMark = state.get('studentsToMark');
	studentsToMark = studentsToMark.filter(student => student.get('id') !== studentID);
	return state.set('cohorts', cohorts)
				.set('lastActive', new Date().getTime())
				.set('studentsToMark', studentsToMark);
}

const setStudents = (state, { data }) => {
	let cohorts = orderByCohort(data);
	console.log(cohorts);
	let studentsToMark = searchForMarking(data);
	return state.set('cohorts', fromJS(cohorts))
				.set('cohortsLoaded', true)
				.set('lastActive', new Date().getTime())
				.set('studentsToMark', studentsToMark);
}

const searchForMarking = (data) => {
	let studentsWithMarking = List([]);
	data.map((student) => {
		// if student has any item pending, add their id to the list
		let hasMarking = false;
		let sharedCode = student.get('userSharedCode');
		sharedCode.map((topic) => topic.map((task) => {
			if(task) {
				return hasMarking = task.get('pending') ? true : hasMarking
			};
		}));
		return studentsWithMarking = hasMarking ? studentsWithMarking.push(student) : studentsWithMarking;
	});
	return studentsWithMarking;
}

const orderByCohort = (data) => {
	//List of unique cohort names
	let cohorts = [];

	//If cohort is already in cohorts array then do not add to arr
	data.map(student => cohorts.find(cohort => cohort === student.get('cohort')) ? null : cohorts.push(student.get('cohort')));

	// Convert each cohort to an object to pass into state.
	cohorts = cohorts.map(cohort => ({
		name: cohort,
		students: [],
		selected: false
	}));

	//Add students to their cohort
	cohorts = cohorts.map(cohort => {
		data.map(student => cohort.name === student.get('cohort') ? cohort.students.push(student.toJS()) : student);
		return cohort;
	});

	return cohorts;
}

const topicsData = (state, { data }) => {

	const topicsWithDuration = data.map(topic => {
		let totalDuration = 0;
		totalDuration += topic.get('tasks').reduce((total, task) => {
			const resources = task.get('resources');
			if(resources) {
				return total + resources.reduce((total, resource) => resource.get('duration') ? total + +resource.get('duration') : total + 0, 0);
			}
			return total + 0;
		}, 0);
		return topic.set('duration', totalDuration);
	}, 0);

	return state.set('lastActive', new Date().getTime())
			.set('topics', topicsWithDuration).set('isLoaded', true);
}

const onClickIcon = (state, { id }) => {
	return state.set('lastActive', new Date().getTime())
		.set('topics', state.get('topics').map((topic) => topic.set('selected', false)))
		.setIn(['topics', id, 'selected'], true);
}

const logOut = (state) => {
	return state;
}

const setRegistering = (state) => {
	return state.set('lastActive', new Date().getTime())
			.set('isRegistering', true).set('userRegistered', false);
}

const setUserRegistered = (state, {data}) => {
	return state.set('lastActive', new Date().getTime())
			.set('isRegistering', false).set('userRegistered', true);
}

const cancelRegistration = (state) => {
	return state.set('lastActive', new Date().getTime())
			.set('isRegistering', false);
}

const deleteAssessmentData = (state, {topicTitle, assessmentID, assessment}) => {
	const answers = state.getIn(['assessmentData', topicTitle, assessmentID, 'answers']);
	const answersRemoved = answers.map(answer => null);
	return state.set('lastActive', new Date().getTime())
			.setIn(['assessmentData', topicTitle, assessmentID, 'answers'], answersRemoved).set('archivedAssessmentData', answers);
}

const getArchivedAssessmentData = (state, {topicTitle, assessmentID, assessment}) => {
	return state.set('lastActive', new Date().getTime())
			.setIn(['assessmentData', topicTitle, assessmentID, 'answers'], state.get('archivedAssessmentData'));
}

const updateIssue = (state) => {
	return state.set('lastActive', new Date().getTime())
			.set('issue', true);
}
const updateIssueFalse = (state) => {
	return state.set('lastActive', new Date().getTime())
			.set('issue', false);
}

const updateSharedCode = (state, action) => {
	let tasks = state.getIn(['sharedCode', action.topicTitle]) ? state.getIn(['sharedCode', action.topicTitle]) : List([]);
	tasks = tasks.setIn([action.taskID, 'code'], action.code);
	return state.set('lastActive', new Date().getTime())
			.setIn(['sharedCode', action.topicTitle], tasks);
}

const setActiveModule = (state, {i}) => {
	return state.set('lastActive', new Date().getTime())
			.set('activeModule', i);
}

const expireUserSession = () => {
	return logOut(initial).set('errors', 'Your session has expired, please log in again.');
}

export default (state = initial, action) => {
	const isExpiredSession = new Date(new Date().getTime() - state.get('lastActive')).getMinutes() >= 60;
	if(state.get('loggedIn') && state.get('lastActive') && isExpiredSession) {
		return expireUserSession();
	}
	switch (action.type) {
		case ONFORMELEMENTCHANGE: return updateUsernameAndPassword(state, action);
		case UPDATE_CREDENTIALS: return updateCredentials(state, action);
		case UPDATE_ERRORS: return updateErrors(state, action);
		case UPDATE_MESSAGE: return updateMessage(state, action);
		case USER_DATA: return updateUser(state, action);
		case USER_PROGRESS: return updateUserProgress(state, action);
		case USER_ASSESSMENT_DATA: return updateUserAssessmentData(state, action);
		case USER_SHARED_CODE: return updateUserSharedCode(state, action);
		case SHARED_CODE_FEEDBACK: return updateStudentSharedCodeFeedback(state, action);
		case DELETE_ASSESSMENT_DATA: return deleteAssessmentData(state, action);
		case GET_ARCHIVED_ASSESSMENT_DATA: return getArchivedAssessmentData(state, action);
		case SET_STUDENTS: return setStudents(state, action);
		case TOPICS_DATA: return topicsData(state, action);
		case ONCLICK_ICON: return onClickIcon(state, action);
		case LOGOUT: return logOut(initial);
		case CANCEL_REGISTRATION: return cancelRegistration(state);
		case UPDATEISSUE: return updateIssue(state);
		case UPDATEISSUEFALSE: return updateIssueFalse(state);
		case UPDATESHAREDCODE: return updateSharedCode(state, action);
		case SET_REGISTERING: return setRegistering(state);
		case SET_USER_REGISTERED: return setUserRegistered(state, action);
		case SET_ACTIVE_MODULE: return setActiveModule(state, action);
		default: return state;
	}
};