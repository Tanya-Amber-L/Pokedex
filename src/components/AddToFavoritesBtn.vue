<script setup>
    // import { storeToRefs } from 'pinia';
    import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import { usePokeStore } from '../store/store';

    const props = defineProps({
        pokemon: Object
    })
    const store = usePokeStore();
    const {favorites} = storeToRefs(store)

    let addToFavorite = ref(false)
    store.favorites.forEach(favorite => {
        if (favorite.id === props.pokemon.id) {
            addToFavorite.value = true
        }
    })

    const toggle = () => {
        addToFavorite.value = !addToFavorite.value;
        console.log(addToFavorite)
    }

</script>
<template>
    <div @click="toggle(); addToFavorite? store.addToFavorites(props.pokemon) : store.removeFromFavorites(props.pokemon.id)">
    {{addToFavorite ? "remove" : "add"}}
    </div>
</template>

<style>

</style>