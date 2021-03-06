import axios from '../data/axios';
import { processTopicsData, timeoutNotices } from '../utilities/utilities';
import { updateErrors, updateMessage, updateIssue, setUserRegistered, setDataFreshness, setLoading } from './actions';
import { List, fromJS } from "immutable";
import { getUserRole, sendSlackNotification } from "../utilities/utilities";

export const UPDATE_CREDENTIALS = Symbol("UPDATE_CREDENTIALS");
// export const UPDATE_ERRORS = Symbol("UPDATE_ERRORS");
export const TOPICS_DATA = Symbol("TOPICS_DATA");
export const USER_DATA = Symbol("USER_DATA");
export const USER_PROGRESS = Symbol("USER_PROGRESS");
export const USER_ASSESSMENT_DATA = Symbol("USER_ASSESSMENT_DATA");
export const USER_SHARED_CODE = Symbol("USER_SHARED_CODE");
export const SHARED_CODE_FEEDBACK = Symbol("SHARED_CODE_FEEDBACK");
export const SET_STUDENTS = Symbol("SET_STUDENTS");
export const REGISTER_USER = Symbol("REGISTER_USER");

// how long error banners appear on the screen
const noticeDuration = 6000;

// when user submits login details, calls authenticate()
export const authenticate = (username, password) => dispatch => {
	getToken(username, password)
		.then( response => {
			dispatch(updateErrors('')); // remove any errors
			dispatch(updateCredentials(response.data)); // dispatches token and credentials to state
			dispatch(getData(response.data.token)); // and immediately calls api for module and user data
			dispatch(setLoading(false));
		})
		.catch( error => {
			dispatch(updateErrors('Unable to log you in! Please check your details.'));
			dispatch(setLoading(false));
			timeoutNotices(dispatch, updateErrors, noticeDuration);
		})
};

export const registerUser = data => (dispatch)=> {
	postUserData(data)
		.then( response => {
			dispatch(updateErrors('')); // remove any errors
			dispatch(setUserRegistered(response.data));
		})
		.catch( error => {
		    if (error.response) {
		    	dispatch(updateErrors(error.response.data.message));
		    	timeoutNotices(dispatch, updateErrors, noticeDuration);
			}
		});
};

// if authentication is successful, calls getdata()
const getData = (token) => (dispatch, getState) => {
	let userEmail = getState().get('root').getIn(['user', 'user_email']);
	getUserData(token, userEmail)
		.then( response => {
			dispatch(updateErrors('')); // remove any errors
			dispatch(userData(response.data)); // update state with user data
			dispatch(userProgress(List(response.data.userProgress))); // update state with user progress
			dispatch(userAssessmentData(fromJS(response.data.userAssessmentData))); // update state
			dispatch(userSharedCode(fromJS(response.data.userSharedCode))); // update state
			dispatch(setDataFreshness(response.data.dataFreshness)); // update data freshness
			let role = getUserRole(response.data.roles);
			if(role === 'instructor') { // If user is instructor get all student users
				getStudents(token)
					.then(response => {
						dispatch(setStudents(fromJS(response.data)));
					})
					.catch( error => {
						dispatch(updateErrors('Error: unable to retrieve students data.'));
		    		timeoutNotices(dispatch, updateErrors, noticeDuration);
					});
			}
		})
		.catch( error => {
			dispatch( updateErrors('Error: unable to retrieve user data.'));
		  timeoutNotices(dispatch, updateErrors, noticeDuration);
		});

	// gets modules and tasks
	getTopics()
		.then( response => {
			dispatch(updateErrors('')); // remove any errors
		    dispatch(topicsData(processTopicsData(response.data))); // update state
		})
		.catch( error => {
			dispatch(updateErrors('Error: no modules or tasks available.'));
    	timeoutNotices(dispatch, updateErrors, noticeDuration);
		});
};
  
// when user clicks on markers
export const onClickUserProgress = (id) => (dispatch, getState) => {
	let userProgressArr = getState().get('root').get('userProgress');
	var savedUserProgressArr = userProgressArr;

	if (!userProgressArr.includes(id)) {
		userProgressArr = userProgressArr.push(id);
	} else {
		let index = userProgressArr.indexOf(id);
		userProgressArr = userProgressArr.splice(index, 1);
	}
	
	dispatch(userProgress(userProgressArr));// dispatch to state

	let userID = getState().get('root').getIn(['user', 'id']);
	let token = getState().get('root').getIn(['user', 'token']);
	
	// post to api
	postUserProgress(userProgressArr, userID, token)
		.then( response => {
			dispatch(updateErrors(''));
		})
		.catch( error => {
			// if failed to update, roll back to previous state
			dispatch(updateErrors('Error: unable to save your progress.'));
		  timeoutNotices(dispatch, updateErrors, noticeDuration);
			return dispatch(userProgress(savedUserProgressArr));
		})
}

