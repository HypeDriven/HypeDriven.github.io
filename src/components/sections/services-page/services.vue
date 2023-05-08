<template>
    <div class="bg-white">
    <SectionContainer class="sm:px-4 sm:pb-10 xs:p-4 xxs:p-4 xs:pb-10 xxs:pb-10"> 
        <div class="flex flex-row xxs:flex-col xs:flex-col sm:flex-col justify-between max-w-8xl md:pt-[50px] sm:pt-[50px] xs:pt-[40px] xxs:pt-[40px]">
            <div class="flex flex-row justify-between mt-[-140px] sm:mt-0 sm:mb-6 xs:mt-0 xs:mb-6 xxs:mt-0 xxs:mb-6">
                <SectionTitle class="text-[#00007E] h-fit m-auto sm:text-6xl sm:m-0 xs:text-5xl xxs:text-5xl max-w-xl">
                    {{$t('servicespage.services.title')}}
                </SectionTitle>
            </div>
            <div class="border-l-2 border-[#00007E] xl:mr-[-350px] lg:mr-[-160px] md:mr-[-155px] sm:hidden xs:hidden xxs:hidden"></div> 
            <div class="flex xl:max-w-xl lg:max-w-sm md:max-w-sm sm:max-w-auto xs:max-w-auto xxs:max-w-auto"> 
                <SectionSubTitle class="text-[#000026] h-fit ml-12 lg:text-xl md:text-lg sm:text-lg xxs:text-base px-2 font-bold text-left 1xl:ml-0 xl:ml-[100px] md:ml-[100px] sm:ml-0 sm:px-0 xs:ml-0 xs:px-0 xxs:ml-0 xxs:px-0">
                    {{$t('servicespage.services.subtitle1')}}
                </SectionSubTitle>
            </div>
        </div>
        <div class="flex flex-col">
            <SectionTitle class="text-[#66C3CD] h-fit md:text-[40px] sm:text-[32px] xs:text-[26px] xxs:text-[22px] xxs:leading-10 max-w-xl mb-6">
                {{$t('servicespage.services.subtitle2')}}
            </SectionTitle>
            <div class="w-[60px] border-b-4 border-[#66C3CD]"></div>
            <div class="lg:flex flex-row mt-[100px] mb-20 md:hidden sm:hidden xs:hidden xxs:hidden">
                <ServiceCard v-for="(itemData, index) in services" :key="index" class="services-page-items-border">
                    <div class="servicespage-card-content1 cursor-pointer" @mouseover="itemData.hover=true" @mouseleave="itemData.hover=false"> 
                        <div class="flex flex-col gap-5 servicespage-card-icon"
                        :style="{'background-image': itemData.hover ? `url(`+ itemData.img2 +`)` : '',}">   
                            <div class="mt-12 mb-12">
                                <img :src="itemData?.img1" class="lg:w-24 lg:h-24 md:w-16 md:h-16 sm:w-14 sm:h-14 xs:w-14 xs:h-14 xxs:w-12 xxs:h-12 m-auto icons"/>   
                                <div class="md:text-2xl sm:text-xl xs:text-xl xxs:text-lg text-center mt-4 font-bold">
                                    <span>{{$t(`servicespage.services.${itemData?.title}`)}}</span>
                                </div> 
                            </div>
                        </div>
                    </div>
                </ServiceCard>
            </div>
            <div class="lg:hidden xxs:grid xs:grid sm:grid md:grid grid-cols-2 grid-rows-2 mt-10 mb-20">
                <ServiceCard v-for="(itemData, index) in services" :key="index" class="services-page-items-border">
                    <div class="servicespage-card-content1 cursor-pointer" @mouseover="itemData.hover=true" @mouseleave="itemData.hover=false"> 
                        <div class="flex flex-col gap-5 servicespage-card-icon"
                        :style="{'background-image': itemData.hover ? `url(`+ itemData.img2 +`)` : '',}">   
                            <div class="mt-12 mb-12">
                                <img :src="itemData?.img1" class="lg:w-24 lg:h-24 md:w-24 md:h-24 sm:w-20 sm:h-20 xs:w-16 xs:h-16 xxs:w-12 xxs:h-12 m-auto icons"/>   
                                <div class="md:text-2xl sm:text-xl xs:text-xl xxs:text-lg text-center mt-4 font-bold">
                                    <span>{{$t(`servicespage.services.${itemData?.title}`)}}</span>
                                </div> 
                            </div>
                        </div>
                    </div>
                </ServiceCard>
            </div>
            <router-link to="/contact-us">
                <Button class="w-full">{{ $t('button.needDev') }}</Button>
            </router-link>
        </div>
    </SectionContainer>
    <div class="flex flex-col justify-center bg-[#150DCE] services-running-line">
            <RunningLine :img="runStringImg" :content="runningLineContent"/>
        </div>
    </div>
</template>

