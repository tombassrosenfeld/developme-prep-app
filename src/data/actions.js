// the reducer will need these
export const DISPATCH_DATA = Symbol("DISPATCH_DATA");
export const UPDATE_ISLOADED = Symbol("UPDATE_ISLOADED");

// the container will need these
export const dispatchData = (data) => ({
    type: DISPATCH_DATA,
    data,
});