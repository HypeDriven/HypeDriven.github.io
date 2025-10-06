<template>
    <div class="bg-white">
    <SectionContainer class="gap-[0px] xxs:px-4 xs:px-4 sm:px-4">
        <div class="flex flex-row xxs:flex-col xs:flex-col sm:flex-col justify-between max-w-8xl pt-[70px] xxs:pt-[40px] xs:pt-[40px] sm:pt-[40px] mb-28 xxs:mb-10 xs:mb-10 sm:mb-12">
            <div class="flex flex-row justify-between mt-[-160px] xxs:mt-0 xs:mt-0 sm:mt-0">
                <SectionTitle class="text-[#00007E] h-fit m-auto lg:text-6xl md:text-5xl xxs:text-5xl max-w-xl xxs:mb-6 xs:mb-6 sm:mb-6">
                    {{$t('technologiesPage.technologies.title')}}
                </SectionTitle>
            </div>
            <div class="border-l-2 border-[#00007E] 1xl:mr-[-200px] xl:mr-[-100px] lg:mr-[-70px] md:mr-[-70px] xxs:hidden xs:hidden sm:hidden"></div> 
            <div class="flex max-w-xl xxs:max-w-full xs:max-w-full sm:max-w-full"> 
                <SectionSubTitle class="text-[#000026] h-fit ml-12 xxs:ml-0 xs:ml-0 sm:ml-0 lg:text-xl md:text-base sm:text-xl xs:text-xl xxs:text-lg px-2 xxs:px-0 xs:px-0 sm:px-0 md:max-w-xs lg:max-w-sm 1xl:max-w-xl font-bold text-left">
                    {{$t('technologiesPage.technologies.subtitle')}}
                </SectionSubTitle>
            </div>
        </div>
        <div class="xxs:mb-10 xs:mb-10 sm:mb-10 md:mb-10 border-b-2 border-[#1D0447]">
            <TechnologiesItem v-for="(itemData, index) in technologyItems" :key="index">
                <div class="flex border-t-2 border-[#1D0447]" :class="itemData.showContent ? 'border-b-2' : ''">
                    <div class="flex p-4 xxs:pl-0 xs:pl-0 sm:pl-0 w-full">
                        <SectionSubTitle class="h-fit text-3xl xxs:text-[20px] font-bold text-left"
                        v-bind:class="itemData.showContent ? 'text-[#00007E]' : 'text-[#66C3CD]'"
                        >{{ itemData.title }}</SectionSubTitle>
                    </div>
                    <div class="border-l-2 p-4  flex justify-center border-[#1D0447] cursor-pointer" @click="itemData.showContent = ! itemData.showContent">
                        <img :src="buttonArrow" class="buttonArrowImg" v-bind:class="itemData.showContent ? 'rotate-180' : ''"/>
                    </div>
                </div>
                <div v-show="itemData.showContent">
                    <div class="flex"  :class="{'xl:flex-row xxs:flex-col xs:flex-col sm:flex-col md:flex-col lg:flex-col justify-between': itemData.imgType === 2, 'flex-col': itemData.imgType !== 2}"> 
                        <div class="flex xxs:hidden xs:hidden"> 
                            <img :src="itemData.img" :class="{'w-full': itemData.imgType === 1}" class="width-height sm:hidden md:hidden xl:block"/> 
                            <img :src="itemData.img2" class="hidden sm:block md:block md:w-full xl:hidden"/> 
                        </div>
                        <div class="flex flex-col justify-between" :class="{'xl:max-w-[50%] xxs:max-w-[100%] xs:max-w-[100%] sm:max-w-[100%] md:max-w-[100%] lg:max-w-[100%]': itemData.imgType === 2}">
                            <div class="flex flex-col justify-between">
                                <div :class="{'xl:flex flex-wrap gap-4 lg:grid lg:grid-cols-2': itemData.imgType === 2, 'grid grid-rows-1 lg:grid-cols-2 gap-4 xxs:grid-cols-1 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1': itemData.imgType !== 2}">  
                                    <div v-for="(technology, index) in itemData.technologiesDescribe" :key="index" class="flex justify-around mt-4 border-b-2 border-black pb-16 border-bottom-none"> 
                                        <div class="max-w-[25%] xxs:max-w-[24%] xs:max-w-[24%]">
                                            <img :src="technology.icon"/>
                                        </div>
                                        <div class="max-w-[75%] pt-5 xxs:pt-9 xs:pt-9">
                                            <SectionSubTitle class="text-[#00007E] h-fit text-3xl xxs:text-[18px] max-w-xl font-bold">{{ technology.title }}</SectionSubTitle>
                                            <SectionSubTitle class="text-black h-fit text-xl xxs:text-lg font-bold text-left mt-4">{{ technology.subtittle }}</SectionSubTitle>
                                        </div> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="cursor-pointer rotate-180  mt-16 mb-6" @click="itemData.showContent = ! itemData.showContent">
                        <img :src="buttonArrow" class="m-auto buttonArrowImg"/>
                    </div>
                </div>
            </TechnologiesItem>
        </div>
    </SectionContainer>
    </div>
</template>

<script>
import SectionContainer from "../container";
import SectionTitle from "../title";
import SectionSubTitle from "../sub-title";
import TechnologiesItem from "./technology-item.vue";
import technologyItems from "./storage";
export default {
    name: "TechnologiesPageTechnologiesComponent",
    components: {
        SectionContainer,
        SectionTitle,
        SectionSubTitle,
        TechnologiesItem
    },
    data: function () {
        return {
            technologyItems,
            buttonArrow: require('@/assets/img/images/industriespage-industry-button-arrow.svg'),
            contentButtonArrow:  require('@/assets/img/images/aboutpageArrowImg.svg'),            
        };
    }
};
</script>

<style>
    @media (min-width: 1024px) and (max-width: 1279.5px) {
        .width-height {
            width: 100%;
            height: 200px;
        }
    }
    @media (min-width: 768px) and (max-width: 1023.5px) {
        .width-height {
            width: 100%;
            height: 120px;
        }
        .border-bottom-none:last-child {
            border-bottom: none;
        }
    }
    @media (min-width: 576px) and (max-width: 767.5px) {
        .width-height {
            width: 100%;
            height: 100px;
        }
        .border-bottom-none:last-child {
            border-bottom: none;
        }
    }
    @media (min-width: 425px) and (max-width: 575.5px) { 
        .width-height {
            width: 100%;
            height: 80px;
        }
        .border-bottom-none:last-child {
            border-bottom: none;
        }
    }
    @media (min-width: 320px) and (max-width: 424.5px) {
        .width-height {
            width: 100%;
            height: 250px;
        }
        .border-bottom-none:last-child {
            border-bottom: none;
        }
    }
</style>

