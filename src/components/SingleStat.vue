<script setup>
import { ref } from "vue";

const prop = defineProps({
  name: String,
  stat: Number,
  color: String,
});
console.log(prop);
</script>
<template>
  <!-- flex justify-between items-center -->
  <div class="grid grid-cols-4 py-0.5 items-center">
    <span class="text-gray-400 text-sm">{{ prop.name }}</span>
    {{ prop.stat }}
    <div class="col-start-3 col-end-5 rounded-full h-1 dark:bg-gray-200">
      <div
        :class="color"
        class="h-1 rounded-full"
        :style="'width:' + (prop.stat / 255) * 100 + '%'"
      ></div>
    </div>
  </div>
</template>
