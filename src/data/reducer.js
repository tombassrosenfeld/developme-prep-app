import initial from "./initial";

import { ONFORMELEMENTCHANGE } from "./actions";
import { UPDATE_CREDENTIALS } from "../data/actions_API";
import { UPDATE_ERRORS } from "../data/actions";
import { USER_DATA } from "../data/actions_API";
import { USER_PROGRESS} from "../data/actions_API";
import { USER_ASSESSMENT_DATA} from "../data/actions_API";
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

const topicsData = (state, { data }) => {
	return state.set('topics', data).set('isLoaded', true);
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
		case TOPICS_DATA: return topicsData(state, action);
		case ONCLICK_ICON: return onClickIcon(state, action);
		case LOGOUT: return logOut(state);
		default: return state;
	}
};