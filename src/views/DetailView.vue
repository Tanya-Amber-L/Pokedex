<script setup>
import About from '../components/About.vue';
import { useRoute } from 'vue-router'
import { ref, onMounted, computed } from 'vue';
import { usePokeStore } from '../store/store.js';

const route = useRoute()
const pokemonId = route.params.id;

const store = usePokeStore();

const pokemon = computed(() => {
  return store.getSinglePokemon
})

onMounted(() => {
    store.fetchSinglePokemon(pokemonId)
})

</script>

<template>
  <main>
    <About />
    <h1>{{pokemon}}</h1>
  </main>
</template>