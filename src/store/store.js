import { defineStore } from "pinia";
import axios from "axios";

export const usePokeStore = defineStore("main", {
	state: () => ({
		pokemons: [],
	}),
	getters: {
		getPokemons(state) {
			return state.pokemons;
		},
	},
	actions: {
		async fetchAllPokemons() {
			try {
				const res = await axios.get(
					"https://stoplight.io/mocks/appwise-be/pokemon/57519009/pokemon"
				);
				this.pokemons = res.data;
				console.log(this.pokemons);
			} catch (error) {
				alert(error);
				console.log(error);
			}
		},
	},
});
