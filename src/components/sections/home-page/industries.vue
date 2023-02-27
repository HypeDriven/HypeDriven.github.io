<template>
    <!-- <SectionContainer>     -->
        <div class="flex flex-row justify-between">
            <Carousel  :carouselData="industries">
                <!-- <IndustryCard :img="data?.img" :title="data?.title"> -->
                    <!-- <div class="flex flex-col gap-5 card-content"> -->
                        <!-- <img :src="data?.img" class="h-10 w-10 m-auto" /> -->
                        <!-- <div> -->
                            <!-- {{$t(`homepage.industries.${data?.title}`)}} -->
                        <!-- </div> -->

                    <!-- </div> -->
                <!-- </IndustryCard> -->
            </Carousel>
        </div>
    <!-- </SectionContainer> -->
</template>

<script>
// import IndustryCard from "../../industries/industries_card";
// import SectionContainer from "../container";
// import SectionTitle from "../title";
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
                    img: require('../../../assets/img/images/telecom2.png'),
                    id: 1
                },
                {
                    img: require('../../../assets/img/images/telecom2.png'),
                    id: 2
                },
                {
                    img: require('../../../assets/img/images/telecom2.png'),
                    id: 3
                },
                {
                    img: require('../../../assets/img/images/telecom2.png'),
                    id: 4
                },
                {
                    img: require('../../../assets/img/images/telecom2.png'),
                    id: 5
                },
                {
                    img: require('../../../assets/img/images/telecom2.png'),
                    id: 6
                },
                {
                    img: require('../../../assets/img/images/telecom2.png'),
                    id: 7
                },
                {
                    img: require('../../../assets/img/images/telecom2.png'),
                    id: 8
                }
            ]
        };
    }
};
</script>

<style>
</style>
