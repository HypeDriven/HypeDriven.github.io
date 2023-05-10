<template>
    <SectionContainer class="bg-primary-bg">
        <div class="flex flex-col">
            <SectionTitle class="text-white h-fit text-center mb-6">
                {{$t('careersPage.ourBenefits.title')}}
            </SectionTitle>
            <div class="flex flex-row mt-[100px]">
                <OurBenefitsCard v-for="(itemData, index) in ourBenefits" :key="index" class="careers-page-items-border">
                    <div class="careerspage-card-content cursor-pointer" @mouseover="itemData.hover=true" @mouseleave="itemData.hover=false"> 
                        <div class="flex flex-col gap-5 careerspage-card-icon"
                        :style="{'background-image': itemData.hover ? `url(`+ itemData.img2 +`)` : '',}">   
                            <div class="mt-8 mb-8">
                                <img :src="itemData?.img1" class="w-24 h-24 m-auto"/>   
                                <div class="text-2xl text-center mt-4 font-bold">
                                    <span>{{itemData?.title}}</span>
                                </div> 
                            </div>
                        </div>
                    </div>
                </OurBenefitsCard>
            </div>
        </div>
    </SectionContainer>
</template>

<script>
import OurBenefitsCard from "./our-benefits-card.vue";
import SectionContainer from "../container";
import SectionTitle from "../title";
export default {
    name: "CareersPageOurBenefitsComponent",
    components: {
        SectionContainer,
        SectionTitle,
        OurBenefitsCard
    },
    data: function () {
        return {
            ourBenefits: [
                {
                    title: 'Awesome team',
                    img1: require("@/assets/img/icons/careersspage-ourbenefits-icon1.svg"),
                    img2: require("@/assets/img/icons/careersspage-ourbenefits-icon-bg1.jpg"),
                    hover: false
                },
                {
                    title: 'Flexible working hours',
                    img1: require("@/assets/img/icons/careersspage-ourbenefits-icon2.svg"),
                    img2: require("@/assets/img/icons/careersspage-ourbenefits-icon-bg2.jpg"),
                    hover: false
                },
                {
                    title: 'Professional growth',
                    img1: require("@/assets/img/icons/careersspage-ourbenefits-icon3.svg"),
                    img2: require("@/assets/img/icons/careersspage-ourbenefits-icon-bg3.jpg"),
                    hover: false
                },
                {
                    title: 'Global solutions',
                    img1: require("@/assets/img/icons/careersspage-ourbenefits-icon4.svg"),
                    img2: require("@/assets/img/icons/careersspage-ourbenefits-icon-bg4.jpg"),
                    hover: false
                }
            ]
        };
    }
};
</script>

<style>
.careerspage-card-content{
    width: 100%;
    color: #ffffff;
}

.careerspage-card-icon {
    padding-top: 40px;
    padding-bottom: 40px;
    background-repeat: no-repeat;
    background-size: cover;
}

.careers-page-items-border:nth-child(n) {
    border-right: 2px solid #ffffff;
}

.careers-page-items-border:last-child {
    border-right: none;
}

.careers-page-items-border:hover {
    border: 2px solid white;
}
</style>

