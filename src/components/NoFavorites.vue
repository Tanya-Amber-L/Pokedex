<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
  <section class="flex flex-col justify-between">
    <img
      class="w-2/3 max-w-sm m-auto"
      src="../assets/sad-pikachu.png"
      alt="Sad pikachu face"
    />
    <h2 class="text-white text-xl text-center m-3">
      Je hebt nog geen favorieten! <br />
      Ga naar een enkele pokemon pagina om hem bij uw favorieten te zetten.
    </h2>
    <RouterLink
      to="/"
      class="text-center font-semibold text-white bg-gray-800 px-10 py-2 mt-4 mx-3 rounded-full transition-all hover:shadow-xl"
      >Terug naar de pokemons lijst</RouterLink
    >
  </section>
</template>
