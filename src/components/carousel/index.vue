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
    mounted() {
        this.updateItemsPerPage();
        window.addEventListener('resize', this.updateItemsPerPage); 
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.updateItemsPerPage); 
    },
    methods: {
        updateItemsPerPage() {
            if (window.innerWidth < 576) {
                this.itemsCount = 2;
            } else {
                this.itemsCount = 4;
            }
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

/*Стилі нижче, для того, щоб уникнути багу з елементами списку 1. 2. 3. 4. ....*/

.carousel__pagination li.carousel__pagination-item {
    list-style-type: none;
    margin-left: 0px;
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