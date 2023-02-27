<template>
        <Carousel :items-to-show="itemsCount" :wrap-around="true">
            <Slide v-for="(slideData, index) in items" :key="index">
                <slot ref="carouselContent" :data="slideData"></slot>
            </Slide>

            <template #addons>
                <Navigation />
                <Pagination />
            </template>
        </Carousel>
</template>

<script>
import { Carousel, Navigation, Slide, Pagination } from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';

export default {
    name: 'CarouselComponent',
    components: {
        Carousel,
        Slide,
        Navigation,
        Pagination
    },
    props: ['items'],
    data: function () {
        return {
            itemsCount: 4
        };
    },
    created() {
        window.addEventListener("resize", this.resizeEventHandler);
    },
    methods: {
        resizeEventHandler() {
            // this.$refs.carouselContent.clientWidth
            let count = document.documentElement.clientWidth / 400;
            if (count < 1)
                count = 1;
            else if (count > 4)
                count = 4;
            this.itemsCount = count;
        }
    }
}
</script>

<style>
.carousel__prev,
.carousel__next {
    background-color: transparent;
    color: #00007E;
    margin-top: -30px;
}

.carousel__prev {
    left: -20px;
}

.carousel__next {
    right: -20px;
}

.carousel__pagination {
    margin-top: 30px;
}

.carousel__pagination-button {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: white;
}

.carousel__pagination-button--active {
    background-color: #00007E;
}

.carousel__track {
    gap: 20px;
}
</style>