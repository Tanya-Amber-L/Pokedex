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
    message: "",
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
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        this.singlePokemon = res.data;
        this.isLoading = false;
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
    sortByIncrementName() {
      this.pokemons = this.pokemons.sort((a, b) => {
        return a.name > b.name ? 1 : -1;
      });
      this.filteredPokemons = this.filteredPokemons.sort((a, b) => {
        return a.name > b.name ? 1 : -1;
      });
    },
    sortByDecrementName() {
      this.pokemons = this.pokemons.sort((a, b) => {
        return a.name < b.name ? 1 : -1;
      });
      this.filteredPokemons = this.filteredPokemons.sort((a, b) => {
        return a.name < b.name ? 1 : -1;
      });
    },
    sortByIncrementId() {
      this.pokemons = this.pokemons.sort((a, b) => {
        return a.id > b.id ? 1 : -1;
      });
      this.filteredPokemons = this.filteredPokemons.sort((a, b) => {
        return a.id > b.id ? 1 : -1;
      });
    },
    sortByDecrementId() {
      this.pokemons = this.pokemons.sort((a, b) => {
        return a.id < b.id ? 1 : -1;
      });
      this.filteredPokemons = this.filteredPokemons.sort((a, b) => {
        return a.id < b.id ? 1 : -1;
      });
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
  },
});
