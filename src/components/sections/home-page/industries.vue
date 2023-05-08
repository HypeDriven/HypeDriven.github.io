<template>
    <div class="flex flex-row justify-between">
        <Carousel  :carouselData="industries"></Carousel>
    </div>
</template>

<script>
import Carousel from "../../carousel/bigSingle.vue";
export default {
    name: "IndustriesSectionComponent",
    components: {
    Carousel
},
    data: function () {
        return {
            industries: [
                {
                    img: require('../../../assets/img/images/logistics.png'),
                    id: 1
                },
                {
                    img: require('../../../assets/img/images/telecom.png'),
                    id: 2
                },
                {
                    img: require('../../../assets/img/images/automotive.png'),
                    id: 3
                },
                {
                    img: require('../../../assets/img/images/banking.png'),
                    id: 4
                }
            ]
        };
    }
};
</script>

<style>
</style>
