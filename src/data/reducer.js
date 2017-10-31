import initial from "./initial";
import { AUTHENTICATE } from "./actions";
import { MODULES_DATA } from "./actions";
import { ONCLICK_ICON } from "./actions";

const modules_data = (state, { data }) => {
	return state.set('modules', data).set('isLoaded', true);
}

const onClickIcon = (state, { id }) => {
	return state.set('modules', state.get('modules').map((module) => module.set('selected', false)))
				.setIn(['modules', id, 'selected'], true);
}

const authenticate = (state, { authKey }) => {
	return state.set('loggedIn', true)
				.set('token', authKey);
}

export default (state = initial, action) => {
	switch (action.type) {
		case MODULES_DATA: return modules_data(state, action);
		case ONCLICK_ICON: return onClickIcon(state, action);
		case AUTHENTICATE: return authenticate(state, action);
		default: return state;
	}
};