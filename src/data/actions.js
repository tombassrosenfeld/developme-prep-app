import axios from '../data/axios';
import { formatJSON } from '../utilities/utilities';

// the reducer will need these
export const AUTHENTICATE = Symbol("AUTHENTICATE");
export const LOGOUT = Symbol("LOGOUT");
export const ONFORMELEMENTCHANGE = Symbol("ONFORMELEMENTCHANGE");
export const API_DATA = Symbol("API_DATA");
export const REQUEST_DATA_FROM_API = Symbol("REQUEST_DATA_FROM_API");
export const UPDATE_ISLOADED = Symbol("UPDATE_ISLOADED");
export const ONCLICK_ICON = Symbol("ONCLICK_ICON");

// the container will need these
const apiData = (data) => ({
    type: API_DATA,
    data: formatJSON(data),
});

function getModules(key) {
	console.log(key);
	return axios.get('cf_preparation', {
    	// headers: {'Authorization': key}
    })
} 

function getUserData(key) {
	console.log(key);
	return axios.get('posts', {
    	// headers: {'Authorization': key}
    })
}

const getData = (key) => dispatch => {
    // TODO error handling
  //   axios.all([getModules(key), getUserData(key)])
		// .then(axios.spread(function (modules, userData) {
	 //    	console.log('this worked!');
	 //      	return apiData(modules.data);
		// })).catch(function(error){
		// 	console.log(error);
		// });
	getModules(key).then(function(response) {
    	console.log(response.data);
	    dispatch(apiData(response.data));
	})
};

export const authenticate = (username, password) => dispatch => {
	axios.post('http://developme.box/wp-json/jwt-auth/v1/token', {
		username: username,
		password: password,
	})
	.then(function(response){
		dispatch({type: AUTHENTICATE, authKey: response.data.token});
		dispatch(getData(response.data.token));
	})
	.catch(function(error){
		console.log('unable to authenticate user'); // TODO: this should be a login error
	})
};

export const logOut = () => ({
	type: LOGOUT,
})

export const onFormElementChange = (id, val) => ({
	type: ONFORMELEMENTCHANGE,
	id,
	val,
})

export const onClickIcon = (id) => ({
    type: ONCLICK_ICON,
    id,
});