<script setup>
import { def } from '@vue/shared';


    const props = defineProps({
        name: String,
        id: Number,
        image: String,
        types: Array
    })

    let name = props.name.charAt(0).toUpperCase() + props.name.slice(1);
    let id = String(props.id).padStart(3, "0"); 
    
    const getAccordingBackground = (type) => {
        switch (type) {
            case "grass": return "bg-pokeGrass"
            case "water": return "bg-pokeWater"
            case "ghost": return "bg-pokeGhost"
            case "fire": return "bg-pokeFire"
            case "poison": return "bg-pokePoison"
            case "flying": return "bg-pokeFlying"
            case "ground": return "bg-pokeGround"
            case "rock": return "bg-pokeRock"
            case "bug": return "bg-pokeBug"
            case "electric": return "bg-pokeElectric"
            case "fairy": return "bg-pokeFairy"
            case "fighting": return "bg-pokeFighting"
            case "psychic": return "bg-pokePsychic"
            case "steel": return "bg-pokeSteel"
            case "ice": return "bg-pokeIce"
            case "dragon": return "bg-pokeDragon"
            default: return "bg-pokeNormal"
        }
    }

</script>

<template>
    <img class="w-16 m-[-6px] mr-2" :src="props.image" :alt="props.name">
    <div class="w-full">
        <p class="font-bold">{{name}}</p>
        <p class="text-gray-400">Nr. {{id}}</p>
    </div>
    <div class="">

        <template v-for="type in props.types" >

            <span class="rounded-full px-3 pb-1 ml-[2px] text-xs text-gray-50" :class="getAccordingBackground(type.type.name)">
            {{type.type.name}}
            </span>

        </template>
    </div>
    <img src="../assets/right-arrow.png" alt="arrow" class="h-auto m-auto ml-2">
</template>