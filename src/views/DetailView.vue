<script setup>
// import About from '../components/About.vue';
import { useRoute } from 'vue-router'
import { ref, onMounted, computed, watch} from 'vue';
import { usePokeStore } from '../store/store.js';
import { getAccordingBackground } from '../components/functions/getTypeBG.js';
import { Capitalize } from '../components/functions/capitalize.js';
import PokeImage from '../components/PokeImage.vue';
import PokeDetail from '../components/PokeDetail.vue';
import DetailHeader from '../components/DetailHeader.vue';
import { storeToRefs } from 'pinia';

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
    <main v-if="!isLoading" class="text-white p-4 min-h-screen" :class="getAccordingBackground(singlePokemon.types[0].type.name)">
        <DetailHeader />
        <p v-if="isLoading" class="text-3xl">Loadinggggg</p>

        <h1 v-if="!isLoading" class="text-4xl font-semibold">{{Capitalize(singlePokemon.name)}}</h1>
        <PokeImage v-if="!isLoading" :image="singlePokemon.sprites.other['official-artwork'].front_default"/>
        <PokeDetail :id="singlePokemon.id" :height="singlePokemon.height" :weight="singlePokemon.weight" :types="singlePokemon.types" />
    </main>
</template>