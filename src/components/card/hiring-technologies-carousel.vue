<template>
    <Carousel :items-to-show="itemsCount" :wrap-around="true" :autoplay="2000" class="bg-[#00007E]">
        <Slide v-for="(slideData, index) in items" :key="index">
            <slot ref="carouselContent" :data="slideData"></slot>
        </Slide>
    </Carousel>
</template>

<script>
import { Carousel, Slide } from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';

export default {
name: 'TechnologiesCarouselComponent',
components: {
    Carousel,
    Slide
},
props: ['items'],
data: function () {
    return {
        itemsCount: 6
    };
},
created() {
    window.addEventListener("resize", this.resizeEventHandler);
},
methods: {
    resizeEventHandler() {
        // this.$refs.carouselContent.clientWidth
        let count = document.documentElement.clientWidth / 100;
        if (count < 1)
            count = 1;
        else if (count > 6)
            count = 6;
        this.itemsCount = count;
    }
}
}
</script>

<style>
/*li .carousel__slide .carousel__slide--active .carousel__slide--visible{
    width: 100%;
}*/
</style>