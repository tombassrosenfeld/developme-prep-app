import axios from '../data/axios';
import { modulesDataToJSON } from '../utilities/utilities';
import { userDataToJSON } from '../utilities/utilities';

export const AUTHENTICATE = Symbol("AUTHENTICATE");
export const LOGOUT = Symbol("LOGOUT");
export const ONFORMELEMENTCHANGE = Symbol("ONFORMELEMENTCHANGE");
export const MODULES_DATA = Symbol("MODULES_DATA");
export const USER_DATA = Symbol("USER_DATA");
export const ONCLICK_ICON = Symbol("ONCLICK_ICON");

// when user submits login details, authenticate is called ...
export const authenticate = (username, password) => dispatch => {
	axios.post('http://developme.box/wp-json/jwt-auth/v1/token', {
		username: username,
		password: password,
	})
	.then(function(response){
		// dispatches key to state
		dispatch({type: AUTHENTICATE, authKey: response.data.token});
		// and immediately calls api for module and user data
		dispatch(getData(response.data.token, username));
	})
	.catch(function(error){
		console.log('unable to authenticate user'); // TODO: this should be a login error
	})
};

// ...Fetches the user and modules data from the API, formats then dispatches to the reducer
const getData = (token, username) => dispatch => {
	getModules().then(function(response) {
		console.log(response);
	    dispatch(modulesData(response.data));
	}).catch(function(error) {
		console.log('error fetching module data'); // TODO: this should be a login error
	})

	getUserData(token, username).then(function(response) {	
		dispatch(userData(response.data, username));
	}).catch(function(error) {
		console.log('error fetching user data'); // TODO: this should be a login error
	})
};

// formatting of responses
const modulesData = (data) => ({
    type: MODULES_DATA,
    data: modulesDataToJSON(data),
});

const userData = (data, username) => ({
	type: USER_DATA,
	data: userDataToJSON(data, username),
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

function getUser(id, token) {
	return axios.get('users/' + id, {
		headers: {'Authorization': token}	
	})
}



export const logOut = () => ({
	type: LOGOUT,
})

// binding of login form to state
export const onFormElementChange = (id, val) => ({
	type: ONFORMELEMENTCHANGE,
	id,
	val,
})

// navigation
export const onClickIcon = (id) => ({
    type: ONCLICK_ICON,
    id,
});