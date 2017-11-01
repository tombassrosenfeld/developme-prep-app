import axios from '../data/axios';
import { formatJSON } from '../utilities/utilities';

// the reducer will need these
export const AUTHENTICATE = Symbol("AUTHENTICATE");
export const LOGOUT = Symbol("LOGOUT");
export const ONFORMELEMENTCHANGE = Symbol("ONFORMELEMENTCHANGE");
export const MODULES_DATA = Symbol("MODULES_DATA");
export const REQUEST_DATA_FROM_API = Symbol("REQUEST_DATA_FROM_API");
export const UPDATE_ISLOADED = Symbol("UPDATE_ISLOADED");
export const ONCLICK_ICON = Symbol("ONCLICK_ICON");

// the container will need these
const modulesData = (data) => ({
    type: MODULES_DATA,
    data: formatJSON(data),
});

export const getModules = () => dispatch => {
    // TODO error handling
    return axios.get('cf_preparation').then(response => {
      return dispatch(modulesData(response.data));
    })
};

export const authenticate = (username, password) => dispatch => {
	axios.post('http://developme.box/wp-json/jwt-auth/v1/token', {
		username: username,
		password: password,
	})
	.then(function(response){
		return dispatch({type: AUTHENTICATE, authKey: response.data.token});
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