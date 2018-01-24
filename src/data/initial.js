import { Map, List } from "immutable";

let data = Map({ id: 1, title: "Blanditiis quidem aut sit", short_title: "CSS", description: "Molestiae omnis fugiat laborum Quis sint aute ea odio hic qui officiis ab molestiae", tasks: [
	{task: "Autem consequatur", description: "Laudantium ut veritatis et magnam ducimus quis aute cum sunt ex explicabo Nemo blanditiis excepturi", resources: [
			{title: "resource1", resource_type: "fa fa-eye", description: "Laudantium ut veritatis et magnam ducimus", link: "https://www.google.com"},
			{title: "resource1", resource_type: "fa fa-file-o", description: "Laudantium ut veritatis et magnam ducimus", link: "https://www.google.com"},
			{title: "resource1", resource_type: "fa fa-wifi", description: "Laudantium ut veritatis et magnam ducimus", link: "https://www.google.com"},
			]  
		}
	], selected: false });


export default Map({
	// isLoaded: true,
	isLoaded: false,
	// loggedIn: true,
	loggedIn: false,
	// topics: List([
		// data, data, data, data, data
	// ]),
	topics: List([1, 2, 3, 4, 5]),
	// user: Map({ id: '', username: 'Peter Thomas', password: '', token: null }),
	user: Map({ id: '', username: '', password: '', token: null }),
	userProgress: List([]),
	errors: '',
});
