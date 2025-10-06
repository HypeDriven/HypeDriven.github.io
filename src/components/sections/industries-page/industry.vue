<template>
    <div class="bg-white">
    <SectionContainer class="gap-[0px] sm:px-4 xs:px-4 xxs:px-4">
        <div class="flex flex-row xxs:flex-col xs:flex-col sm:flex-col justify-between max-w-8xl pt-[70px] mb-28 xxs:mb-10 xs:mb-10 sm:mb-10 px-0 xxs:pt-[40px] xs:pt-[40px] sm:pt-[40px]">
            <div class="flex flex-row justify-between mt-[-160px] xxs:mt-0 xs:mt-0 sm:mt-0">
                <SectionTitle class="text-[#00007E] h-fit md:m-auto text-6xl xs:text-5xl xxs:text-5xl max-w-xl sm:mb-6 xs:mb-6 xxs:mb-6">
                    {{$t('industriesPage.industry.title')}}
                </SectionTitle>
            </div>
            <div class="border-l-2 border-[#00007E] xl:mr-[-350px] lg:mr-[-200px] md:mr-[-120px] sm:hidden xs:hidden xxs:hidden"></div>
            <div class="flex max-w-xl xxs:w-full xs:w-full sm:w-full">
                <SectionSubTitle class="text-[#000026] h-fit ml-12 sm:ml-0 xs:ml-0 xxs:ml-0 lg:text-xl md:text-lg sm:text-xl xs:text-lg xxs:text-lg px-2 sm:px-0 xs:px-0 xxs:px-0 font-bold xl:max-w-full lg:max-w-sm md:max-w-xs sm:w-full xs:w-full xxs:w-full text-left">
                    {{$t('industriesPage.industry.subtitle')}}
                </SectionSubTitle>
            </div>
        </div>
        <div class="xxs:mb-10 xs:mb-10 sm:mb-10 border-b-2 border-[#1D0447]">
            <IndustryItem v-for="(itemData, index) in industryItems" :key="index" :id="itemData.title.toLowerCase()"> 
                <div class="flex border-t-2 border-[#1D0447]" :class="itemData.showContent ? 'border-b-2' : ''"> 
                    <div class="flex p-4 sm:pl-1 xs:pl-0 xxs:pl-0 w-full">
                        <SectionSubTitle class="text-black h-fit text-4xl xs:hidden xxs:hidden font-bold text-left">{{ itemData.id }}</SectionSubTitle>
                        <SectionSubTitle class="h-fit text-4xl xs:text-3xl xxs:text-2xl font-bold text-left ml-6 xs:ml-0 xxs:ml-0"
                        v-bind:class="itemData.showContent ? 'text-[#00007E]' : 'text-[#66C3CD]'"
                        >{{ itemData.title }}</SectionSubTitle>
                    </div>
                    <div class="border-l-2 p-4 flex justify-center border-[#1D0447] cursor-pointer" @click="itemData.showContent = ! itemData.showContent">
                        <img :src="buttonArrow" class="buttonArrowImg" v-bind:class="itemData.showContent ? 'rotate-180' : ''"/>
                    </div>
                </div>
                <div v-show="itemData.showContent" class="flex xxs:flex-col xs:flex-col sm:flex-col"> 
                    <div class="xl:w-[30%] md:w-[35%] sm:w-[50%] xs:w-[50%] xxs:w-[50%] xxs:flex xs:flex sm:flex"> 
                        <img :src="itemData.img" class=" w-[100%] border-r-2 md:border-none border-black"/> 
                        <img :src="itemData.img2" class=" w-[100%] xxs:hidden xs:hidden sm:hidden md:hidden xl:block "/> 
                        <img :src="itemData.img3" class="hidden xxs:block xs:block sm:block md:block xl:hidden"> 
                    </div>
                    <div class="industry-block-padding flex flex-col justify-between xl:max-w-[70%] md:max-w-[65%] sm:max-w-full xs:max-w-full xxs:max-w-full 1xl:pl-28 1xl:pt-0 xl:pl-14 lg:pl-8 md:pl-8 sm:pt-12 xs:pt-4 xxs:pt-4">
                        <div class="flex flex-col justify-evenly lg:h-[95%] md:h-[100%] sm:h-[100%] xs:h-[100%] xxs:h-[100%]"> 
                            <div class="md:h-[350px] lg:h-[500px] xl:h-[410px] 1xl:h-[400px] 3xl:h-[480px] flex flex-col justify-around">
                                <SectionSubTitle class="font-semibold h-fit 3xl:text-2xl xl:text-xl lg:text-lg md:text-sm industry-text-size sm:text-xl xs:text-lg xxs:text-lg sm:mb-3 xs:mb-3 xxs:mb-3 text-left">{{ itemData.subtittle }}</SectionSubTitle> 
                                <SectionSubTitle class="font-semibold h-fit 3xl:text-2xl xl:text-xl lg:text-lg md:text-sm industry-text-size sm:text-xl xs:text-lg xxs:text-lg sm:mb-3 xs:mb-3 xxs:mb-3 text-left">{{ itemData.subtittle2 }}</SectionSubTitle> 
                                <SectionSubTitle v-if="itemData.subtittle3" class="font-semibold h-fit 3xl:text-2xl xl:text-xl lg:text-lg md:text-sm industry-text-size sm:text-xl xs:text-lg xxs:text-lg sm:mb-3 xs:mb-3 xxs:mb-3 text-left">{{ itemData.subtittle3 }}</SectionSubTitle> 
                            </div>
                            <div class="flex flex-wrap xl:gap-4 lg:gap-2 md:gap-2 sm:gap-4 sm:my-5 xs:gap-4 xs:my-5 xxs:gap-4 xxs:my-5"> 
                                <div v-for="(tech, index) in itemData.technologies" :key="index" class="industrylitemHover cursor-pointer">
                                    <span class="xl:p-2 lg:p-1 md:p-1 sm:p-2 xs:p-2 xxs:p-2 4xl:text-2xl xl:text-xl lg:text-lg md:text-sm industry-tag-text-size sm:text-xl xs:text-lg xxs:text-lg bg-[#2892FF] text-white rounded-lg">{{ tech }}</span>
                                </div>
                            </div>
                        
                        </div>

                        <div class="flex justify-between text-[#00007E] hover:text-[#66C3CD]" @mouseover="isHovered = true" @mouseleave="isHovered = false"> 
                            <div class="flex flex-col justify-center">
                                <SectionSubTitle class="h-fit 3xl:text-3xl text-xl font-bold text-left">Contact us</SectionSubTitle>
                            </div>
                            <router-link to="/contact-us">
                                <div class="lg:p-[24px] md:p-[20px] sm:p-[21px] xs:p-[18px] xxs:p-[14px] cursor-pointer h-auto "> 
                                    <img class="w-[42px] h-[42px] sm:w-[42px] xs:w-[30px] xxs:w-[28px]" :src="isHovered ? contentButtonArrow2 : contentButtonArrow "> 
                                </div>
                            </router-link>
                        </div>
                    </div>
                   
                </div>
            </IndustryItem>
        </div>
    </SectionContainer>
    </div>
