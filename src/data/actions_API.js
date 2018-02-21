import axios from '../data/axios';
import { processTopicsData } from '../utilities/utilities';
import { store } from '../index.js';
import { updateErrors } from './actions';
import { List, fromJS } from "immutable";
import { getUserRole } from "../utilities/utilities";

export const UPDATE_CREDENTIALS = Symbol("UPDATE_CREDENTIALS");
export const UPDATE_ERRORS = Symbol("UPDATE_ERRORS");
export const TOPICS_DATA = Symbol("TOPICS_DATA");
export const USER_DATA = Symbol("USER_DATA");
export const USER_PROGRESS = Symbol("USER_PROGRESS");
export const USER_ASSESSMENT_DATA = Symbol("USER_ASSESSMENT_DATA");
export const SET_STUDENTS = Symbol("SET_STUDENTS");

// when user submits login details, calls authenticate()
export const authenticate = (username, password) => dispatch => {
	getToken(username, password)
		.then( response => {
			dispatch(updateErrors('')); // remove any errors
			dispatch(updateCredentials(response.data)); // dispatches token and credentials to state
			dispatch(getData(response.data.token)); // and immediately calls api for module and user data
		})
		.catch( error => dispatch(updateErrors('Unable to log you in! Please check your details.')) )
};

// if authentication is successful, calls getdata()
const getData = (token) => dispatch => {
	getUserData(token)
		.then( response => {
			dispatch(updateErrors('')); // remove any errors
			dispatch(userData(response.data)); // update state with user data
			dispatch(userProgress(List(response.data[0].userProgress))); // update state with user progress
			dispatch(userAssessmentData(fromJS(response.data[0].userAssessmentData))); // update state
			if(getUserRole(response.data[0].roles) === 'instructor') { //If user is instructor get all student users
				getStudents(token)
					.then(response => {
						dispatch(setStudents(fromJS(response.data)));
					})
					.catch( error => {
						console.log(error.response);
						dispatch( updateErrors('Error: unable to retrieve students data.'));
					});
			}
		})
		.catch( error => {
			console.log(error.response);
			dispatch( updateErrors('Error: unable to retrieve user data.'));
		});

	// gets modules and tasks
	getTopics()
		.then( response => {
			dispatch(updateErrors('')); // remove any errors
		    dispatch(topicsData(processTopicsData(response.data))); // update state
		})
		.catch( error => dispatch(updateErrors('Error: no modules or tasks available.')) );
};
  
// when user clicks on markers
export const onClickUserProgress = (id) => dispatch => {
	let userProgressArr = store.getState().get('userProgress');
	var savedUserProgressArr = userProgressArr;

	if (!userProgressArr.includes(id)) {
		userProgressArr = userProgressArr.push(id);
	} else {
		let index = userProgressArr.indexOf(id);
		userProgressArr = userProgressArr.splice(index, 1);
	}
	
	dispatch(userProgress(userProgressArr));// dispatch to state
	
	// post to api
	postUserProgress(userProgressArr)
		.then( response => {
			dispatch(updateErrors(''));
		})
		.catch( error => {
			// if failed to update, roll back to previous state
			dispatch(updateErrors('Error: unable to save your progress.'));
			return dispatch(userProgress(savedUserProgressArr));
		})
}

// when user clicks an answer in the assessment
export const onChangeAssessmentAnswer = (topic, assessmentID, questionID, answerID) => dispatch => {
	//get assessment data from the state
	let userAssessmentDataObj = store.getState().get('assessmentData');
	let savedUserAssessmentDataObj = userAssessmentDataObj;

	userAssessmentDataObj = userAssessmentDataObj.setIn([topic, assessmentID, 'answers', questionID], answerID);
	
	dispatch(userAssessmentData(userAssessmentDataObj)); // dispatch to state

	// post to api
	postUserAssessmentData(userAssessmentDataObj)
		.then( response => dispatch(updateErrors('')) )// remove any errors
		.catch( error => {
			// if failed to update, roll back to previous state
			dispatch(updateErrors('Error: unable to save your answers.'));
			return dispatch(userAssessmentData(savedUserAssessmentDataObj));
		})
}

