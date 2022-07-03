<script setup>
import { usePokeStore } from "../store/store";

const store = usePokeStore();
</script>
<template>
  <div class="flex flex-col justify-center">
    <p class="text-xl text-center m-3 mt-8">{{ store.message }}</p>
    <button
      @click="
        store.message = '';
        store.inputValue = '';
      "
      class="font-semibold text-white bg-gray-800 px-10 py-2 m-3 rounded-full transition-all hover:shadow-xl"
    >
      Terug naar de pokemons lijst
    </button>
  </div>
</template>
