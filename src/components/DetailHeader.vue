<script setup>
import BackHomeBtn from "./BackHomeBtn.vue";
import AddToFavoritesBtn from "./AddToFavoritesBtn.vue";
import { Capitalize } from "../components/functions/capitalize.js";
import { ref } from "vue";
const props = defineProps({
  pokemon: Object,
  bg: String,
});

let hasScrolled = ref(false);

window.onscroll = () => {
  hasScrolled.value = window.scrollY > 62 ? true : false;
};
</script>

<template>
  <header
    class="fixed top-0 w-full p-2 xs:px-6 xs:pt-4 z-10 backdrop-blur bg-opacity-70"
    :class="bg"
  >
    <div class="w-full flex justify-between max-w-4xl m-auto">
      <BackHomeBtn />
      <p v-if="hasScrolled" class="text-white font-semibold">
        {{ Capitalize(pokemon.name) }}
      </p>
      <AddToFavoritesBtn :pokemon="props.pokemon" />
    </div>
  </header>
</template>
