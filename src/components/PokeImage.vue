<script setup>
    const props = defineProps({
        image: String
    })
</script>

<template>
    <img class="w-3/4 m-auto" :src="props.image" alt="">
</template>