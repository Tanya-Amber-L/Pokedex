<script setup>
    import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import { usePokeStore } from '../store/store';

    const store = usePokeStore()
    // const { sortByIncrementName } = storeToRefs(store);
    const modalOpen = ref(false)

</script>

<template>
    <div class="flex justify-end">
        <img @click="modalOpen = true" class="mb-2 cursor-pointer" src="../assets/sort.png" alt="Sort Icon"/>
    </div>
    <div v-if="modalOpen" class=" fixed min-h-screen min-w-[100vw] top-0 left-0 bg-opacity-40 bg-black flex items-end">
        <div class="min-w-full bottom-0 bg-white h-min rounded-t-xl px-4 pt-6 relative">
            <img @click="modalOpen = false" src="../assets/cross.png" class="absolute right-2 top-2 cursor-pointer"/>
            <p class="font-bold text-lg">Sorteren op</p>
            <button @click="store.sortByIncrementName(); modalOpen = false" class="flex items-center bg-gray-100 w-full rounded-lg px-4 py-2 my-2">
                <img class="mr-2" src="../assets/sort-alpha-decrement.png" alt="sort icon"> Alfabetisch oplopend
            </button>
            <button @click="store.sortByDecrementName(); modalOpen = false" class="flex items-center bg-gray-100 w-full rounded-lg px-4 py-2 my-2">
                <img class="mr-2" src="../assets/sort-alpha-decrement.png" alt="sort icon"> Alfabetisch aflopend
            </button>
            <button @click="store.sortByIncrementId(); modalOpen = false" class="flex items-center bg-gray-100 w-full rounded-lg px-4 py-2 my-2">
                <img class="mr-2" src="../assets/sort-num-increment.png" alt="sort icon"> Numeriek oplopend
            </button>
            <button @click="store.sortByDecrementId(); modalOpen = false" class="flex items-center bg-gray-100 w-full rounded-lg px-4 py-2 my-2 mb-6">
                <img class="mr-2" src="../assets/sort-num-decrement.png" alt="sort icon"> Numeriek aflopend
            </button>
        </div>
    </div>
</template>
