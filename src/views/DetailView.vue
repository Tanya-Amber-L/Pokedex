<script setup>
import { useRoute } from "vue-router";
import { onBeforeMount, onMounted } from "vue";
import { usePokeStore } from "../store/store.js";
import { storeToRefs } from "pinia";
import { getAccordingBackground } from "../components/functions/getTypeBG.js";
import { Capitalize } from "../components/functions/capitalize.js";
import PokeImage from "../components/PokeImage.vue";
import PokeDetail from "../components/PokeDetail.vue";
import DetailHeader from "../components/DetailHeader.vue";
import PokeStats from "../components/PokeStats.vue";
import Loader from "../components/Loader.vue";

const route = useRoute();
const pokemonId = route.params.id;

const store = usePokeStore();

const { singlePokemon, isLoading } = storeToRefs(store);
// taking the direct states from the store

onBeforeMount(() => {
  store.isLoading = true;
});
onMounted(() => {
  store.fetchSinglePokemon(pokemonId);
});
</script>

<template>
  <Loader v-if="isLoading" />

  <DetailHeader
    v-if="!isLoading"
    :pokemon="singlePokemon"
    :bg="getAccordingBackground(singlePokemon.types[0].type.name)"
  />
  <main
    v-if="!isLoading"
    class="text-white p-4 min-h-screen pt-20"
    :class="getAccordingBackground(singlePokemon.types[0].type.name)"
  >
    <div class="max-w-4xl m-auto">
      <h1 v-if="!isLoading" class="text-4xl font-semibold">
        {{ Capitalize(singlePokemon.name) }}
      </h1>
      <PokeImage
        v-if="!isLoading"
        :image="singlePokemon.sprites.other['official-artwork'].front_default"
      />
      <div class="sm:flex justify-between">
        <PokeDetail
          class="sm:w-[49%]"
          v-if="!isLoading"
          :id="singlePokemon.id"
          :height="singlePokemon.height"
          :weight="singlePokemon.weight"
          :types="singlePokemon.types"
          :abilities="singlePokemon.abilities"
        />
        <PokeStats class="sm:w-[49%]" :stats="singlePokemon.stats" />
      </div>
    </div>
  </main>
</template>
