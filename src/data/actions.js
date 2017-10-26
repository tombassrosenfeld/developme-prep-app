import axios from '../data/axios';
import { formatJSON } from '../utilities/utilities';

// the reducer will need these
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
    let apiCall = axios.get('cf_preparation'); // TODO error handling
    return apiCall.then(response => {
      return dispatch(modulesData(response.data));
    })
};

export const onClickIcon = (id) => ({
    type: ONCLICK_ICON,
    id,
});