import axios from '../data/axios';
import { modulesDataToJSON } from '../utilities/utilities';
import { store } from '../index.js';

export const UPDATE_TOKEN = Symbol("UPDATE_TOKEN");
export const MODULES_DATA = Symbol("MODULES_DATA");
export const USER_DATA = Symbol("USER_DATA");
export const USER_PROGRESS = Symbol("USER_PROGRESS");

// when user submits login details, calls authenticate()
export const authenticate = (username, password) => dispatch => {
	getToken(username, password).then(function(response){
		// dispatches key to state
		dispatch(updateToken(response.data.token));
		// and immediately calls api for module and user data
		dispatch(getData(response.data.token));
	})
	.catch(function(error){
		console.log('unable to authenticate user'); // TODO: this should be a login error
	})
};

// if authentication is sucessful, calls getdata()
const getData = (token) => dispatch => {
	// gets data for all users TODO: is there a better endpoint for this?
	getUserData(token).then(function(response) {
		dispatch(userData(response.data));
		//get user ID from the state
		let userID = store.getState().getIn(['user', 'id']); 

		// get progress data for the current user
		getUserProgress(token, userID).then(function(response) {
			dispatch(userProgress(response.data));
		}).catch(function(error){
			console.log("error fetching user progress data");
		})
	}).catch(function(error) {
		console.log('error fetching user data'); // TODO: this should be a login error
	})

	// gets modules and tasks
	getModules().then(function(response) {
	    dispatch(modulesData(response.data));
	}).catch(function(error) {
		console.log('error fetching module data'); // TODO: this should be a login error
	})
};

// when user clicks on markers
export const onClickUserProgress = (id) => dispatch => {
	//get user progress from the state
	let userProgressArr = store.getState().get('userProgress').toArray();
	var savedProgressArr = store.getState().get('userProgress').toArray();

	if (!userProgressArr.includes(id)) {
		userProgressArr.push(id);
	} else {
		let index = userProgressArr.indexOf(id);
		userProgressArr.splice(index, 1);
	}
	dispatch(userProgress(userProgressArr));
	let userID = store.getState().getIn(['user', 'id']);
	let token = store.getState().getIn(['user', 'token']);
	
	postUserProgress(userID, token, userProgressArr).catch(function(error){
		// if failed to update, roll back to userProgressArr
		console.log('error saving your progress');
		return dispatch(userProgress(savedProgressArr));
	})
}

const updateToken = (token) => ({
	type: UPDATE_TOKEN, 
	token,
})

const userData = (data) => ({
	type: USER_DATA,
	data,
})

const userProgress = (data) => ({
	type: USER_PROGRESS,
	data,
})

const modulesData = (data) => ({
    type: MODULES_DATA,
    data: modulesDataToJSON(data),
});

// API calls
function getToken(username, password) {
	return axios.post('http://developme.box/wp-json/jwt-auth/v1/token', { // TODO: change this when you change the server...
		username: username,
		password: password,
	})
}

function getUserData(token) {
	return axios.get('users', {
    	headers: {'Authorization': token}
    })
}

function getUserProgress(token, userID) {
	return axios.get('http://developme.box/wp-json/cf/prep/' + userID + '/progress', {
    	headers: {'Authorization': token},
    })
}

function postUserProgress(userID, token, data) {
	return axios.post('http://developme.box/wp-json/cf/prep/' + userID + '/progress', {
    	headers: {'Authorization': token},
    	data: data,
    })
}

function getModules() {
	return axios.get('cf_preparation');
} 