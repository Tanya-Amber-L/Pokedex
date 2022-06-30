<script setup>
    import { storeToRefs } from 'pinia';
    import { ref } from 'vue';
    import { usePokeStore } from '../store/store';

    const store = usePokeStore();
    const {filterPokemons} = storeToRefs(store);

    const search = ref("")

    const filter = (search) => {
        console.log(search)
    }
</script>
<template>
    <form>
        <input v-model="search" @input="store.filterPokemons(search)" class="w-full bg-gray-200 rounded-lg  border border-slate-300 pr-3 pl-9 py-1 mt-4 focus:outline-none focus:border-blue-400 bg-[url('../assets/search.png')] bg-no-repeat bg-[bottom_5px_left_10px] bg-[length:20px_20px]" type="text" placeholder="Pokemon zoeken">
        <p>{{search}}</p>
    </form>
</template>