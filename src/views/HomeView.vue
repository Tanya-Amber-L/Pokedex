<script setup>
import HomeHeader from '../components/HomeHeader.vue';
import { onMounted} from 'vue';
import { usePokeStore } from '../store/store.js';
import PokemonList from '../components/PokemonList.vue';
import { storeToRefs } from 'pinia';
import Loader from '../components/Loader.vue';
import Trainer from '../components/Trainer.vue';

const store = usePokeStore();

const { pokemons, isLoading } = storeToRefs(store);

onMounted(() => {
    store.fetchAllPokemons()
})

</script>

<template>
    <main>
        <HomeHeader/>
        <Trainer />
        <Loader v-if="isLoading"/>
        <PokemonList v-if="!isLoading" :pokemons="pokemons" />
    </main>
</template>
