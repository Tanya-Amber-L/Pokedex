/* eslint-env node */

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				pokeGrass: "#95C24D",
				pokeWater: "#4592C3",
				pokeGhost: "#7B62A3",
				pokeFire: "#FD7D25",
				pokePoison: "#BA7EC8",
				pokeFlying: "#2dd4e3",
				pokeGround: "#d9b77e",
				pokeRock: "#80612f",
				pokeBug: "#78a150",
				pokeElectric: "#e8b725",
				pokeFairy: "#f390f5",
				pokeFighting: "#fc3838",
				pokePsychic: "#d12ca2",
				pokeSteel: "#636362",
				pokeIce: "#9fd2e3",
				pokeDragon: "#4818d9",
				pokeNormal: "#A3ACAE",
			},
			screens: {
				xs: "375px",
			},
		},
	},
	plugins: [],
};
