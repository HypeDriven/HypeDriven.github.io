<template>
    <SectionContainer class="bg-primary-bg xxs:px-4 xxs:pt-[40px] xs:px-4 xs:pt-[40px] sm:px-4 sm:pt-[40px]">
        <div class="flex flex-col">
            <SectionTitle class="text-white h-fit text-center xxs:text-5xl mb-6">
                {{$t('careersPage.ourBenefits.title')}}
            </SectionTitle>
            <div class="flex-row mt-[100px] xxs:hidden xs:hidden sm:hidden md:hidden lg:flex">
                <OurBenefitsCard v-for="(itemData, index) in ourBenefits" :key="index" class="careers-page-items-border">
                    <div class="careerspage-card-content cursor-pointer" @mouseover="itemData.hover=true" @mouseleave="itemData.hover=false"> 
                        <div class="flex flex-col gap-5 careerspage-card-icon"
                        :style="{'background-image': itemData.hover ? `url(`+ itemData.img2 +`)` : '',}">   
                            <div class="mt-8 mb-8">
                                <img :src="itemData?.img1" class="xl:w-24 xl:h-24 lg:w-20 lg:h-20 m-auto"/>   
                                <div class="xl:text-2xl lg:text-lg text-center mt-4 font-bold">
                                    <span>{{itemData?.title}}</span>
                                </div> 
                            </div>
                        </div>
                    </div>
                </OurBenefitsCard>
            </div>
            <div class="lg:hidden xxs:grid xs:grid sm:grid md:grid grid-cols-2 grid-rows-2 mt-[30px] "> 
                <OurBenefitsCard v-for="(itemData, index) in ourBenefits" :key="index" class="careers-page-items-border-mobile">
                    <div class="careerspage-card-content cursor-pointer" @mouseover="itemData.hover=true" @mouseleave="itemData.hover=false">
                        <div class="flex flex-col gap-5 careerspage-card-icon"
                        :style="{'background-image': itemData.hover ? `url(`+ itemData.img2 +`)` : ''}"> 
                            <div class="mt-8 mb-8">
                                <img :src="itemData?.img1" class="w-24 h-24 m-auto xxs:w-16 xxs:h-16"/>   
                                <div class="text-xl text-center mt-4 font-bold">
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
@media (min-width: 1024px) and (max-width: 1279.5px) {
    .careerspage-card-icon {
        padding-top: 20px;
        padding-bottom: 20px;
        background-repeat: no-repeat;
        background-size: cover;
    }
}
@media (min-width: 768px) and (max-width: 1023.5px) {
    .careerspage-card-icon {
        padding-top: 30px;
        padding-bottom: 30px;
        background-repeat: no-repeat;
        background-size: cover;
    }
    .careers-page-items-border-mobile:nth-child(1) {
        border-right: 2px solid #ffffff;
        border-bottom: 2px solid #ffffff;
    }
    .careers-page-items-border-mobile:nth-child(2) {
        border-bottom: 2px solid #ffffff;
    }
    .careers-page-items-border-mobile:nth-child(3) {
        border-right: 2px solid #ffffff;
    }
}
@media (min-width: 576px) and (max-width: 767.5px) {
    .careerspage-card-icon {
        padding-top: 20px;
        padding-bottom: 20px;
        background-repeat: no-repeat;
        background-size: cover;
    }
    .careers-page-items-border-mobile:nth-child(1) {
        border-right: 2px solid #ffffff;
        border-bottom: 2px solid #ffffff;
    }
    .careers-page-items-border-mobile:nth-child(2) {
        border-bottom: 2px solid #ffffff;
    }
    .careers-page-items-border-mobile:nth-child(3) {
        border-right: 2px solid #ffffff;
    }
}
@media (min-width: 425px) and (max-width: 575.5px) {
    .careerspage-card-icon {
        padding-top: 20px;
        padding-bottom: 20px;
        background-repeat: no-repeat;
        background-size: cover;
    }
    .careers-page-items-border-mobile:nth-child(1) {
        border-right: 2px solid #ffffff;
        border-bottom: 2px solid #ffffff;
    }
    .careers-page-items-border-mobile:nth-child(2) {
        border-bottom: 2px solid #ffffff;
    }
    .careers-page-items-border-mobile:nth-child(3) {
        border-right: 2px solid #ffffff;
    }
}
@media (min-width: 320px) and (max-width: 424.5px) {
    .careerspage-card-icon {
        padding-top: 20px;
        padding-bottom: 20px;
        background-repeat: no-repeat;
        background-size: cover;
    }
    .careers-page-items-border-mobile:nth-child(1) {
        border-right: 2px solid #ffffff;
        border-bottom: 2px solid #ffffff;
    }
    .careers-page-items-border-mobile:nth-child(2) {
        border-bottom: 2px solid #ffffff;
    }
    .careers-page-items-border-mobile:nth-child(3) {
        border-right: 2px solid #ffffff;
    }
}
</style>

