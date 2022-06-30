<script setup>
    import BackHomeBtn from './BackHomeBtn.vue';
import AddToFavoritesBtn from './AddToFavoritesBtn.vue';
    const props = defineProps({
        pokemon: Object
    })
</script>

<template>
    <header class="flex justify-between">
        <BackHomeBtn />
        <AddToFavoritesBtn :pokemon="props.pokemon" />
    </header>
</template>