import axios from '../data/axios';
import { modulesDataToJSON } from '../utilities/utilities';

export const UPDATE_TOKEN = Symbol("UPDATE_TOKEN");
export const MODULES_DATA = Symbol("MODULES_DATA");
export const USER_DATA = Symbol("USER_DATA");
export const USER_ID = Symbol("USER_ID");

// when user submits login details, authenticate is called ...
export const authenticate = (username, password) => dispatch => {
	axios.post('http://developme.box/wp-json/jwt-auth/v1/token', {
		username: username,
		password: password,
	})
	.then(function(response){
		// dispatches key to state
		dispatch(updateToken(response.data.token));
		// and immediately calls api for module and user data
		dispatch(getData(response.data.token, username));
	})
	.catch(function(error){
		console.log('unable to authenticate user'); // TODO: this should be a login error
	})
};

// ...Fetches the user and modules data from the API, formats then dispatches to the reducer
const getData = (token, username) => dispatch => {
	getUserData(token, username).then(function(response) {	
		// find the matching userID
		let user = response.data.filter((user) => {
			return user.name === username;
		}, '')[0];
		// and update the user ID in the state
		dispatch(userID(user.id));
	}).catch(function(error) {
		console.log('error fetching user data'); // TODO: this should be a login error
	})
	getModules().then(function(response) {
	    dispatch(modulesData(response.data));
	}).catch(function(error) {
		console.log('error fetching module data'); // TODO: this should be a login error
	})
};

const updateToken = (token) => ({
	type: UPDATE_TOKEN, 
	token,
})

// formatting of responses
const modulesData = (data) => ({
    type: MODULES_DATA,
    data: modulesDataToJSON(data),
});

const userID = (id) => ({
	type: USER_ID,
	id,
})

// API calls
function getModules() {
	return axios.get('cf_preparation');
} 

function getUserData(token) {
	return axios.get('users', {
    	headers: {'Authorization': token}
    })
}
