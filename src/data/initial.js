import { Map, List, /*fromJS*/ } from "immutable";

export default Map({
	isLoaded: false,
	cohortsLoaded: false,
	loggedIn: false,
	navItems: Map({
		student: List([
			Map({label: 'Preparation', link: '/'}),
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
	forgotPassword: true,
	issue: false,
});
