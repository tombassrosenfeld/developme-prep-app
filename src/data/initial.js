import { Map, List } from "immutable";

let data = Map({ id: 1, title: "Blanditiis quidem aut sit", short_title: "CSS", description: "Molestiae omnis fugiat laborum Quis sint aute ea odio hic qui officiis ab molestiae", tasks: [{instructions: "Laudantium ut veritatis et magnam ducimus quis aute cum sunt ex explicabo Nemo blanditiis excepturi", link: "Temporibus mollitia eum quis consequatur vero quaerat similique aut autem dolore culpa culpa et totam totam", task: "Autem consequatur" }, {instructions: "Laudantium ut veritatis et magnam ducimus quis aute cum sunt ex explicabo Nemo blanditiis excepturi", link: "Temporibus mollitia eum quis consequatur vero quaerat similique aut autem dolore culpa culpa et totam totam", task: "Autem consequatur" }], selected: false });

export default Map({
	isLoaded: true,
	// isLoaded: false,
	loggedIn: true,
	// loggedIn: false,
	topics: List([
		data, data, data, data, data
	]),
	// topics: List([1, 2, 3, 4, 5]),
	user: Map({ id: '', username: 'Peter Thomas', password: '', token: null }),
	// user: Map({ id: '', username: '', password: '', token: null }),
	userProgress: List([]),
	errors: '',
});
