// import { Map, List } from "immutable";
// import axios from './axios';

// export default () => {
// 	let apiCall = axios.get('cf_preparation'); // we need to get a .then() going on! // what about errors, when it fails?
// 	apiCall.then(response => {
// 		let data = response.data;
// 		console.log(data);
// 		return Map({ 
// 			modules: data.map((post, i) => Map({ id: i, title: post.title.rendered, }))
// 		});
// 	})
// }

// API calls solution;
// Problem - when the app loads the initial API promise returns after the app has rendered, so it says - whoah there! all of your methods don't mean anything! 
// Solution - have an initial state that the app loads from, then, when the promise has returned, dispatch something to rebuild the state.
// Solution - in your initial state, have an 'is_loaded:' property with a simple true or false. Make App.js stateful and use an if statement to only render the header if 'is_loaded' is false. Make your api call from App.js, the return from the promise should then dispatch the state, change is_loaded to true and then render the other components... Sheesh!

import { Map, List } from "immutable";
import axios from './axios';

let apiCall = axios.get('cf_preparation'); // we need to get a .then() going on! // what about errors, when it fails?
apiCall.then(response => {
	let data = response.data;
	console.log(data);
})

export default Map({
	modules: List([1,2,3,4,5]),
});

