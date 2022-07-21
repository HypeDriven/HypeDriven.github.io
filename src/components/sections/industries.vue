<template>
    <SectionContainer>
        <div class="flex flex-col gap-8 max-w-lg m-auto">
            <SectionTitle class="text-white h-fit m-auto text-4xl max-w-full px-2 text-center">
                {{$t('homepage.industries.subtitle')}}
            </SectionTitle>
        </div>
        <div>
            <Carousel :items="industries" v-slot="{ data }">
                <IndustryCard :img="data?.img" :title="data?.title">
                    <div class="flex flex-col gap-5 card-content">
                        <img :src="data?.img" class="h-10 w-10 m-auto" />
                        <div>
                            {{$t(`homepage.industries.${data?.title}`)}}
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
    name: "IndustriesSectionComponent",
    components: {
        SectionContainer,
        SectionTitle,
        Carousel,
        IndustryCard
    },
    data: function () {
        return {
            industries: [
                {
                    title: 'logistics',
                    img: require('../../assets/img/images/logistics.png')
                },
                {
                    title: 'telecom',
                    img: require('../../assets/img/images/telecom.png')
                },
                {
                    title: 'automotive',
                    img: require('../../assets/img/images/automotive.png')
                },
                {
                    title: 'bankingCapitalMarkets',
                    img: require('../../assets/img/images/banking.png')
                },
                {
                    title: 'gaming',
                    img: require('../../assets/img/images/gaming.png')
                },
                {
                    title: 'eCommerce',
                    img: require('../../assets/img/images/ecommerce.png')
                },
                {
                    title: 'manufacturing',
                    img: require('../../assets/img/images/manufacturing.png')
                },
                {
                    title: 'realEstate',
                    img: require('../../assets/img/images/realstate.png')
                },
                {
                    title: 'Enterprise',
                    img: require('../../assets/img/images/enterprise.png')
                },
                {
                    title: 'healthcare',
                    img: require('../../assets/img/images/healthcare.png')
                },
                {
                    title: 'hospitality',
                    img: require('../../assets/img/images/hospitality.png')
                },
                {
                    title: ' travel',
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
