import { Map, List } from "immutable";

export default Map({
	isLoaded: false,
	loggedIn: false,
	user: Map({ id: '', username: '', password: '', token: null }),
	topics: List([1,2,3,4,5]),
	userProgress: List([]),
	errors: '',
});