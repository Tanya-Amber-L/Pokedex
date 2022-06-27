import { defineStore } from "pinia";
import axios from "axios";

export const usePokeStore = defineStore("main", {
	state: () => ({
		pokemons: [],
		singlePokemon: [],
	}),
	getters: {
		getPokemons(state) {
			return state.pokemons;
		},
		getSinglePokemon(state) {
			return state.singlePokemon;
		},
	},
	actions: {
		async fetchAllPokemons() {
			try {
				const res = await axios.get(
					"https://stoplight.io/mocks/appwise-be/pokemon/57519009/pokemon"
				);
				this.pokemons = res.data;
				// console.log(this.pokemons);
			} catch (error) {
				alert(error);
				console.log(error);
			}
		},
		async fetchSinglePokemon(id) {
			try {
				const res = await axios.get(
					`https://pokeapi.co/api/v2/pokemon/${id}`
				);
				this.singlePokemon = res.data;
				console.log(this.singlePokemon);
			} catch (error) {
				alert(error);
				console.log(error);
			}
		},
	},
});
