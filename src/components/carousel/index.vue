<template>
    <div>
        <split-carousel height="300px">
            <template v-slot:left>
                <i class="mx-4 fas fa-chevron-left text-primary-button"></i>
            </template>
            <split-carousel-item v-for="item in 8" :key="item">
                <div class="h-72 w-60 bg-white">
                    {{ item }}
                </div>
            </split-carousel-item>
            <template v-slot:right>
                <i class="mx-4 fas fa-chevron-right text-primary-button"></i>
            </template>
        </split-carousel>
    </div>
</template>

<script>
import { SplitCarousel, SplitCarouselItem } from "vue-split-carousel";
export default {
    name: 'CarouselComponent',
    components: {
        SplitCarousel,
        SplitCarouselItem
    },
    data() {
        return {
        }
    }
}
</script>

<style scoped>
</style>