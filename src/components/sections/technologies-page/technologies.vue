<template>
    <div class="bg-white">
    <SectionContainer class="gap-[0px]">
        <div class="flex flex-row justify-between max-w-8xl pt-[70px] mb-28">
            <div class="flex flex-row justify-between mt-[-140px]">
                <SectionTitle class="text-[#00007E] h-fit m-auto text-6xl max-w-xl">
                    {{$t('technologiesPage.technologies.title')}}
                </SectionTitle>
            </div>
            <div class="border-l-2 border-[#00007E] mr-[-260px]"></div>
            <div class="flex max-w-xl"> <!--border-l-2 border-[#00007E]-->
                <SectionSubTitle class="text-[#000026] h-fit ml-12 text-xl px-2 font-bold text-left">
                    {{$t('technologiesPage.technologies.subtitle')}}
                </SectionSubTitle>
            </div>
        </div>
        <TechnologiesItem v-for="(itemData, index) in technologyItems" :key="index">
            <div class="flex border-y-2 border-[#1D0447]">
                <div class="flex p-4 w-full">
                    <SectionSubTitle class="h-fit text-3xl font-bold text-left"
                    v-bind:class="itemData.showContent ? 'text-[#00007E]' : 'text-[#66C3CD]'"
                    >{{ itemData.title }}</SectionSubTitle>
                </div>
                <div class="border-l-2 p-4 border-[#1D0447] cursor-pointer" @click="itemData.showContent = ! itemData.showContent">
                    <img :src="buttonArrow" v-bind:class="itemData.showContent ? 'rotate-180' : ''"/>
                </div>
            </div>
            <div v-show="itemData.showContent">
                <div class="flex flex-col" :style="{flexDirection: itemData.imgType === 3 ? 'row' : 'column'}" :class="{'justify-between': itemData.imgType === 3}"> 
                    <div class="flex" :class="{'justify-end': itemData.imgType === 2}">
                        <img :src="itemData.img" :class="{'w-full': itemData.imgType === 1}"/>
                    </div>
                    <div class="flex flex-col justify-between" :class="{'max-w-[50%]': itemData.imgType === 3}">
                        <div class="flex flex-col justify-between">
                            <div :class="{'flex flex-wrap gap-4': itemData.imgType === 3, 'grid grid-rows-1 grid-cols-2 gap-4': itemData.imgType !== 3}">  
                                <div v-for="(technology, index) in itemData.technologiesDescribe" :key="index" class="flex justify-around mt-4"> <!--border-b-2 border-black || itemBorder-->
                                    <div class="max-w-[25%]">
                                        <img :src="technology.icon"/>
                                    </div>
                                    <div class="max-w-[75%] pt-5">
                                        <SectionSubTitle class="text-[#00007E] h-fit text-3xl max-w-xl font-bold">{{ technology.title }}</SectionSubTitle>
                                        <SectionSubTitle class="text-black h-fit text-xl font-bold text-left mt-4">{{ technology.subtittle }}</SectionSubTitle>
                                    </div> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="cursor-pointer rotate-180  mt-16 mb-6" @click="itemData.showContent = ! itemData.showContent">
                    <img :src="buttonArrow" class="m-auto"/>
                </div>
            </div>
        </TechnologiesItem>
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
    /*.itemBorder {
        border: 4px solid transparent;
        animation: gradient-border 4s infinite linear;
    }
    .itemBorder:nth-of-type(4n) {
        border-top: 1px solid red;
    }
    .itemBorder:nth-of-type(5n) {
        border-top: 1px solid red;
    }
    .itemBorder:nth-of-type(7n) {
        border-top: 1px solid red;
    }
    @keyframes gradient-border {
        0% {
        border-image: linear-gradient(to right, #0019fd, #00eeff) 1;
        }
        50% {
            border-image: linear-gradient(to right, #08ffff, #1900ff) 1;
        }
        100% {
            border-image: linear-gradient(to right, #900efa, #0066ff) 1;
        }
    }*/
</style>

