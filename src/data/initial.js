import { Map, List } from "immutable";

export default Map({
	isLoaded: false,
	login: Map({ username: '', password: '', loggedIn: false, token: null}),
	modules: List([1,2,3,4,5]),
});

