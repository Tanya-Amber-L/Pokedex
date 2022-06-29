<template>
    <div class="h-[90vh] flex justify-center items-center">
        <img class="loader w-1/3" src="../assets/pokemon.png" alt="Pokedex Icon Loader">
    </div>
</template>

<style>
.loader {
	-webkit-animation: rotate-center 1s ease-in-out infinite both;
	animation: rotate-center 1s ease-in-out infinite both;
}

@-webkit-keyframes rotate-center {
    0% {
        -webkit-transform: rotate(0);
                transform: rotate(0);
    }
    100% {
        -webkit-transform: rotate(360deg);
                transform: rotate(360deg);
    }
}
@keyframes rotate-center {
    0% {
        -webkit-transform: rotate(0);
                transform: rotate(0);
    }
    100% {
        -webkit-transform: rotate(360deg);
                transform: rotate(360deg);
    }
}

</style>