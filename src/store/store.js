import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";
import axios from "axios";

export const usePokeStore = defineStore("main", {
	state: () => ({
		pokemons: [],
		singlePokemon: [],
		favorites: useStorage("Favorites", []),
		isLoading: true,
	}),
	getters: {
		getPokemons(state) {
			return state.pokemons;
		},
		getSinglePokemon(state) {
			return state.singlePokemon;
		},
		getFavorites(state) {
			return state.favorites;
		},
	},
	actions: {
		async fetchAllPokemons() {
			try {
				this.isLoading = true;
				const res = await axios.get(
					"https://stoplight.io/mocks/appwise-be/pokemon/57519009/pokemon"
				);
				this.pokemons = res.data;
				this.isLoading = false;
			} catch (error) {
				alert(error);
				console.log(error);
			}
		},
		async fetchSinglePokemon(id) {
			try {
				this.isLoading = true;
				const res = await axios.get(
					`https://pokeapi.co/api/v2/pokemon/${id}`
				);
				this.singlePokemon = res.data;
				this.isLoading = false;
			} catch (error) {
				alert(error);
				console.log(error);
			}
		},
		addToFavorites(pokemon) {
			this.favorites.push(pokemon);
			console.log(this.favorites);
		},
	},
});
