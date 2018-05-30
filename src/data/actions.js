export const LOGOUT = Symbol("LOGOUT");
export const TOGGLEFORGOT = Symbol("TOGGLEFORGOT");
export const UPDATEFORGOT = Symbol("UPDATEFORGOT");
export const ONFORMELEMENTCHANGE = Symbol("ONFORMELEMENTCHANGE");
export const ONCLICK_ICON = Symbol("ONCLICK_ICON");
export const UPDATE_ERRORS = Symbol("UPDATE_ERRORS");
export const DELETE_ASSESSMENT_DATA = Symbol("DELETE_ASSESSMENT_DATA");
export const GET_ARCHIVED_ASSESSMENT_DATA = Symbol("GET_ARCHIVED_ASSESSMENT_DATA");
export const UPDATEISSUE = Symbol("UPDATEISSUE");
export const UPDATEISSUEFALSE = Symbol("UPDATEISSUEFALSE");

export const logOut = () => ({
	type: LOGOUT,
})
export const toggleForgot = () => ({
	type: TOGGLEFORGOT,
})
export const updateForgot = () => ({
	type: UPDATEFORGOT,
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
