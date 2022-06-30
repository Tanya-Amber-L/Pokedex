<script setup>
import PokemonCard from './PokemonCard.vue';
import { RouterLink } from "vue-router";
const props = defineProps({
    pokemons: Array
})

</script>

<template>
    <section class="p-6">
        <RouterLink :to="'/detail/' + pokemon.id" class="bg-white rounded-lg mb-2 p-2 flex justify-start items-top shadow-lg" v-for="pokemon in pokemons" :key="pokemon.id">
            <PokemonCard :name="pokemon.name" :id="pokemon.id" :image="pokemon.sprites.front_default" :types="pokemon.types" />
        </RouterLink>
    </section>
</template>