import { Map, List, /*fromJS*/ } from "immutable";

export default Map({
	
	isLoaded: false,
	cohortsLoaded: false,
	loggedIn: false,
	topics: List([]),
	user: Map({ id: '', username: '', password: '', roles: [], user_display_name: '', user_email: '', token: null }),
	userProgress: List([]),
	assessmentData: Map({}),
	archivedAssessmentData: List([]),
	errors: '',
	cohorts: List([]),
	issue: false,
	isRegistering: false,
	userRegistered: false,
});
