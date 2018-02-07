import { Map, List, fromJS } from "immutable";

let data =  
	fromJS({ 
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

// userProgress needs to change, we have access to the assessment title so;
// completed tasks are referenced by topic_short_title.i
// completed assessments are referenced by topic_short_title.ass.i - this should mean the status will calculate correctly
// assessment data is stored in a completely seperate part of the state and of the database called assessment data


export default Map({
	// isLoaded: true,
	// loggedIn: true,
	// topics: List([
	// 	data, data, data, data, data
	// ]),
	// user: Map({ id: 1, username: 'Peter Thomas', password: '', token: null }),
	
	isLoaded: false,
	loggedIn: false,
	topics: List([]),
	user: Map({ id: '', username: '', password: '', token: null }),

	userProgress: List([]),
	assessmentData: Map({}),
	errors: '',
});
