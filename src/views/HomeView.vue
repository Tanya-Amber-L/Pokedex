<script setup>
import HomeHeader from "../components/HomeHeader.vue";
import { onMounted } from "vue";
import { usePokeStore } from "../store/store.js";
import PokemonList from "../components/PokemonList.vue";
import { storeToRefs } from "pinia";
import Loader from "../components/Loader.vue";
import Trainer from "../components/Trainer.vue";
import NoSearchResult from "../components/NoSearchResult.vue";

const store = usePokeStore();

const { pokemons, isLoading, filteredPokemons, message } = storeToRefs(store);

onMounted(() => {
  store.fetchAllPokemons();
  store.filteredPokemons = [];
});
</script>

<template>
  <main class="min-h-screen">
    <div class="max-w-6xl m-auto">
      <HomeHeader />
      <Trainer />
      <Loader v-if="isLoading" />
      <NoSearchResult v-if="message" />
      <PokemonList
        v-if="!isLoading"
        :pokemons="
          filteredPokemons.length == 0 && !message ? pokemons : filteredPokemons
        "
      />
    </div>
  </main>
</template>
