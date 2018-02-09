import initial from "./initial";
import { List } from "immutable";
import { formatUserSlug } from "../utilities/utilities";

import { ONFORMELEMENTCHANGE } from "./actions";
import { UPDATE_TOKEN_AND_USER } from "../data/actions_API";
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

const updateTokenAndUser = (state, { data }) => {
	console.log(data);
	return state.setIn(['user', 'token'], data.token)
				.setIn(['user', 'user_display_name'], data.user_display_name)
				.setIn(['user', 'user_email'], data.user_email)
				.set('loggedIn', true);
}

const updateErrors = (state, { errorMessage }) => {
	return state.set('errors', errorMessage);
}

const updateUserID = (state, { data }) => {

	// find the matching userID
	let user = data.filter((user) => {
		return user.username === state.getIn(['user', 'username'])
	}, '')[0];
	// TODO: save whole of the user object in state?
	// TODO: save all of the meta as one item, so userprogress and assessment data are in the same place
	// TODO: don't need to make the second API calls then...
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
		case UPDATE_TOKEN_AND_USER: return updateTokenAndUser(state, action);
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