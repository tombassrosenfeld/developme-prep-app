// the reducer will need these
export const DISPATCH_DATA = Symbol("DISPATCH_DATA");
export const REQUEST_DATA_FROM_API = Symbol("REQUEST_DATA_FROM_API");
export const UPDATE_ISLOADED = Symbol("UPDATE_ISLOADED");

// the container will need these
export const dispatchData = (data) => ({
    type: DISPATCH_DATA,
    data,
});

export const requestDataFromAPI = () => ({
    type: REQUEST_DATA_FROM_API,
});