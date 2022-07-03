<script setup>
import { RouterLink } from "vue-router";
import { usePokeStore } from "../store/store";

const store = usePokeStore();
const numberFavorites = store.favorites.length;
</script>

<template>
  <section
    class="mx-2 xs:mx-6 mt-4 p-4 h-28 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-lg text-white"
  >
    <RouterLink
      class="h-full flex flex-col justify-end relative"
      to="/favorites"
    >
      <h1 class="text-lg font-semibold">Favorieten</h1>
      <p class="opacity-70 font-medium">
        {{ numberFavorites }}
        {{ numberFavorites === 1 ? "pokemon" : "pokemons" }}
      </p>
      <img
        class="absolute opacity-30 right-0 h-20"
        src="../assets/ball.png"
        alt=""
      />
    </RouterLink>
  </section>
</template>
