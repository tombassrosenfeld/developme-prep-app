import initial from "./initial";
import { List } from "immutable";

import { ONFORMELEMENTCHANGE } from "./actions";
import { UPDATE_TOKEN } from "../data/actions_API";
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

const updateToken = (state, { token }) => {
	return state.set('loggedIn', true)
				.setIn(['user', 'token'], token);
}

const updateErrors = (state, { errorMessage }) => {
	return state.set('errors', errorMessage);
}

const updateUserID = (state, { data }) => {
	// find the matching userID
	let user = data.filter((user) => {
		return user.name === state.getIn(['user', 'username']);
	}, '')[0];
	// and update the user ID in the state
	return state.setIn(['user', 'id'], user.id);
}

const updateUserProgress = (state, { data }) => {
	return state.set('userProgress', List(data));
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
		case UPDATE_TOKEN: return updateToken(state, action);
		case UPDATE_ERRORS: return updateErrors(state, action);
		case USER_DATA: return updateUserID(state, action);
		case USER_PROGRESS: return updateUserProgress(state, action);
		case USER_ASSESSMENT_DATA: return updateUserAssessmentData(state, action);
		case TOPICS_DATA: return topicsData(state, action);
		case ONCLICK_ICON: return onClickIcon(state, action);
		case LOGOUT: return logOut(state);
		default: return state;
	}
};