import { Map, List, /*fromJS*/ } from "immutable";

export default Map({
	isLoaded: false,
	cohortsLoaded: false,
	loggedIn: false,
	topics: List([]),
	user: Map({ id: '', username: '', password: '', roles: [], user_display_name: '', user_email: '', token: null }),
	userProgress: List([]),
	assessmentData: Map({}),
	sharedCode: Map({}),
	studentsToMark: List([]),
	archivedAssessmentData: List([]),
	errors: '',
	messages: '',
	cohorts: List([]),
	forgotPassword: true,
	issue: false,
});
