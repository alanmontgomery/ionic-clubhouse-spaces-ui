import { Store } from "pullstate";

const CategoryStore = new Store({
	
	categories: [
		{
			id: 1,
			name: "Design"
		},
		{
			id: 2,
			name: "Javascript"
		},
		{
			id: 3,
			name: "Mobile"
		},
		{
			id: 4,
			name: "Business"
		}
	]
});

export default CategoryStore;