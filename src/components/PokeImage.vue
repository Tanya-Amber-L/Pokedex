<script setup>
    import InnerImageZoom from 'vue-inner-image-zoom';
    import 'vue-inner-image-zoom/lib/vue-inner-image-zoom.css';

    const props = defineProps({
        image: String
    })
</script>

<template>
    <div class="w-3/4 m-auto max-w-sm">
        <inner-image-zoom 
        :src="props.image"
        :zoomSrc="props.image"
        moveType="drag"
    />
    </div>
    
</template>


<style>
.iiz__btn.iiz__hint{
    display: none;
}
.iiz__btn.iiz__close {
    width: 35px;
    height: 35px;
    border-radius: 4px;
}
/* Custom style:
- hide the magnifying glass button (works without, and is better with our style)
- border radius on the close button, getting closer to our style too
*/
</style>