<script>
import ServiceCard from "../../services/service_card";
import SectionContainer from "../container";
import SectionTitle from "../title";
import SectionSubTitle from "../sub-title";
import Button from "../../buttons";
import RunningLine from "../../sections/running-line/running-line.vue";
export default {
    name: "ServicesPageServicesComponent",
    components: {
        SectionContainer,
        SectionTitle,
        SectionSubTitle,
        Button,
        RunningLine,
        ServiceCard
    },
    data: function () {
        return {
            runStringImg: require("@/assets/img/icons/servicespage-runningline-icon-logo.svg"),
            runningLineContent:['HYPEDRIVEN', 'DEVELOPMENT', 'HYPEDRIVEN', 'SOFTWARE'],
            services: [
                {
                    title: 'mobile',
                    img1: require("@/assets/img/icons/servicespage-services-icon1.svg"),
                    img2: require("@/assets/img/icons/servicespage-services-icon-bg1.jpg"),
                    hover: false
                },
                {
                    title: 'web',
                    img1: require("@/assets/img/icons/servicespage-services-icon2.svg"),
                    img2: require("@/assets/img/icons/softwareDev2.jpg"),
                    hover: false
                },
                {
                    title: 'cloud',
                    img1: require("@/assets/img/icons/servicespage-services-icon3.svg"),
                    img2: require("@/assets/img/icons/servicespage-services-icon-bg3.jpg"),
                    hover: false
                },
                {
                    title: 'desktop',
                    img1: require("@/assets/img/icons/servicespage-services-icon4.svg"),
                    img2: require("@/assets/img/icons/servicespage-services-icon-bg4.jpg"),
                    hover: false
                }
            ]
        };
    }
};
</script>

<style>
.servicespage-card-content1{
    width: 100%;
    transition: .4s;
    color: #00007E;
    background-color: white;
}

.servicespage-card-content1:hover {
    color: #ffffff;
}

.servicespage-card-icon {
    padding-top: 40px;
    padding-bottom: 40px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}

.services-page-items-border:nth-child(n) {
    border-right: 2px solid #00007E;
}

.services-page-items-border:last-child {
    border-right: none;
}

.services-running-line {
    width: 100vw;
    height: 100px;
}

@media (min-width: 1280px) and (max-width: 1439.5px) {
    .servicespage-card-icon {
        padding-top: 30px;
        padding-bottom: 30px;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }
}

@media (min-width: 1024px) and (max-width: 1279.5px) {
    .servicespage-card-icon {
        padding-top: 0px;
        padding-bottom: 0px;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }
}

@media (min-width: 768px) and (max-width: 1023.5px) {
    .servicespage-card-icon {
        padding-top: 20px;
        padding-bottom: 20px;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }
    .services-page-items-border:nth-child(1) {
        border-right: 2px solid #00007E;
        border-bottom: 1px solid #00007E;
    }
    .services-page-items-border:nth-child(2) {
        border-bottom: 1px solid #00007E;
        border-right: none;
    }
    .services-page-items-border:nth-child(3) {
        border-top: 1px solid #00007E;
    }
    .services-page-items-border:last-child {
        border-top: 1px solid #00007E;
        border-right: none;
    }
    .services-running-line {
        height: 90px;
        width: 160vw;
    }
}

@media (min-width: 576px) and (max-width: 767.5px) {
    .servicespage-card-icon {
        padding-top: 0px;
        padding-bottom: 0px;
    }
    .services-page-items-border:nth-child(1) {
        border-right: 2px solid #00007E;
        border-bottom: 1px solid #00007E;
    }
    .services-page-items-border:nth-child(2) {
        border-bottom: 1px solid #00007E;
        border-right: none;
    }
    .services-page-items-border:nth-child(3) {
        border-top: 1px solid #00007E;
    }
    .services-page-items-border:last-child {
        border-top: 1px solid #00007E;
        border-right: none;
    }
    .services-running-line {
        height: 80px;
        width: 160vw;
    }
}

@media (min-width: 425px) and (max-width: 575.5px) {
    .servicespage-card-icon {
        padding-top: 0px;
        padding-bottom: 0px;
    }
    .services-page-items-border:nth-child(1) {
        border-right: 2px solid #00007E;
        border-bottom: 1px solid #00007E;
    }
    .services-page-items-border:nth-child(2) {
        border-bottom: 1px solid #00007E;
        border-right: none;
    }
    .services-page-items-border:nth-child(3) {
        border-top: 1px solid #00007E;
    }
    .services-page-items-border:last-child {
        border-top: 1px solid #00007E;
        border-right: none;
    }
    .services-running-line {
        height: 70px;
        width: 160vw;
    }
}

@media (min-width: 320px) and (max-width: 424.5px) {
    .servicespage-card-icon {
        padding-top: 0px;
        padding-bottom: 0px;
    }
    .services-page-items-border:nth-child(1) {
        border-right: 2px solid #00007E;
        border-bottom: 1px solid #00007E;
    }
    .services-page-items-border:nth-child(2) {
        border-bottom: 1px solid #00007E;
        border-right: none;
    }
    .services-page-items-border:nth-child(3) {
        border-top: 1px solid #00007E;
    }
    .services-page-items-border:last-child {
        border-top: 1px solid #00007E;
        border-right: none;
    }
    .services-running-line {
        height: 60px;
        width: 160vw;
    }
}
</style>

