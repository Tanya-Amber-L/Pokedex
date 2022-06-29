<script setup>
import PokemonCard from './PokemonCard.vue';
const props = defineProps({
    pokemons: Array
})

</script>

<template>
    <section class="p-6">
        <a :href="'/detail/' + pokemon.id" class="bg-white rounded-lg mb-2 p-2 flex justify-start items-top shadow-lg" v-for="pokemon in pokemons" :key="pokemon.id">
            <PokemonCard :name="pokemon.name" :id="pokemon.id" :image="pokemon.sprites.front_default" :types="pokemon.types" />
        </a>
    </section>
</template>