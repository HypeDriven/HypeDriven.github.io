<template>
    <div class="bg-white">
    <SectionContainer>
        <div class="flex flex-col">
            <SectionTitle class="text-[#66C3CD] h-fit text-[40px] max-w-3xl mb-6">
                {{$t('servicespage.itSupport.title')}}
            </SectionTitle>
            <div class="w-[60px] border-b-4 border-[#66C3CD]"></div>
            <div class="grid grid-rows-2 gap-[3px] grid-cols-3 mt-10 bg-[#00007E]">
                <ServiceCard v-for="(itemData, index) in itSupportItems" :key="index" class="bg-white h-[350px]">
                    <div class="servicespage-itsupport-item cursor-pointer" 
                    @mouseover="itemData.hover=true" 
                    @mouseleave="itemData.hover=false"> 
                        <div class="flex flex-col gap-5 servicespage-itsupport-icon"
                        :style="{'background-image': itemData.hover ? `url(`+ itemData.bgImg +`)` : '',}">   
                            <div class="mt-8 mb-8">
                                <img v-if="itemData?.icon" :src="itemData?.icon" class="w-24 h-24 m-auto"/>   
                                <img v-if="itemData?.img" :src="itemData?.img" class="w-72 h-72 m-auto">
                            </div>
                            <div v-if="itemData.title" class="text-2xl text-center mt-4 font-bold">
                                <span v-bind:class="itemData.hover ? 'text-white' : 'text-[#00007E]'">{{$t(`servicespage.itSupport.${itemData?.title}`)}}</span>
                            </div> 
                        </div>
                    </div>
                </ServiceCard>
            </div>
            
            <Button class="mt-20 rounded-[30px]">{{ $t('button.getSupport') }}</Button>
        </div>
    </SectionContainer>
    </div>
</template>

<script>

import SectionContainer from "../container";
import SectionTitle from "../title";
import Button from "../../buttons";
import ServiceCard from "../../services/service_card";
export default {
    name: "ServicesPageItSupportComponent",
    components: {
        SectionContainer,
        SectionTitle,
        Button,
        ServiceCard
    },
    data: function () {
        return {
            itSupportItems: [
                {
                    title: 'item1.title',
                    icon: require("@/assets/img/icons/servicespage-it-support-icon1.svg"),
                    bgImg: require("@/assets/img/icons/servicespage-it-support-icon-bg1.png"),
                    hover: false
                },
                {
                    title: 'item2.title',
                    icon: require("@/assets/img/icons/servicespage-it-support-icon2.svg"),
                    bgImg: require("@/assets/img/icons/servicespage-it-support-icon-bg2.png"),
                    hover: false
                },
                {
                    title: 'item3.title',
                    icon: require("@/assets/img/icons/servicespage-it-support-icon3.svg"),
                    bgImg: require("@/assets/img/icons/servicespage-it-support-icon-bg3.png"),
                    hover: false
                },
                {
                    title: 'item4.title',
                    icon: require("@/assets/img/icons/servicespage-it-support-icon4.svg"),
                    bgImg: require("@/assets/img/icons/servicespage-it-support-icon-bg4.png"),
                    hover: false
                },
                {
                    title: 'item5.title',
                    icon: require("@/assets/img/icons/servicespage-it-support-icon5.svg"),
                    bgImg: require("@/assets/img/icons/servicespage-it-support-icon-bg5.png"),
                    hover: false
                },{
                    img: require("@/assets/img/icons/servicespage-it-support-icon6.svg")
                }
            ]
        };
    }

};
</script>

<style>
.servicespage-itsupport-item {
    width: 100%;
    transition: .4s;
    height: 100%;
}

.servicespage-itsupport-icon {
    padding-top: 40px;
    padding-bottom: 40px;
    height: 350px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
</style>

