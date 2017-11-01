import { Map, List } from "immutable";

export default Map({
	isLoaded: false,
	loggedIn: false,
	login: Map({ username: '', password: '', token: null}),
	modules: List([1,2,3,4,5]),
});

