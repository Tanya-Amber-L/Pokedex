<script setup>
import { ref } from "vue";
import { usePokeStore } from "../store/store";

const store = usePokeStore();

const search = ref("");

const filter = (search) => {
  store.filteredPokemons = [];
  store.message = "";

  if (search.match(/^[0-9]+$/)) {
    store.pokemons.filter((pokemon) => {
      if (pokemon.id === Number(search)) {
        store.filteredPokemons.push(pokemon);
      }
    });
  } else {
    store.pokemons.filter((pokemon) => {
      let types = () => {
        let array = [];
        pokemon.types.forEach((type) => {
          array.push(type.type.name);
        });
        return array.join(" ");
      };
      if (
        pokemon.name.toLowerCase().includes(search.toLowerCase()) ||
        types().includes(search.toLowerCase())
      ) {
        store.filteredPokemons.push(pokemon);
      }
    });
  }

  if (store.filteredPokemons.length == 0 && search.length !== 0) {
    store.message = "Sorry, er zijn geen pokemons die aan uw verzoek voldoen";
  }
};
</script>
<template>
  <form @submit.prevent="onSubmit">
    <input
      v-model="search"
      @input="filter(search)"
      class="w-full bg-gray-200 rounded-lg border border-slate-300 pr-3 pl-9 py-1 mt-4 focus:outline-none focus:border-blue-400 bg-[url('../assets/search.png')] bg-no-repeat bg-[bottom_5px_left_10px] bg-[length:20px_20px]"
      type="text"
      placeholder="Pokemon zoeken"
    />
  </form>
</template>
