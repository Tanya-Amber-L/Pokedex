<script setup>
import HomeHeader from '../components/HomeHeader.vue';
import { ref, onMounted, computed } from 'vue';
import { usePokeStore } from '../store/store.js';
import PokemonList from '../components/PokemonList.vue';
import { storeToRefs } from 'pinia';

const store = usePokeStore();

const { pokemons, isLoading } = storeToRefs(store);

// const pokemons = computed(() => {
//     return store.getPokemons
// })

onMounted(() => {
    store.fetchAllPokemons()
})

console.log(pokemons)

</script>

<template>
    <main>
        <p v-if="isLoading" class="text-3xl">Loadinggggg</p>
        <HomeHeader v-if="!isLoading" />
        <PokemonList v-if="!isLoading" :pokemons="pokemons" />
    </main>
</template>
