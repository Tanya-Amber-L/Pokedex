<script setup>
import HomeHeader from '../components/HomeHeader.vue';
import { onMounted} from 'vue';
import { usePokeStore } from '../store/store.js';
import PokemonList from '../components/PokemonList.vue';
import { storeToRefs } from 'pinia';
import Loader from '../components/Loader.vue';
import Trainer from '../components/Trainer.vue';

const store = usePokeStore();

const { pokemons, isLoading, filteredPokemons } = storeToRefs(store);

onMounted(() => {
    store.fetchAllPokemons()
    store.filteredPokemons = []
})

</script>

<template>
    <main class="min-h-screen">
        <HomeHeader/>
        <Trainer />
        <Loader v-if="isLoading"/>
        <PokemonList v-if="!isLoading" :pokemons="filteredPokemons.length == 0 ? pokemons : filteredPokemons" />
    </main>
</template>
