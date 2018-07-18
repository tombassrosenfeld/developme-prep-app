import initial from "./initial";
import {fromJS} from "immutable";

import { ONFORMELEMENTCHANGE, UPDATE_ERRORS, LOGOUT, SET_REGISTERING, SET_USER_REGISTERED, CANCEL_REGISTRATION, ONCLICK_ICON, DELETE_ASSESSMENT_DATA, GET_ARCHIVED_ASSESSMENT_DATA, UPDATEISSUE, UPDATEISSUEFALSE, TOGGLEFORGOT, UPDATEFORGOT } from "../data/actions";
import { USER_DATA, UPDATE_CREDENTIALS, USER_PROGRESS, USER_ASSESSMENT_DATA, SET_STUDENTS, TOPICS_DATA} from "../data/actions_API";

const updateUsernameAndPassword = (state, { id, val }) => {
	return state.setIn(['user', id], val);
}

const updateCredentials = (state, { data }) => {
	return state.setIn(['user', 'token'], data.token)
				.setIn(['user', 'user_display_name'], data.user_display_name)
				.setIn(['user', 'user_email'], data.user_email)
				.set('loggedIn', true);
}

const updateErrors = (state, { errorMessage }) => {
	return state.set('errors', errorMessage);
}

const updateUser = (state, { data }) => {
	let user = data[0];
	const cohort = user.cohort ? user.cohort : 'Coding Fellowship';
	return state.setIn(['user', 'id'], user.id)
				.setIn(['user', 'username'], user.username) // update username with the value provided by api
				.setIn(['user', 'roles'], user.roles)
				.setIn(['user', 'cohort'], cohort); // update roles with the value provided by api
}

const updateUserProgress = (state, { data }) => {
	return state.set('userProgress', data);
}

const updateUserAssessmentData = (state, { data }) => {
	return state.set('assessmentData', data);
}

const setStudents = (state, { data }) => {
	//data == students array

	//List of unique cohort names
	let cohorts = [];

	//If cohort is already in cohorts array then do not add to arr
	data.map(student => cohorts.find(cohort => cohort === student.get('cohort')) ? null : cohorts.push(student.get('cohort')));

	//Convert each cohort to an object to pass into state.
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

	return state.set('cohorts', fromJS(cohorts)).set('cohortsLoaded', true);
}

const topicsData = (state, { data }) => {
	
	const topicsWithDuration = data.map(topic => topic.set('duration', topic.get('tasks').reduce((total, task) => {
		const resources = task.get('resources');
		if(resources) {
			return resources.reduce((total, resource) => resource.get('duration') ? total + +resource.get('duration') : total + 0, 0);
		}
		return total + 0;
	}, 0)));

	return state.set('topics', topicsWithDuration).set('isLoaded', true);
}

const onClickIcon = (state, { id }) => {
	return state.set('topics', state.get('topics').map((topic) => topic.set('selected', false)))
				.setIn(['topics', id, 'selected'], true);
}

const logOut = (state) => {
	return state.set('loggedIn', false);
}

const setRegistering = (state) => {
	return state.set('registering', true).set('userRegistered', false);
}

const setUserRegistered = (state, {data}) => {
	if(typeof data === 'object') {
		data = fromJS(data);
		const errorMessage = data.reduce((str, error) => str += error.get(0) + ' ', 'Error: ');

		return state.set('errors', errorMessage);
	}

	if(typeof data === 'string') {
		return state.set('registering', false).set('userRegistered', true);
	}

	return state.set('errors', 'Error: Unknown server response, please try again.');	
}

const cancelRegistration = (state) => {
	return state.set('registering', false);
}

const toggleForgot = (state) => {
	return state.set('forgotPassword', false).set('resetSuccess', false);
}
const updateForgot = (state, {data}) => {
	const success = data.success;
	const forgotMessage = data.message;
	return state.set('forgotPassword', true).set('resetSuccess', success).set('forgotPasswordMessage', forgotMessage);
}
const deleteAssessmentData = (state, {topicTitle, assessmentID, assessment}) => {
	const answers = state.getIn(['assessmentData', topicTitle, assessmentID, 'answers']);
	const answersRemoved = answers.map(answer => null);
	return state.setIn(['assessmentData', topicTitle, assessmentID, 'answers'], answersRemoved).set('archivedAssessmentData', answers);
}

const getArchivedAssessmentData = (state, {topicTitle, assessmentID, assessment}) => {
	return state.setIn(['assessmentData', topicTitle, assessmentID, 'answers'], state.get('archivedAssessmentData'));
}

const updateIssue = (state) => {
	return state.set('issue', true);
}
const updateIssueFalse = (state) => {
	return state.set('issue', false);
}

export default (state = initial, action) => {
	switch (action.type) {
		case ONFORMELEMENTCHANGE: return updateUsernameAndPassword(state, action);
		case UPDATE_CREDENTIALS: return updateCredentials(state, action);
		case UPDATE_ERRORS: return updateErrors(state, action);
		case USER_DATA: return updateUser(state, action);
		case USER_PROGRESS: return updateUserProgress(state, action);
		case USER_ASSESSMENT_DATA: return updateUserAssessmentData(state, action);
		case DELETE_ASSESSMENT_DATA: return deleteAssessmentData(state, action);
		case GET_ARCHIVED_ASSESSMENT_DATA: return getArchivedAssessmentData(state, action);
		case SET_STUDENTS: return setStudents(state, action);
		case TOPICS_DATA: return topicsData(state, action);
		case ONCLICK_ICON: return onClickIcon(state, action);
		case LOGOUT: return logOut(state);
		case SET_REGISTERING: return setRegistering(state);
		case SET_USER_REGISTERED: return setUserRegistered(state, action);
		case CANCEL_REGISTRATION: return cancelRegistration(state);
		case TOGGLEFORGOT: return toggleForgot(state);
		case UPDATEFORGOT: return updateForgot(state, action);
		case UPDATEISSUE: return updateIssue(state);
		case UPDATEISSUEFALSE: return updateIssueFalse(state);
		default: return state;
	}
};