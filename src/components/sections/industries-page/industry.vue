<template>
    <div class="bg-white">
    <SectionContainer class="gap-[0px]">
        <div class="flex flex-row justify-between max-w-8xl pt-[70px] mb-28">
            <div class="flex flex-row justify-between mt-[-140px]">
                <SectionTitle class="text-[#00007E] h-fit m-auto text-6xl max-w-xl">
                    {{$t('industriesPage.industry.title')}}
                </SectionTitle>
            </div>
            <div class="border-l-2 border-[#00007E] mr-[-350px]"></div>
            <div class="flex max-w-xl"> <!--border-l-2 border-[#00007E]-->
                <SectionSubTitle class="text-[#000026] h-fit ml-12 text-xl px-2 font-bold text-left">
                    {{$t('industriesPage.industry.subtitle')}}
                </SectionSubTitle>
            </div>
        </div>
        <IndustryItem v-for="(itemData, index) in industryItems" :key="index" :id="itemData.title.toLowerCase()"> <!--name="{{`${itemData.title}`}}"-->
            <div class="flex border-y-2 border-[#1D0447]">
                <div class="flex p-4 w-full">
                    <SectionSubTitle class="text-black h-fit text-3xl font-bold text-left">{{ itemData.id }}</SectionSubTitle>
                    <SectionSubTitle class="h-fit text-3xl font-bold text-left ml-6"
                    v-bind:class="itemData.showContent ? 'text-[#00007E]' : 'text-[#66C3CD]'"
                    >{{ itemData.title }}</SectionSubTitle>
                </div>
                <div class="border-l-2 p-4 border-[#1D0447] cursor-pointer" @click="itemData.showContent = ! itemData.showContent">
                    <img :src="buttonArrow" v-bind:class="itemData.showContent ? 'rotate-180' : ''"/>
                </div>
            </div>
            <div v-show="itemData.showContent" class="flex">
                <div class="w-[40%]">
                    <img :src="itemData.img"/>
                </div>
                <div class="flex flex-col justify-between max-w-[60%] p-32">
                    <div class="flex flex-col justify-between h-[80%]">
                        <SectionSubTitle class="text-black h-fit text-xl font-bold text-left">{{ itemData.subtittle }}</SectionSubTitle>
                        <div class="flex flex-wrap gap-4"> <!--grid gap-2 grid-flow-col grid-rows-2 -->
                            <div v-for="(tech, index) in itemData.technologies" :key="index" class="industrylitemHover cursor-pointer">
                                <span class="p-2 text-xl bg-[#2892FF] text-white rounded-lg">{{ tech }}</span>
                            </div>
                        </div>
                       
                    </div>
                    <SectionSubTitle class="text-[#00007E] h-fit text-xl font-bold text-left mb-[-100px]">Contact us</SectionSubTitle>
                </div>
                <div class="flex max-w-10% flex-col justify-end">
                    <div class="p-[26px] bg-[#00007E] cursor-pointer h-[85px]">
                        <img class="" :src="contentButtonArrow">
                    </div>
                </div>
            </div>
        </IndustryItem>
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
            buttonArrow: require('@/assets/img/images/industriespage-industry-button-arrow.svg'),
            contentButtonArrow:  require('@/assets/img/images/aboutpageArrowImg.svg'),
            
        };
    }
};
</script>

<style>
    .industrylitemHover:hover {
        transition: .4s;
        transform: scale(1.1);
    }
</style>

