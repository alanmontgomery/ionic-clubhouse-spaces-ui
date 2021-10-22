import { Store } from "pullstate";

const PeopleStore = new Store({
	
	people: [
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
	]
});

export default PeopleStore;

export const getPeople = amount => {

	let tempPeople = [ ...PeopleStore.getRawState().people ];
	return tempPeople.sort(() => Math.random() - Math.random()).slice(0, amount);
}

// export const markActiveAsDone = () => {

// 	PeopleStore.update(state => {
		
// 		const scoreboardIndex = state.scoreboards.findIndex(scoreboard => scoreboard.active === true);
// 		state.scoreboards[scoreboardIndex].done = true;
// 	});
// }

// export const addScoreboard = (players, details) => {

// 	PeopleStore.update(s => { s.scoreboards = s.scoreboards.map(scoreboard => scoreboard.active = false) });

// 	PeopleStore.update(state => {

// 		state.scoreboards.forEach((scoreboard, index) => {

// 			state.scoreboards[index].active = false;
// 		});
// 	});
	

// 	const newScoreboard = {

// 		id: Date.now(),
// 		title: details.title,
// 		players: [ ...players ],
// 		active: true
// 	};

// 	const playersToSave = players.filter(p => p.saved === true);

// 	PeopleStore.update(s => { s.scoreboards = [ ...s.scoreboards, newScoreboard ] });
// 	PeopleStore.update(s => { s.players = [ ...s.players, ...playersToSave ] });
// }

// export const addScoreToPlayer = (scoreboardId, playerIndex) => {

// 	PeopleStore.update(state => {
		
// 		const scoreboardIndex = state.scoreboards.findIndex(scoreboard => scoreboard.id === parseInt(scoreboardId));
// 		state.scoreboards[scoreboardIndex].players[playerIndex].score += 1;

// 		state.scoreboards[scoreboardIndex].players.sort((a, b) => {
// 			if (a.score > b.score) return -1
// 			return a.score < b.score ? 1 : 0
// 		});
// 	});
// }