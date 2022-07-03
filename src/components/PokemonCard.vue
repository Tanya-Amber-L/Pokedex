<script setup>
import { getAccordingBackground } from "./functions/getTypeBG.js";
import { Capitalize } from "./functions/capitalize.js";

const props = defineProps({
  name: String,
  id: Number,
  image: String,
  types: Array,
});

let id = String(props.id).padStart(3, "0");
</script>

<template>
  <img class="w-16 m-[-6px] mr-2" :src="props.image" :alt="props.name" />
  <div class="w-full">
    <p class="font-bold">{{ Capitalize(props.name) }}</p>
    <p class="text-gray-400">Nr. {{ id }}</p>
  </div>
  <div>
    <template v-for="type in props.types">
      <span
        class="rounded-full px-3 py-0.5 ml-[2px] text-xs text-gray-50"
        :class="getAccordingBackground(type.type.name)"
      >
        {{ type.type.name }}
      </span>
    </template>
  </div>
  <img src="../assets/right-arrow.png" alt="arrow" class="h-auto m-auto ml-2" />
</template>
