import { Map, List } from "immutable";

export default Map({
	isLoaded: true,
	// isLoaded: false,
	loggedIn: true,
	// loggedIn: false,
	topics: List([
		Map({id: 1, title: 'Javascript', short_title: 'JS', description: 'Lorem ipsum', tasks: [], selected: false }),
		Map({id: 1, title: 'Javascript', short_title: 'JS', description: 'Lorem ipsum', tasks: [], selected: false }),
		Map({id: 1, title: 'Javascript', short_title: 'JS', description: 'Lorem ipsum', tasks: [], selected: false }),
		]),
	// topics: List([1, 2, 3, 4, 5]),
	user: Map({ id: '', username: 'Peter Thomas', password: '', token: null }),
	// user: Map({ id: '', username: '', password: '', token: null }),
	userProgress: List([]),
	errors: '',
});
