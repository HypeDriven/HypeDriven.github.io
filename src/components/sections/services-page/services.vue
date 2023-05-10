<template>
    <div class="bg-white">
    <SectionContainer>
        <div class="flex flex-row justify-between max-w-8xl pt-[70px]">
            <div class="flex flex-row justify-between mt-[-140px]">
                <SectionTitle class="text-[#00007E] h-fit m-auto text-6xl max-w-xl">
                    {{$t('servicespage.services.title')}}
                </SectionTitle>
            </div>
            <div class="border-l-2 border-[#00007E] mr-[-350px]"></div>
            <div class="flex max-w-xl"> <!--border-l-2 border-[#00007E]-->
                <SectionSubTitle class="text-[#000026] h-fit ml-12 text-xl px-2 font-bold text-left">
                    {{$t('servicespage.services.subtitle1')}}
                </SectionSubTitle>
            </div>
        </div>
        <div class="flex flex-col">
            <SectionTitle class="text-[#66C3CD] h-fit text-[40px] max-w-xl mb-6">
                {{$t('servicespage.services.subtitle2')}}
            </SectionTitle>
            <div class="w-[60px] border-b-4 border-[#66C3CD]"></div>
            <div class="flex flex-row mt-[100px]">
                <ServiceCard v-for="(itemData, index) in services" :key="index" class="services-page-items-border">
                    <div class="servicespage-card-content1 cursor-pointer" @mouseover="itemData.hover=true" @mouseleave="itemData.hover=false"> 
                        <div class="flex flex-col gap-5 servicespage-card-icon"
                        :style="{'background-image': itemData.hover ? `url(`+ itemData.img2 +`)` : '',}">   
                            <div class="mt-8 mb-8">
                                <img :src="itemData?.img1" class="w-24 h-24 m-auto icons"/>   
                                <div class="text-2xl text-center mt-4 font-bold">
                                    <span>{{$t(`servicespage.services.${itemData?.title}`)}}</span>
                                </div> 
                            </div>
                        </div>
                    </div>
                </ServiceCard>
            </div>
            <Button class="mt-20 rounded-[30px]">{{ $t('button.needDev') }}</Button>
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
}

.servicespage-card-content1:hover {
    color: #ffffff;
}

.servicespage-card-icon {
    padding-top: 40px;
    padding-bottom: 40px;
    background-repeat: no-repeat;
    background-size: cover;
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
</style>

