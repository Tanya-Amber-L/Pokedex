<script setup>
    import { storeToRefs } from 'pinia';
    // import { onMounted } from 'vue';
    import { usePokeStore } from '../store/store';

    const props = defineProps({
        pokemon: Object
    })

    const store = usePokeStore();
    const {favorites, getFavorites} = storeToRefs(store);
    // onMounted(() => {
    //     store.fetchSinglePokemon(pokemonId)
    // })
</script>
<template>
    <button @click="store.addToFavorites(props.pokemon)">
        Favorite this
    </button>
</template>