// when user clicks an answer in the assessment
export const onChangeAssessmentAnswer = (topic, assessmentID, questionID, answerID) => (dispatch, getState) => {
	//get assessment data from the state
	let userAssessmentDataObj = getState().get('root').get('assessmentData');
	let savedUserAssessmentDataObj = userAssessmentDataObj;
	let userID = getState().get('root').getIn(['user', 'id']);
	let token = getState().get('root').getIn(['user', 'token']);


	userAssessmentDataObj = userAssessmentDataObj.setIn([topic, assessmentID, 'answers', questionID], answerID);
	
	dispatch(userAssessmentData(userAssessmentDataObj)); // dispatch to state

	// post to api
	postUserAssessmentData(userAssessmentDataObj, userID, token)
		.then( response => dispatch(updateErrors('')) )// remove any errors
		.catch( error => {
			// if failed to update, roll back to previous state
			dispatch(updateErrors('Error: unable to save your answers.'));
			timeoutNotices(dispatch, updateErrors, noticeDuration);
			return dispatch(userAssessmentData(savedUserAssessmentDataObj));
		})
}

export const onIssueFormSubmit = data => (dispatch, getState )=> {
	let userEmail = getState().get('root').getIn(['user', 'user_email']);
	data.email = userEmail;

	postIssue(data)
		.then( response => {
			dispatch(updateIssue());// Don't worry about this bit for now
		})
		.catch( error => {
			dispatch(updateErrors('Post was not submitted, please check for errors'))
			timeoutNotices(dispatch, updateErrors, noticeDuration);
		})
};

export const onClickAssessmentSubmit = (topicTitle, assessmentID, assessment, userAnswers) => (dispatch, getState) => {
	// mark assessment and update assessmentData
	let answers = assessment.get('questions').map((question, i) => question.get('correct_answer') - 1);
	let correctAnswers = answers.filter((answer, i) => answer === userAnswers.get(i));
	let assessmentData = getState().get('root').get('assessmentData');
	let savedAssessmentData = assessmentData;
	assessmentData = assessmentData.setIn([topicTitle, assessmentID, 'result'], correctAnswers.size);
	let attemptsForTopic = 0;

	if(assessmentData.getIn([topicTitle, assessmentID, 'attempts'])) {
		attemptsForTopic = assessmentData.getIn([topicTitle, assessmentID, 'attempts']);
		attemptsForTopic += 1;
	} else {
		attemptsForTopic = 1;
	}	
	assessmentData = assessmentData.setIn([topicTitle, assessmentID, 'attempts'], attemptsForTopic);
	dispatch(userAssessmentData(assessmentData)); // dispatch to state

	// update user progress data
	let userProgressArr = getState().get('root').get('userProgress'); 
	var savedUserProgressArr = userProgressArr; 
	let assessmentKey = topicTitle + '.assess.' + assessmentID;
	let userID = getState().get('root').getIn(['user', 'id']);
	let token = getState().get('root').getIn(['user', 'token']);
	userProgressArr = !userProgressArr.includes(assessmentKey) ? userProgressArr.push(assessmentKey) : userProgressArr;
	dispatch(userProgress(userProgressArr));// dispatch to state

	// post to api - if any part of the process fails revert back
	postUserAssessmentData(assessmentData.toJS(), userID, token)
		.then( response => {
			dispatch(updateErrors(''));	
			// post user progress

			postUserProgress(userProgressArr, userID, token)
				.then( response => {
					dispatch(updateErrors(''))
				})
				.catch( error => {
					// if failed, roll back assessment and user progress data
					dispatch(updateErrors('Error: unable to save your progress.'));
					timeoutNotices(dispatch, updateErrors, noticeDuration);
					dispatch(userAssessmentData(savedAssessmentData));
					return dispatch(userProgress(savedUserProgressArr));
				})
		})
		.catch( error => {
			// if failed, roll back assessment and user progress data
			dispatch(updateErrors('Error: unable to save your answers.'))
			timeoutNotices(dispatch, updateErrors, noticeDuration);
			dispatch(userAssessmentData(savedAssessmentData));
			return dispatch(userProgress(savedUserProgressArr));
		} );
}

export const onClickSharedCodeSubmit = (topicTitle, taskID) => (dispatch, getState) => {
	dispatch(updateErrors(''));
	dispatch(updateMessage(''));
	let data = getState().get('root').get('sharedCode');
	data = data.setIn([topicTitle, taskID, 'pending'], true);
	let userID = getState().get('root').getIn(['user', 'id']);
	let token = getState().get('root').getIn(['user', 'token']);
	let userEmail = getState().get('root').getIn(['user', 'user_email']);
	postUserSharedCode(data.toJS(), userID, token, userEmail)
		.then( response => {
			dispatch(updateErrors(''));
			dispatch(updateMessage('Your code has been submitted and will be marked by an instructor soon!'));
			timeoutNotices(dispatch, updateMessage, noticeDuration);
			dispatch(userSharedCode(fromJS(response.data))); // update state
			const username = getState().get('root').getIn(['user', 'username']);
			sendSlackNotification(username);
		})
		.catch( error => {
			dispatch(updateErrors('Sorry, we couldn\'t submit your code at this time. Please try again.'))
			timeoutNotices(dispatch, updateErrors, noticeDuration);
		})
}

