import { Map, List } from "immutable";

export const preventDefault =  (e) => e.preventDefault();

// rewrite this function if the API changes 
export const modulesDataToJSON = (modulesData) => {
	let formattedJSON = modulesData.map((item, i) => Map({
									id: i, 
									title: item.title.rendered, 
									short_title: item.acfs.short_title,
									description: item.acfs.description,
									tasks: item.acfs.tasks ? item.acfs.tasks : [],
									selected: 'selected',
								}));
	return List(formattedJSON);
}

export const userDataToJSON = (userData, userName) => {
	// find the correct user by checking who we have in the state
	let user = userData.filter((user) => {
		return user.name === userName;
	}, '')[0];

	console.log(user);
	return user;
}