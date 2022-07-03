<script setup>
import SingleStat from "./SingleStat.vue";
const props = defineProps({
  stats: Array,
});

let hp = props.stats[0].base_stat;
let attack = props.stats[1].base_stat;
let defense = props.stats[2].base_stat;
let spAttack = props.stats[3].base_stat;
let spDefense = props.stats[4].base_stat;
let speed = props.stats[5].base_stat;

const statColor = (stat) => {
  let allStats = [];
  props.stats.forEach((stat) => {
    allStats.push(stat.base_stat);
  });
  allStats.sort((a, b) => a - b);
  let lowerStats = allStats.slice(0, 3);
  if (lowerStats.includes(stat)) {
    return "bg-red-500";
  }
  return "bg-green-500";
};
</script>

<template>
  <section class="">
    <h2 class="font-bold text-sm my-2 sm:mt-0">STATISTIEKEN</h2>
    <div class="bg-white shadow text-black py-4 px-5 rounded-lg">
      <SingleStat :name="'HP'" :stat="hp" :color="statColor(hp)" />
      <SingleStat :name="'Attack'" :stat="attack" :color="statColor(attack)" />
      <SingleStat
        :name="'Defense'"
        :stat="defense"
        :color="statColor(defense)"
      />
      <SingleStat
        :name="'Sp. Atk'"
        :stat="spAttack"
        :color="statColor(spAttack)"
      />
      <SingleStat
        :name="'Sp. Def'"
        :stat="spDefense"
        :color="statColor(spDefense)"
      />
      <SingleStat :name="'Speed'" :stat="speed" :color="statColor(speed)" />
      <div class="grid grid-cols-4 py-0.5">
        <span class="text-gray-400 min-w-[65px] text-sm">Total</span>
        {{ hp + attack + defense + spAttack + spDefense + speed }}
      </div>
    </div>
  </section>
</template>
