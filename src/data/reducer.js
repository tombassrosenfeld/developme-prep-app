import initial from "./initial";
import {List, fromJS} from "immutable";
import {getUserRole} from '../utilities/utilities';

import { ONFORMELEMENTCHANGE } from "./actions";
import { UPDATE_CREDENTIALS } from "../data/actions_API";
import { UPDATE_ERRORS } from "../data/actions";
import { USER_DATA } from "../data/actions_API";
import { USER_PROGRESS} from "../data/actions_API";
import { USER_ASSESSMENT_DATA} from "../data/actions_API";
import { SET_STUDENTS } from "../data/actions_API";
import { TOPICS_DATA } from "../data/actions_API";
import { ONCLICK_ICON } from "./actions";
import { LOGOUT } from "./actions";

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
	return state.setIn(['user', 'id'], user.id)
				.setIn(['user', 'username'], user.username) // update username with the value provided by api
				.setIn(['user', 'roles'], user.roles); // update roles with the value provided by api
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

	return state.set('cohorts', fromJS(cohorts)).set('isLoaded', true);
}

const topicsData = (state, { data }) => {
	const role = getUserRole(state.getIn(['user', 'roles']));

	if(role === 'student') {
		return state.set('topics', data).set('isLoaded', true);
	} 

	return state.set('topics', data);

}

const onClickIcon = (state, { id }) => {
	return state.set('topics', state.get('topics').map((topic) => topic.set('selected', false)))
				.setIn(['topics', id, 'selected'], true);
}

const logOut = (state) => {
	return state.set('loggedIn', false);
}

export default (state = initial, action) => {
	switch (action.type) {
		case ONFORMELEMENTCHANGE: return updateUsernameAndPassword(state, action);
		case UPDATE_CREDENTIALS: return updateCredentials(state, action);
		case UPDATE_ERRORS: return updateErrors(state, action);
		case USER_DATA: return updateUser(state, action);
		case USER_PROGRESS: return updateUserProgress(state, action);
		case USER_ASSESSMENT_DATA: return updateUserAssessmentData(state, action);
		case SET_STUDENTS: return setStudents(state, action);
		case TOPICS_DATA: return topicsData(state, action);
		case ONCLICK_ICON: return onClickIcon(state, action);
		case LOGOUT: return logOut(state);
		default: return state;
	}
};