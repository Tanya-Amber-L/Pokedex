<script setup>
    // import FavoritesView from "./FavoritesView.vue"
    import { RouterLink } from "vue-router";
</script>

<template>
    <section class="mx-6 mt-4 p-4 h-28 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-lg text-white">
        <RouterLink class="h-full flex flex-col justify-end" to="/favorites">
            <h1 class="text-lg font-semibold">Favorieten</h1>
            <p class="opacity-70 font-medium">X pokemons</p>
        </RouterLink>
    </section>
</template>