import { Map, List, /*fromJS*/ } from "immutable";

/*****
let data = fromJS({ 
	id: 1, 
	title: "Blanditiis quidem aut sit", 
	short_title: "CSS", 
	description: "Molestiae omnis fugiat laborum Quis sint aute ea odio hic qui officiis ab molestiae", 
	tasks: [
		{task: "Autem consequatur", description: "Laudantium ut veritatis et magnam ducimus quis aute cum sunt ex explicabo Nemo blanditiis excepturi", 
			resources: [
				{title: "resource1", resource_type: "fa fa-eye", description: "Laudantium ut veritatis et magnam ducimus", link: "https://www.google.com"},
				{title: "resource1", resource_type: "fa fa-file-o", description: "Laudantium ut veritatis et magnam ducimus", link: "https://www.google.com"},
				{title: "resource1", resource_type: "fa fa-wifi", description: "Laudantium ut veritatis et magnam ducimus", link: "https://www.google.com"},
			] 
		}
	], 
	assessments: [{
		assessment_title: 'Assessment 1', 
		questions: [
			{question: "What is the capital of the UK?", 
			answer_type: "Multiple Choice", 
			answers: [{answer_choice: 'London'}, {answer_choice: 'Berlin'}, {answer_choice: 'Paris'}, {answer_choice: 'Timbuktu'}, {answer_choice: 'Dehli'} ], 
			correct_answer: 1},

			{question: "What is the capital of the UK?", 
			answer_type: "Multiple Choice", 
			answers: [{answer_choice: 'London'}, {answer_choice: 'Berlin'}, {answer_choice: 'Paris'}, {answer_choice: 'Timbuktu'}, {answer_choice: 'Dehli'} ], 
			correct_answer: 2},

			{question: "What is the capital of the UK?", 
			answer_type: "Multiple Choice", 
			answers: [{answer_choice: 'London'}, {answer_choice: 'Berlin'}, {answer_choice: 'Paris'}, {answer_choice: 'Timbuktu'}, {answer_choice: 'Dehli'} ], 
			correct_answer: 4} 
		],
			
	}],
	selected: false 
});

const dummyCohorts = [
	{
		id: 1,
		name: 'CF01',
		students: List([
			Map({
				id: 1,
				cohort : "CF01",
				description : "" ,
				name: 'Kye Buffery',
				email: 'kye.buffery@icloud.com',
				userAssessmentData : {} ,
				userProgress :  List(['', '', '']),
			}),
			Map({
				id: 2,
				cohort : "CF01",
				description : "" ,
				name: 'Pete Thomas',
				email: 'pete.thomas@icloud.com',
				userAssessmentData : {} ,
				userProgress :  List(['', '', '', '', '', '']),
			}),
		]),
		selected: false,
	},
	{
		id: 2,
		name: 'CF02',
		students: List([]),
		selected: false,
	},
	{
		id: 3,
		name: 'CF03',
		students: List([]),
		selected: false,
	},
];

******/

export default Map({
	// isLoaded: true,
	// loggedIn: true,
	// topics: List([
	// 	data, data, data, data, data
	// ]),
	// user: Map({ id: 1, username: 'Peter Thomas', password: '', roles:List(['instructor', 'admin']), token: null }),
	// cohorts: fromJS(dummyCohorts),
	
	isLoaded: false,
	cohortsLoaded: false,
	loggedIn: false,
	topics: List([]),
	user: Map({ id: '', username: '', password: '', roles: [], user_display_name: '', user_email: '', token: null }),
	
	userProgress: List([]),
	assessmentData: Map({}),
	archivedData: List([]),
	errors: '',

	cohorts: List([]),
});
