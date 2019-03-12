import { Map, List, /*fromJS*/ } from "immutable";

export default Map({
	isLoaded: false,
	loading: false,
	cohortsLoaded: false,
	loggedIn: false,
	lastActive: null,
	navItems: Map({
		student: List([
			Map({label: 'Home', link: '/'}),
			Map({label: 'Feedback', link: '/feedback'}),
		]),
		instructor: List([
			Map({label: 'Students', link: '/'}),
			Map({label: 'Marking', link: '/marking'}),
		]),
	}),
	topics: List([]),
	user: Map({ id: '', username: '', password: '', roles: [], user_display_name: '', user_email: '', token: null }),
	userProgress: List([]),
	assessmentData: Map({}),
	sharedCode: Map({}),
	studentsToMark: List([]),
	archivedAssessmentData: List([]),
	errors: '',
	message: '',
	cohorts: List([]),
	issue: false,
	isRegistering: false,
	userRegistered: false,
	activeModule: null,
});
