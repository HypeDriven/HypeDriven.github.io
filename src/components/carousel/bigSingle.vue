<template>
    <div class="wrapper">
        <carouselPagination :total="carouselData.length" :current-index="currentSlide" @switch="switchSlide($event)"/>
        <div class="big-carousel">
            <big-carousel-item 
                v-for="(item, index) in carouselData"
                :key="item.id"
                :itemData="item"
                :currentSlide="currentSlide"
                :index="index"
                :direction="direction"
                @mouseenter="stopSlideTimer"
                @mouseout="startSlideTimer"
            />
            
        </div>
    </div>
   
</template>

<script>
    import BigCarouselItem from './bigSingle-item.vue';
    import CarouselPagination from './bigSingle-pagination.vue';

export default {
    name: 'big-carousel',
    components: {
        BigCarouselItem,
        CarouselPagination
    },
    props: {
        carouselData: {
            default: () => []
        }
    },
    data: () => ({
        currentSlide: 0,
        slideInterval: null,
        direction: "up"
    }),
    methods: {
        setCurrentSlide(index) {
            this.currentSlide = index;
        },
        prev(step = -1) {
            const index = this.currentSlide > 0 ? this.currentSlide + step : this.slides.length - 1;
            this.direction = "down";
            this.setCurrentSlide(index);
            
            this.startSlideTimer();
        },
        _next(step = 1) {
            const index = this.currentSlide < this.carouselData.length - 1 ? this.currentSlide + step : 0;
            this.direction = "up";
            this.setCurrentSlide(index);
            
        },
        next(step = 1) {
            this._next(step);
            this.startSlideTimer();
        },   
        switchSlide(index) {
            const step = index - this.currentSlide;
            if(step > 0) {
                this.next(step);
            } else {
                this.prev(step);
            }
        },
        startSlideTimer() {
            this.stopSlideTimer();
            this.slideInterval = setInterval(() => {
               this._next();
            }, 3000)
        },
        stopSlideTimer() {
            clearInterval(this.slideInterval)
        }
    },
    mounted () {
        this.startSlideTimer();
    },
    beforeUnmount () {
        this.stopSlideTimer();
    }
}
</script>

<style >
    .wrapper {
        display: flex;
        justify-content: center;
        width: 1000px; 
        height: 740px;
        overflow: hidden;
        margin: 0 auto;
    }
    .big-carousel {
        display: flex;
        flex-direction: column;
    }
</style>