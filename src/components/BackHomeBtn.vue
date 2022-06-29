<script setup>
    import { RouterLink} from "vue-router";
</script>
<template>
    <RouterLink class="flex items-center mb-4" to="/">
        <img class="w-5 h-5 mr-2" src="../assets/left-arrow.png" alt="Return Home Arrow">
        <span class="text-lg font-thin">Terug</span>
    </RouterLink>
</template>