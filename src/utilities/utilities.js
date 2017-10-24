import { Map, List } from "immutable";

export const preventDefault =  (e) => e.preventDefault();

// rewrite this function if the API changes 
export const formatJSON = (jsonFromAPI) => {
	let formattedJSON = jsonFromAPI.map((item, i) => Map({
									id: i, 
									title: item.title.rendered, 
									short_title: item.acfs.short_title,
									description: item.acfs.description,
									tasks: item.acfs.tasks ? item.acfs.tasks : [],
									selected: 'selected',
								}));
	return List(formattedJSON);
}