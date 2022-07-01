<script setup>
    import { RouterLink } from "vue-router";
    import { usePokeStore } from "../store/store";
import PokemonList from "../components/PokemonList.vue";
import BackHomeBtn from "../components/BackHomeBtn.vue";
import NoFavorites from "../components/NoFavorites.vue";

    const store = usePokeStore();
    const favoritePokemons = store.favorites;
    console.log(favoritePokemons)
</script>

<template>
    <main class="min-h-screen bg-gradient-to-br from-emerald-400 to-teal-500">
        <BackHomeBtn class="px-6 pt-6" />
        <h1 class="text-4xl font-bold px-6 text-white" >Favorieten</h1>
        <PokemonList v-if="favoritePokemons.length > 0" :pokemons="favoritePokemons" />
        <NoFavorites v-if="favoritePokemons.length == 0" />
    </main>
</template>