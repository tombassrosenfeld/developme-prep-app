export const LOGOUT = Symbol("LOGOUT");
export const SET_REGISTERING = Symbol("SET_REGISTERING");
export const SET_USER_REGISTERED = Symbol("SET_USER_REGISTERED");
export const CANCEL_REGISTRATION = Symbol("CANCEL_REGISTRATION");
export const ONFORMELEMENTCHANGE = Symbol("ONFORMELEMENTCHANGE");
export const ONCLICK_ICON = Symbol("ONCLICK_ICON");
export const UPDATE_ERRORS = Symbol("UPDATE_ERRORS");
export const UPDATE_MESSAGE = Symbol("UPDATE_MESSAGE");
export const DELETE_ASSESSMENT_DATA = Symbol("DELETE_ASSESSMENT_DATA");
export const GET_ARCHIVED_ASSESSMENT_DATA = Symbol("GET_ARCHIVED_ASSESSMENT_DATA");
export const UPDATEISSUE = Symbol("UPDATEISSUE");
export const UPDATEISSUEFALSE = Symbol("UPDATEISSUEFALSE");
export const UPDATESHAREDCODE = Symbol("UPDATESHAREDCODE");
export const SET_ACTIVE_MODULE = Symbol("SET_ACTIVE_MODULE");
export const SET_DATA_FRESHNESS = Symbol("SET_DATA_FRESHNESS");

export const logOut = () => ({
	type: LOGOUT,
})
export const setRegistering = () => ({
	type: SET_REGISTERING,
})
export const setUserRegistered = data => ({
	type: SET_USER_REGISTERED,
	data,
})
export const cancelRegistration = () => ({
	type: CANCEL_REGISTRATION,
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

export const updateErrors = (errorMessage) => ({
	type: UPDATE_ERRORS,
	errorMessage,
})

export const updateMessage = (message) => ({
	type: UPDATE_MESSAGE,
	message,
})

export const deleteAssessmentData = (topicTitle, assessmentID, assessment) => ({
	type: DELETE_ASSESSMENT_DATA,
	topicTitle,
	assessmentID,
	assessment
});

export const getArchivedAssessmentData = (topicTitle, assessmentID, assessment) => ({
	type: GET_ARCHIVED_ASSESSMENT_DATA,
	topicTitle, 
	assessmentID,
	assessment
})

export const updateIssue = () => ({
	type: UPDATEISSUE,
})

export const updateIssueFalse = () => ({
	type: UPDATEISSUEFALSE,
})

export const updateSharedCode = (code, topicTitle, taskID) => ({
	type: UPDATESHAREDCODE,
	code, topicTitle, taskID
})

export const setActiveModule = i => ({
	type: SET_ACTIVE_MODULE,
	i
})

export const setDataFreshness = dataFreshness => ({
	type: SET_DATA_FRESHNESS,
	dataFreshness,
})