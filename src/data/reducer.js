import initial from "./initial";
import { Map, List } from "immutable";
import { formatJSON } from '../utilities/utilities';
import { DISPATCH_DATA } from "./actions";
import { ONCLICK_ICON } from "./actions";

const processData = (state, { data }) => {
	// use 'utilities/utilities.js' to format the API response
	return state.set('modules', formatJSON(data)).set('isLoaded', true);
}

const onClickIcon = (state, { id }) => {
	console.log(id);
	return state.set('modules', state.get('modules').map((module) => module.set('selected', false)))
				.setIn(['modules', id, 'selected'], true);
}

export default (state = initial, action) => {
	switch (action.type) {
		case DISPATCH_DATA: return processData(state, action);
		case ONCLICK_ICON: return onClickIcon(state, action);
		default: return state;
	}
};