export const onClickAssessmentSubmit = (topicTitle, assessmentID, assessment, userAnswers) => dispatch => {
	// mark assessment and update assessmentData
	let answers = assessment.get('questions').map((question, i) => question.get('correct_answer') - 1);
	let correctAnswers = answers.filter((answer, i) => answer === userAnswers.get(i));
	let assessmentData = store.getState().get('assessmentData');
	let savedAssessmentData = assessmentData;
	assessmentData = assessmentData.setIn([topicTitle, assessmentID, 'result'], correctAnswers.size);
	
	dispatch(userAssessmentData(assessmentData)); // dispatch to state

	// update user progress data
	let userProgressArr = store.getState().get('userProgress'); 
	var savedUserProgressArr = userProgressArr; 
	let assessmentKey = topicTitle + '.assess.' + assessmentID;
	userProgressArr = !userProgressArr.includes(assessmentKey) ? userProgressArr.push(assessmentKey) : userProgressArr;
	dispatch(userProgress(userProgressArr));// dispatch to state

	// post to api - if any part of the process fails revert back
	postUserAssessmentData(assessmentData.toJS())
		.then( response => {
			dispatch(updateErrors(''));	
			// post user progress
			postUserProgress(userProgressArr)
				.then( response => {
					dispatch(updateErrors(''))
				})
				.catch( error => {
					// if failed, roll back assessment and user progress data
					dispatch(updateErrors('Error: unable to save your progress.'));
					dispatch(userAssessmentData(savedAssessmentData));
					return dispatch(userProgress(savedUserProgressArr));
				})
		})
		.catch( error => {
			// if failed, roll back assessment and user progress data
			dispatch(updateErrors('Error: unable to save your answers.'))
			dispatch(userAssessmentData(savedAssessmentData));
			return dispatch(userProgress(savedUserProgressArr));
		} );
}

const updateCredentials = (data) => ({
	type: UPDATE_CREDENTIALS, 
	data,
})

const userData = (data) => ({
	type: USER_DATA,
	data,
})

const userProgress = (data) => ({
	type: USER_PROGRESS,
	data,
})

const userAssessmentData = (data) => ({
	type: USER_ASSESSMENT_DATA,
	data,
})

const topicsData = (data) => ({
    type: TOPICS_DATA,
    data,
});

const setStudents = data => ({
	type: SET_STUDENTS,
	data,
});

// API calls
function getToken(username, password) {
	return axios.post('/wp-json/jwt-auth/v1/token', { 
		username: username,
		password: password,
	})
}

function getStudents(token) {
	return axios.get('/wp-json/wp/v2/users?context=edit&search=student', { // only return user data for the logged in user
    	headers: {'Authorization': 'Bearer ' + token},
    })
}

function getUserData(token) {
	let userEmail = store.getState().getIn(['user', 'user_email']);
	return axios.get('/wp-json/wp/v2/users?context=edit&search=' + userEmail, { // only return user data for the logged in user
    	headers: {'Authorization': 'Bearer ' + token},
    })
}

function postUserProgress(data) {
	let userID = store.getState().getIn(['user', 'id']);
	let token = store.getState().getIn(['user', 'token']);
	axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
	return axios.post('/wp-json/cf/prep/' + userID + '/progress', {
    	data: data,
    })
}

function postUserAssessmentData(data) {
	let userID = store.getState().getIn(['user', 'id']);
	let token = store.getState().getIn(['user', 'token']);
	axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
	return axios.post('/wp-json/cf/prep/' + userID + '/assessment', {
    	data: data,
    })
}

function getTopics() {
	return axios.get('/wp-json/wp/v2/cf_preparation');
} 