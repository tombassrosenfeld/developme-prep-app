import initial from "./initial";
import { Map, List } from "immutable";
import { DISPATCH_DATA } from "./actions";

const processData = (state, { data }) => {
	console.log(data);
	// need to format the data properly
	return state.set('modules', List(data.map((item, i) => Map({id: i, title: item.title.rendered})))).set('isLoaded', true);
}

export default (state = initial, action) => {
	switch (action.type) {
		case DISPATCH_DATA: return processData(state, action);
		default: return state;
	}
};