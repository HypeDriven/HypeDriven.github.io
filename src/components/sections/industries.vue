<template>
    <SectionContainer>
        <div class="flex flex-col gap-8 max-w-lg m-auto">
            <SectionTitle class="text-white h-fit m-auto text-4xl max-w-full px-2 text-center">
                We bring our expertise to many industries
            </SectionTitle>
        </div>
        <div>
            <Carousel :items="services" v-slot="{ data }">
                <IndustryCard :img="data?.img" :title="data?.title">
                    <div class="flex flex-col gap-5 card-content">
                        <img :src="data?.img" class="h-10 w-10 m-auto" />
                        <div>
                            {{ data?.title }}
                        </div>

                    </div>
                </IndustryCard>
            </Carousel>
        </div>
    </SectionContainer>
</template>

<script>
import IndustryCard from "../industries/industries_card";
import SectionContainer from "./container";
import SectionTitle from "./title";
import Carousel from "../carousel";
export default {
    name: "ServicesSectionComponent",
    components: {
        SectionContainer,
        SectionTitle,
        Carousel,
        IndustryCard
    },
    data: function () {
        return {
            services: [
                {
                    title: 'Logistics',
                    img: require('../../assets/img/images/logistics.png')
                },
                {
                    title: 'Telecom',
                    img: require('../../assets/img/images/telecom.png')
                },
                {
                    title: 'Automotive',
                    img: require('../../assets/img/images/automotive.png')
                },
                {
                    title: 'Banking and Capital Markets',
                    img: require('../../assets/img/images/banking.png')
                },
                {
                    title: 'Gaming',
                    img: require('../../assets/img/images/gaming.png')
                },
                {
                    title: 'eCommerce',
                    img: require('../../assets/img/images/ecommerce.png')
                },
                {
                    title: 'Manufacturing',
                    img: require('../../assets/img/images/manufacturing.png')
                },
                {
                    title: 'Real Estate',
                    img: require('../../assets/img/images/realstate.png')
                },
                {
                    title: 'Enterprise',
                    img: require('../../assets/img/images/enterprise.png')
                },
                {
                    title: 'Healthcare',
                    img: require('../../assets/img/images/healthcare.png')
                },
                {
                    title: 'Hospitality',
                    img: require('../../assets/img/images/hospitality.png')
                },
                {
                    title: ' Travel',
                    img: require('../../assets/img/images/travel.png')
                }
            ]
        };
    }
};
</script>

<style>
.card-content {
    max-width: 120px;
}
</style>
