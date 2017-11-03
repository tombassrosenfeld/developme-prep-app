export const LOGOUT = Symbol("LOGOUT");
export const ONFORMELEMENTCHANGE = Symbol("ONFORMELEMENTCHANGE");
export const ONCLICK_ICON = Symbol("ONCLICK_ICON");

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