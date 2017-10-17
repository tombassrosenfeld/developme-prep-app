import { Map, List } from "immutable";

// a mockup of the kind of data we might get through the WP API. Should the app do these steps:
// 1. build initial state from an initial API call 
// 2. when changes are made, update state and send API call as seperate things, keeping the two synchronised but not relying on replies to update
export default Map({
	modules: List([ 1, 2, 3, 4, 5, 6]),
});