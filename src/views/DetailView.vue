<script setup>
import { useRoute } from 'vue-router'
import { onMounted} from 'vue';
import { usePokeStore } from '../store/store.js';
import { storeToRefs } from 'pinia';
import { getAccordingBackground } from '../components/functions/getTypeBG.js';
import { Capitalize } from '../components/functions/capitalize.js';
import PokeImage from '../components/PokeImage.vue';
import PokeDetail from '../components/PokeDetail.vue';
import DetailHeader from '../components/DetailHeader.vue';
import PokeStats from '../components/PokeStats.vue';
import Loader from '../components/Loader.vue';

const route = useRoute()
const pokemonId = route.params.id;

const store = usePokeStore();

const {singlePokemon, isLoading} = storeToRefs(store);
// taking the direct states from the store

onMounted(() => {
    store.fetchSinglePokemon(pokemonId)
})
</script>

<template>
    <Loader v-if="isLoading" />
    <main v-if="!isLoading" class="text-white p-4 min-h-screen" :class="getAccordingBackground(singlePokemon.types[0].type.name)">
        <DetailHeader />

        <h1 v-if="!isLoading" class="text-4xl font-semibold">{{Capitalize(singlePokemon.name)}}</h1>
        <PokeImage v-if="!isLoading" :image="singlePokemon.sprites.other['official-artwork'].front_default"/>
        <PokeDetail v-if="!isLoading" :id="singlePokemon.id" :height="singlePokemon.height" :weight="singlePokemon.weight" :types="singlePokemon.types" :abilities="singlePokemon.abilities" />
        <PokeStats :stats="singlePokemon.stats" />
    </main>
</template>