<script setup>
import PokemonCard from './PokemonCard.vue';
import { RouterLink } from "vue-router";
const props = defineProps({
    pokemons: Array
})

</script>

<template>
    <section class="p-2 xs:p-6 flex flex-wrap justify-center">
        <RouterLink :to="'/detail/' + pokemon.id" v-for="pokemon in pokemons" :key="pokemon.id" class="bg-white rounded-lg mb-2 mx-1 p-2 flex justify-start items-top shadow-lg w-full sm:w-[48%]">
            <PokemonCard :name="pokemon.name" :id="pokemon.id" :image="pokemon.sprites.front_default" :types="pokemon.types" />
        </RouterLink>
    </section>
</template>