</template>

<script>
import SectionContainer from "../container";
import SectionTitle from "../title";
import SectionSubTitle from "../sub-title";
import IndustryItem from "./industry-item.vue";
export default {
    name: "IndustriesPageIndustryComponent",
    components: {
        SectionContainer,
        SectionTitle,
        SectionSubTitle,
        IndustryItem
    },
    props: {
        industryItems: {
            type: Array
        }
    },
    data: function () {
        return {
            isHovered: false,
            buttonArrow: require('@/assets/img/images/industriespage-industry-button-arrow.svg'),
            contentButtonArrow:  require('@/assets/img/images/industriesArrowImg.svg'),
            contentButtonArrow2:  require('@/assets/img/images/industriesArrowImg2.svg')    
        };
    }
};
</script>

<style>
    .industrylitemHover:hover {
        transition: .4s;
        transform: scale(1.1);
    }
    .buttonArrowImg {
        width: auto;
        height: auto;
    } 
    .industriespage-arrowImg-hover {
        filter: brightness(.8) invert(20) hue-rotate(95deg);
        transition: .4s;
    }
    @media (min-width: 1105px) and (max-width: 1279.5px) {
        .industry-block-padding {
            padding-left: 75px;
        }
    }
    @media (min-width: 920px) and (max-width: 1023.5px) {
        .industry-text-size {
            font-size: larger;
        }
        .industry-tag-text-size {
            font-size: larger;
        }
        .industry-block-padding {
            padding-left: 74px;
        }
    }
    @media (min-width: 850px) and (max-width: 919.5px) {
        .industry-text-size {
            font-size: medium;
        }
        .industry-tag-text-size {
            font-size: medium;
        }
        .industry-block-padding {
            padding-left: 64px;
        }
    }
    @media (min-width: 425px) and (max-width: 575.5px) {
        .buttonArrowImg {
            width: 46px;
            height: auto;
        }
    }
    @media (min-width: 320px) and (max-width: 424.5px) {
        .buttonArrowImg {
            width: 42px;
            height: auto;
        }
    }
</style>

