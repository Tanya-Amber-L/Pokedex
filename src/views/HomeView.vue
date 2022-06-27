<script setup>
import HomeHeader from '../components/HomeHeader.vue';
import { ref, onMounted, computed } from 'vue';
import { usePokeStore } from '../store/store.js';
import PokemonList from '../components/PokemonList.vue';

const store = usePokeStore();

const pokemons = computed(() => {
    return store.getPokemons
})

onMounted(() => {
    store.fetchAllPokemons()
})

console.log(pokemons)

</script>

<template>
    <main>
        <HomeHeader />
        <a href="/detail/1">test</a>
        <PokemonList :pokemons="pokemons" />
    </main>
</template>
