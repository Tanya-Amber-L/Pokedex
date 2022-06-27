<script setup>
    const props = defineProps({
        name: String,
        id: Number,
        image: String,
        types: Array
    })

    let name = props.name.charAt(0).toUpperCase() + props.name.slice(1);
    let id = String(props.id).padStart(3, "0"); 
    // let types = prop.types;

</script>

<template>
    <img class="w-16 m-[-6px] mr-2" :src="props.image" :alt="props.name">
    <div class="w-full">
        <p class="font-bold">{{name}}</p>
        <p class="text-gray-400">Nr. {{id}}</p>
    </div>
    <div class="">

        <span v-for="type in props.types" class="rounded-full px-3 pb-1 ml-[2px] bg-slate-200 text-xs text-gray-50" >
            {{type.type.name}}

        </span>
    </div>
    <img src="../assets/right-arrow.png" alt="arrow" class="h-auto m-auto ml-2">
</template>