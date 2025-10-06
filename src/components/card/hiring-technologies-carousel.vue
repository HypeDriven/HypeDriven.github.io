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
mounted() {
    this.updateItemsPerPage(); 
    window.addEventListener('resize', this.updateItemsPerPage); 
  },
beforeUnmount() {
    window.removeEventListener('resize', this.updateItemsPerPage); 
  },
methods: {
    updateItemsPerPage() {
        if (window.innerWidth < 950) {
            this.itemsCount = 3;
        } else {
            this.itemsCount = 6;
        }
    }
}
}
</script>
