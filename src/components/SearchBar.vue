<script setup>
    import { storeToRefs } from 'pinia';
    import { ref } from 'vue';
    import { usePokeStore } from '../store/store';

    const store = usePokeStore();
    // const {pokemons, filteredPokemons} = storeToRefs(store);

    const search = ref("")

    const filter = (search) => {
        // console.log(search)
        store.filteredPokemons = []

        if (search.match(/^[0-9]+$/)) {
            store.pokemons.filter((pokemon) => {
                if (pokemon.id === Number(search)) {
                    store.filteredPokemons.push(pokemon)
                    // console.log(store.filteredPokemons)
                }
            })
        } else {
            store.pokemons.filter((pokemon) => {
                let types = () => {
                    let array = []
                    pokemon.types.forEach(type => {
                        array.push(type.type.name)
                    })
                    return array.join(" ")
                }
                if (pokemon.name.toLowerCase().includes(search.toLowerCase()) || types().includes(search.toLowerCase())) {
                    store.filteredPokemons.push(pokemon)
                    console.log(types())
                }
            })
        }

    }
</script>
<template>
    <form>
        <input v-model="search" @input="filter(search)" class="w-full bg-gray-200 rounded-lg  border border-slate-300 pr-3 pl-9 py-1 mt-4 focus:outline-none focus:border-blue-400 bg-[url('../assets/search.png')] bg-no-repeat bg-[bottom_5px_left_10px] bg-[length:20px_20px]" type="text" placeholder="Pokemon zoeken">
    </form>
</template>