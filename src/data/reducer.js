import initial from "./initial";
import { AUTHENTICATE } from "./actions";
import { ONFORMELEMENTCHANGE } from "./actions";
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
	return state.setIn(['login','loggedIn'], true)
				.setIn(['login', 'token'], authKey);
}

const updateLogin = (state, { id, val }) => {
	console.log(id);
	console.log(val);
	return state.setIn(['login', id], val);
}

export default (state = initial, action) => {
	switch (action.type) {
		case AUTHENTICATE: return authenticate(state, action);
		case ONFORMELEMENTCHANGE: return updateLogin(state, action);
		case MODULES_DATA: return modules_data(state, action);
		case ONCLICK_ICON: return onClickIcon(state, action);
		default: return state;
	}
};