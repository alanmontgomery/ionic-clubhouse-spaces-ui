export const people = () => [

	{
		name: "Andrew Bennet",
		image: "/avatars/Avatar-1.png"
	},
	{
		name: "Elizabeth Moore",
		image: "/avatars/Avatar-2.png"
	},
	{
		name: "Oscar Clarke",
		image: "/avatars/Avatar-3.png"
	},
	{
		name: "Sandra Simpson",
		image: "/avatars/Avatar-4.png"
	},
	{
		name: "Sophia Price",
		image: "/avatars/Avatar-5.png"
	},
	{
		name: "Jasmine Ruiz",
		image: "/avatars/Avatar-6.png"
	},
	{
		name: "Adriana Bonny",
		image: "/avatars/Avatar-7.png"
	},
	{
		name: "Maya Watson",
		image: "/avatars/Avatar-8.png"
	},
	{
		name: "Tatum Porter",
		image: "/avatars/Avatar-9.png"
	},
	{
		name: "Jackson Watts",
		image: "/avatars/Avatar-10.png"
	},
	{
		name: "Lana Cooper",
		image: "/avatars/Avatar-11.png"
	},
	{
		name: "Mateo Hoffman",
		image: "/avatars/Avatar-12.png"
	},
	{
		name: "Harper James",
		image: "/avatars/Avatar-13.png"
	},
	{
		name: "Edgar Douglas",
		image: "/avatars/Avatar-14.png"
	},
	{
		name: "Lilly Hale",
		image: "/avatars/Avatar-15.png"
	},
	{
		name: "Jade Williams",
		image: "/avatars/Avatar-16.png"
	},
	{
		name: "Cayden Long",
		image: "/avatars/Avatar-17.png"
	},
	{
		name: "Millie Klein",
		image: "/avatars/Avatar-18.png"
	},
	{
		name: "Heidi Toffer",
		image: "/avatars/Avatar-19.png"
	},
	{
		name: "Alaya Bailey",
		image: "/avatars/Avatar-20.png"
	},
	{
		name: "Laura Diaz",
		image: "/avatars/Avatar-21.png"
	},
	{
		name: "Alina Gomez",
		image: "/avatars/Avatar-22.png"
	},
	{
		name: "Rachel Tiffin",
		image: "/avatars/Avatar-23.png"
	},
	{
		name: "Liz Faxty",
		image: "/avatars/Avatar-24.png"
	},
	{
		name: "Sarah Goodman",
		image: "/avatars/Avatar-25.png"
	},
	{
		name: "Melissa Bengin",
		image: "/avatars/Avatar-26.png"
	},
	{
		name: "Stephanie Morter",
		image: "/avatars/Avatar-27.png"
	},
	{
		name: "Rebecca Slims",
		image: "/avatars/Avatar-28.png"
	},
	{
		name: "Arielle May",
		image: "/avatars/Avatar-29.png"
	},
	{
		name: "Jack Boppes",
		image: "/avatars/Avatar-30.png"
	},
	{
		name: "Christina Rankin",
		image: "/avatars/Avatar-31.png"
	},
	{
		name: "Ronan Murf",
		image: "/avatars/Avatar-32.png"
	},
	{
		name: "Daniel Jackson",
		image: "/avatars/Avatar-33.png"
	},
	{
		name: "Richard Bales",
		image: "/avatars/Avatar-34.png"
	},
	{
		name: "Harmony Martin",
		image: "/avatars/Avatar-35.png"
	},
	{
		name: "Chris Huges",
		image: "/avatars/Avatar-36.png"
	}
];

export const getPeople = amount => {

	let tempPeople = [ ...people ];
	return tempPeople.sort(() => Math.random() - Math.random()).slice(0, amount);
}

export const categories = () => [

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
];

export const talks = () => [

	{
		title: "The future of design systems",
		speakers: 3,
		audience: 14,
		category_id: 1
	},
	{
		title: "Lets talk about ReactJS",
		speakers: 7,
		audience: 239,
		category_id: 2
	},
	{
		title: "How Ionic can transform mobile development",
		speakers: 5,
		audience: 371,
		category_id: 3
	},
	{
		title: "Using capacitor to access native features",
		speakers: 2,
		audience: 587,
		category_id: 3
	},
	{
		title: "Does SASS give you an advantage?",
		speakers: 4,
		audience: 97,
		category_id: 1
	},
	{
		title: "Building a startup from the ground up",
		speakers: 4,
		audience: 316,
		category_id: 4
	},
	{
		title: "How i went from 9-5 to my own boss",
		speakers: 1,
		audience: 33,
		category_id: 4
	},
	{
		title: "Features of the beast, Angular",
		speakers: 3,
		audience: 114,
		category_id: 2
	}
];