import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";
import axios from "axios";

export const usePokeStore = defineStore("main", {
	state: () => ({
		pokemons: [],
		singlePokemon: [],
		favorites: useStorage("Favorites", []),
		isLoading: true,
		filteredPokemons: [],
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
		removeFromFavorites(pokemonId) {
			this.favorites.forEach((pokemon, i) => {
				if (pokemonId === pokemon.id) {
					this.favorites.splice(i, 1);
				}
				console.log("removed:", pokemon);
			});
		},
		filterPokemons(search) {
			// this.pokemons.filter((pokemon) => {
			// 	if (pokemon.name.toLowerCase().includes(search.toLowerCase())) {
			// 		console.log("yes");
			// 	}
			// });
			console.log(search);
		},
	},
});
