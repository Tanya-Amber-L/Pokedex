<script setup>
import { getAccordingBackground } from "./functions/getTypeBG.js";
import { Capitalize } from "./functions/capitalize.js";

const props = defineProps({
  id: Number,
  height: Number,
  weight: Number,
  types: Array,
  abilities: Array,
});

let id = String(props.id).padStart(3, "0");
let height = props.height / 10 + "m";
let weight = props.weight / 10 + " kg";
let abilities = () => {
  let array = [];
  props.abilities.forEach((ability) => {
    array.push(Capitalize(ability.ability.name));
  });
  return array.join(", ");
};
</script>

<template>
  <section class="">
    <h2 class="font-bold text-sm mb-2">ABOUT</h2>
    <div class="bg-white shadow text-black py-4 px-5 rounded-lg">
      <p class="flex items-center py-1">
        <span class="text-gray-400 min-w-[110px] text-sm">Type</span>
        <template v-for="type in props.types">
          <span
            class="rounded-full px-3 py-0.5 ml-[2px] text-xs text-gray-50"
            :class="getAccordingBackground(type.type.name)"
          >
            {{ type.type.name }}
          </span>
        </template>
      </p>
      <p class="flex items-center py-1">
        <span class="text-gray-400 min-w-[110px] text-sm">Nummer</span> {{ id }}
      </p>
      <p class="flex items-center py-1">
        <span class="text-gray-400 min-w-[110px] text-sm">Hoogte</span>
        {{ height }}
      </p>
      <p class="flex items-center py-1">
        <span class="text-gray-400 min-w-[110px] text-sm">Gewicht</span>
        {{ weight }}
      </p>
      <p class="flex items-center py-1">
        <span class="text-gray-400 min-w-[110px] text-sm">Vaardigheden</span
        >{{ abilities() }}
      </p>
    </div>
  </section>
</template>