export const onClickSharedCodeSave = (topicTitle, taskID) => (dispatch, getState) => {
	dispatch(updateErrors(''));
	dispatch(updateMessage(''));
	let data = getState().get('root').get('sharedCode');
	data = data.setIn([topicTitle, taskID, 'newFeedback'], false); // assume if they are saving that they have read any feedback
	let userID = getState().get('root').getIn(['user', 'id']);
	let token = getState().get('root').getIn(['user', 'token']);
	let userEmail = getState().get('root').getIn(['user', 'user_email']);
	postUserSharedCode(data.toJS(), userID, token, userEmail)
		.then( response => {
			dispatch(updateErrors(''));
			dispatch(updateMessage('Your code has been saved!'));
			timeoutNotices(dispatch, updateMessage, noticeDuration);
			dispatch(userSharedCode(fromJS(response.data))); // update state
		})
		.catch( error => {
			dispatch(updateErrors('Sorry, we couldn\'t save your code at this time. Please try again.'))
			timeoutNotices(dispatch, updateErrors, noticeDuration);
		})
}

export const markFeedbackRead = (topicTitle, taskID) => (dispatch, getState) => {
	let data = getState().get('root').get('sharedCode');
	data = data.setIn([topicTitle, taskID, 'newFeedback'], false); 
	let userID = getState().get('root').getIn(['user', 'id']);
	let token = getState().get('root').getIn(['user', 'token']);	
	let userEmail = getState().get('root').getIn(['user', 'user_email']);
	postUserSharedCode(data.toJS(), userID, token, userEmail)
		.then( response => {
			dispatch(userSharedCode(fromJS(response.data))); // update state
		});
}

export const sharedCodeFeedbackSubmit = (student, comment, topicID, taskID) => (dispatch, getState) => {
	dispatch(updateErrors(''));
	dispatch(updateMessage(''));
	let data = student.get('userSharedCode');
	let feedbackArray = data.getIn([topicID, taskID, 'feedback']) || List([]); // if no existing feedback start new array
	feedbackArray = feedbackArray.unshift(comment); // add new comment
	data = data.setIn([topicID, taskID, 'feedback'], feedbackArray)
				.setIn([topicID, taskID, 'newFeedback'], true)
				.setIn([topicID, taskID, 'pending'], false);

	let token = getState().get('root').getIn(['user', 'token']);				
	postUserSharedCode(data.toJS(), student.get('id'), token)
		.then( response => {
			dispatch(updateErrors(''));
			dispatch(updateMessage('Your feedback has been submitted!'));
			timeoutNotices(dispatch, updateMessage, noticeDuration);
			dispatch(sharedCodeFeedback(data, student.get('cohort'), student.get('id'))); // update state
		})
		.catch( error => {
			dispatch(updateErrors('Sorry, we couldn\'t save your feedback at this time. Please try again.'))
			timeoutNotices(dispatch, updateErrors, noticeDuration);
		})
}

export const checkDataFreshness = () => (dispatch, getState) => {
	const currentDataFreshness = getState().get('root').get('dataFreshness'),
	      userId = getState().get('root').get('user').get('id'),
	      token = getState().get('root').get('user').get('token');

	if (currentDataFreshness === null) {
		// if no data freshness is recorded
		// set it to zero so that fresh data
		// will definitely be fetched next check. 
		// This also prevents a duplicate API call
		dispatch(setDataFreshness(0));
		return;
	}

	getDataFreshness(userId).then( ({ data }) => {
		// get new data if current data is out of date
		if (new Date(data) > new Date(currentDataFreshness)) {
			dispatch(getData(token));
		}
	});
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

const userSharedCode = (data) => ({
	type: USER_SHARED_CODE,
	data,
})

const sharedCodeFeedback = (data, cohort, studentID) => ({
	type: SHARED_CODE_FEEDBACK,
	data,
	cohort,
	studentID,
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
	return axios.get('/wp-json/cf/prep/students/', {
		// only return user data for the logged in user
		headers: {'Authorization': 'Bearer ' + token},
	})
}

function getUserData(token, userEmail) {
	return axios.get(`/wp-json/cf/prep/user/${ userEmail }`, {
		// only return user data for the logged in user
		headers: {'Authorization': 'Bearer ' + token},
	});
}

function postUserProgress(data, userID, token) {
	axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
	return axios.post('/wp-json/cf/prep/' + userID + '/progress', {
    	data: data,
  })
}

function postUserAssessmentData(data, userID, token) {
	axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
	return axios.post('/wp-json/cf/prep/' + userID + '/assessment', {
    	data: data,
  })
}

function postUserSharedCode(data, userID, token, email) {
	axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
	return axios.post('/wp-json/cf/prep/' + userID + '/sharedcode', {
		data: data,
		email: email,
	})
}

function getTopics() {
	return axios.get('/wp-json/cf/prep/topics')
} 

function postUserData(data) {
	return axios.post('/wp-json/cf/prep/register-user', { 
		data: data,
	})
}

function postIssue(data) {
	return axios.post('/wp-json/cf/prep/issue', { 
		data: data,
	})
}

function getDataFreshness(id) {
	return axios.get(`wp-json/cf/prep/${id}/timestamp`);
}