import initial from "./initial";
import { ONFORMELEMENTCHANGE } from "./actions";
import { UPDATE_TOKEN } from "../data/actions_API";
import { USER_DATA } from "../data/actions_API";
import { USER_PROGRESS } from "../data/actions_API";
import { MODULES_DATA } from "../data/actions_API";
import { ONCLICK_ICON } from "./actions";
import { LOGOUT } from "./actions";

const updateUsernameAndPassword = (state, { id, val }) => {
	return state.setIn(['user', id], val);
}

const updateToken = (state, { token }) => {
	return state.set('loggedIn', true)
				.setIn(['user', 'token'], token);
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
	return state.set('userProgress');
}

const modulesData = (state, { data }) => {
	return state.set('modules', data).set('isLoaded', true);
}

const onClickIcon = (state, { id }) => {
	return state.set('modules', state.get('modules').map((module) => module.set('selected', false)))
				.setIn(['modules', id, 'selected'], true);
}

const logOut = (state) => {
	console.log('loggingOut');
	return state.set('loggedIn', false);
}

export default (state = initial, action) => {
	switch (action.type) {
		case ONFORMELEMENTCHANGE: return updateUsernameAndPassword(state, action);
		case UPDATE_TOKEN: return updateToken(state, action);
		case USER_DATA: return updateUserID(state, action);
		case USER_PROGRESS: return updateUserProgress(state, action);
		case MODULES_DATA: return modulesData(state, action);
		case ONCLICK_ICON: return onClickIcon(state, action);
		case LOGOUT: return logOut(state);
		default: return state;
	}
};