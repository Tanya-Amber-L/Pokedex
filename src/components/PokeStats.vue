<script setup>
    const props = defineProps({
        stats: Array
    })

    let hp = props.stats[0].base_stat
    let attack = props.stats[1].base_stat
    let defense = props.stats[2].base_stat
    let spAttack = props.stats[3].base_stat
    let spDefense = props.stats[4].base_stat
    let speed = props.stats[5].base_stat

    const statColor= (stat) => {
        let allStats = []
        props.stats.forEach(stat => {
            allStats.push(stat.base_stat)
        });
        allStats.sort((a, b) => a - b)
        let lowerStats = allStats.slice(0 ,3)
        if (lowerStats.includes(stat)) {
            return "bg-red-500"
        }
        return "bg-green-500"
    }
    
</script>

<template>
    <section class="">
        <h2 class="font-bold text-sm my-2">STATISTIEKEN</h2>
        <div class="bg-white shadow text-black py-4 px-5 rounded-lg">
            <!-- <div class="flex" v-for="stat in stats">
                <span>{{stat.stat.name}}</span>
                {{stat.base_stat}}
                <div class="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
                    <div class="bg-gray-600 h-1.5 rounded-full dark:bg-gray-300" :style="'width:' + stat.base_stat/255*100 + '%'"></div>
                </div>
            </div> -->
            <div class="flex justify-between items-center py-0.5">
                <span class="text-gray-400 min-w-[65px] text-sm">HP</span> 
                {{hp}}
                <div class="w-full max-w-[170px] max-w-[170px] rounded-full h-1 dark:bg-gray-200 ml-5">
                    <div :class="statColor(hp)" class="h-1 rounded-full" :style="'width:' + hp/255*100 + '%'"></div>
                </div>
            </div>
            <div class="flex justify-between items-center py-0.5">
                <span class="text-gray-400 min-w-[65px] text-sm">Attack</span> 
                {{attack}}
                <div class="w-full max-w-[170px] rounded-full h-1 dark:bg-gray-200 ml-5">
                    <div :class="statColor(attack)" class="h-1 rounded-full" :style="'width:' + attack/255*100 + '%'"></div>
                </div>
            </div>
            <div class="flex justify-between items-center py-0.5">
                <span class="text-gray-400 min-w-[65px] text-sm">Defense</span> 
                {{defense}}
                <div class="w-full max-w-[170px] rounded-full h-1 dark:bg-gray-200 ml-5">
                    <div :class="statColor(defense)" class="h-1 rounded-full" :style="'width:' + defense/255*100 + '%'"></div>
                </div>
            </div>
            <div class="flex justify-between items-center py-0.5">
                <span class="text-gray-400 min-w-[65px] text-sm">Sp. Atk</span> 
                {{spAttack}}
                <div class="w-full max-w-[170px] rounded-full h-1 dark:bg-gray-200 ml-5">
                    <div :class="statColor(spAttack)" class="h-1 rounded-full" :style="'width:' + spAttack/255*100 + '%'"></div>
                </div>
            </div>
            <div class="flex justify-between items-center py-0.5">
                <span class="text-gray-400 min-w-[65px] text-sm">Sp. Def</span> 
                {{spDefense}}
                <div class="w-full max-w-[170px] rounded-full h-1 dark:bg-gray-200 ml-5">
                    <div :class="statColor(spDefense)" class="h-1 rounded-full" :style="'width:' + spDefense/255*100 + '%'"></div>
                </div>
            </div>
            <div class="flex justify-between items-center py-0.5">
                <span class="text-gray-400 min-w-[65px] text-sm">Speed</span> 
                {{speed}}
                <div class="w-full max-w-[170px] rounded-full h-1 dark:bg-gray-200 ml-5">
                    <div :class="statColor(speed)" class="h-1 rounded-full" :style="'width:' + speed/255*100 + '%'"></div>
                </div>
            </div>
            <div class="flex items-center py-0.5">
                <span class="text-gray-400 min-w-[65px] text-sm">Total</span> 
                {{hp + attack + defense + spAttack + spDefense + speed}}
            </div>
        </div>
    </section>
</template>
<!-- width:{{stat.base_stat / 255 * 100}}% -->