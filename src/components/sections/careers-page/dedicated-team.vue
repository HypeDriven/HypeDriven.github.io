<template>
    <SectionContainer class="bg-main-bg xxs:px-4 xxs:pt-[40px] xxs:pb-10 xs:px-4 xs:pt-[40px] xs:pb-10 sm:px-4 sm:pt-[40px] sm:pb-10">
        <SectionTitle class="text-[#00007E] xxs:text-5xl">{{ $t('careersPage.dedicatedTeam.title') }}</SectionTitle>
        <div class="grid grid-rows-2 grid-cols-3 mt-10 xxs:hidden xs:hidden sm:hidden">
            <CareersPageCard v-for="(itemData, i) in ddedicatedTeamItems" :key="i"  class="bg-main-bg dedicated-item-borders">  
                <div class="cursor-pointer" 
                    @mouseover="itemData.hover=true" 
                    @mouseleave="itemData.hover=false"> 
                        <div class="flex flex-col gap-5 careerspage-dedicated-team-icon"
                        :style="{'background-image': itemData.hover ? `url(`+ itemData.bgImg +`)` : '',}"
                        :class="{'border-[2px] border-[#00007E]': itemData.hover}">  
                            <div class="mt-8 mb-8">
                                <img v-if="itemData?.icon" :src="itemData?.icon" class="lg:w-24 lg:h-24 md:w-20 md:h-20 m-auto"/>   
                            </div>
                            <div v-if="itemData.title" class="lg:text-2xl md:text-xl text-center mt-4 font-bold">
                                <span class="text-[#00007E]">{{itemData?.title}}</span> 
                            </div> 
                        </div>
                    </div>
            </CareersPageCard>
        </div>
        <div class="hidden xxs:grid xs:grid sm:grid grid-rows-6 grid-cols-1 gap-[2px] mt-10 bg-[#00007E] border-b-[2px] border-[#00007E]">
            <CareersPageCard v-for="(itemData, i) in ddedicatedTeamItems" :key="i"  class="bg-main-bg h-[350px]">
                <div class="cursor-pointer" 
                    @mouseover="itemData.hover=true" 
                    @mouseleave="itemData.hover=false"> 
                        <div class="flex flex-col gap-5 careerspage-dedicated-team-icon"
                        :style="{'background-image': `url(`+ itemData.bgImg +`)`}">  
                            <div class="mt-8 mb-8">
                                <img v-if="itemData?.icon" :src="itemData?.icon" class="w-24 h-24 m-auto"/>   
                            </div>
                            <div v-if="itemData.title" class="text-3xl text-center mt-4 font-bold">
                                <span class="text-[#00007E]">{{itemData?.title}}</span> 
                            </div> 
                        </div>
                    </div>
            </CareersPageCard>
        </div>
    </SectionContainer>
</template>

<script>
import SectionContainer from "../container";
import SectionTitle from "../title";
import CareersPageCard from "./careerspage-card.vue"
export default {
    name: "CareersPageDedicatedTeamComponent",
    components: {
        SectionContainer,
        SectionTitle,
        CareersPageCard
    },
    data: () => {
        return {
            ddedicatedTeamItems: [
                {
                    title: 'Back-end developers',
                    icon: require("@/assets/img/icons/careerspage-dedicated-team-icon1.svg"),
                    bgImg: require("@/assets/img/icons/careerspage-dedicated-team-icon-bg1.png"),
                    hover: false
                },
                {
                    title: 'Mobile developers',
                    icon: require("@/assets/img/icons/careerspage-dedicated-team-icon3.svg"),
                    bgImg: require("@/assets/img/icons/careerspage-dedicated-team-icon-bg2.png"),
                    hover: false
                },
                {
                    title: 'UI/UX designers',
                    icon: require("@/assets/img/icons/careerspage-dedicated-team-icon3.svg"),
                    bgImg: require("@/assets/img/icons/careerspage-dedicated-team-icon-bg3.png"),
                    hover: false
                },
                {
                    title: 'Front-end developers',
                    icon: require("@/assets/img/icons/careerspage-dedicated-team-icon4.svg"),
                    bgImg: require("@/assets/img/icons/careerspage-dedicated-team-icon-bg4.png"),
                    hover: false
                },
                {
                    title: 'Business analysts',
                    icon: require("@/assets/img/icons/careerspage-dedicated-team-icon5.svg"),
                    bgImg: require("@/assets/img/icons/careerspage-dedicated-team-icon-bg5.png"),
                    hover: false
                },
                {
                    title: 'Full-stack developers',
                    icon: require("@/assets/img/icons/careerspage-dedicated-team-icon6.svg"),
                    bgImg: require("@/assets/img/icons/careerspage-dedicated-team-icon-bg6.png"),
                    hover: false
                },
                {
                    title: 'Project managers',
                    icon: require("@/assets/img/icons/careerspage-dedicated-team-icon7.svg"),
                    bgImg: require("@/assets/img/icons/careerspage-dedicated-team-icon-bg7.png"),
                    hover: false
                },
                {
                    title: 'DevOps engineers',
                    icon: require("@/assets/img/icons/careerspage-dedicated-team-icon8.svg"),
                    bgImg: require("@/assets/img/icons/careerspage-dedicated-team-icon-bg8.png"),
                    hover: false
                },
                {
                    title: '3D designers',
                    icon: require("@/assets/img/icons/careerspage-dedicated-team-icon9.svg"),
                    bgImg: require("@/assets/img/icons/careerspage-dedicated-team-icon-bg9.png"),
                    hover: false
                }
            ]
        }
    }
}
</script>

<style>
.careerspage-dedicated-team-icon {
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
.dedicated-item-borders:nth-child(1) {
    border-right: 2px solid #00007E;
    border-bottom: 2px solid #00007E;
}
.dedicated-item-borders:nth-child(2) {
    border-right: 2px solid #00007E;
    border-bottom: 2px solid #00007E;
}
.dedicated-item-borders:nth-child(3) {
    border-bottom: 2px solid #00007E;
}
.dedicated-item-borders:nth-child(4) {
    border-right: 2px solid #00007E;
    border-bottom: 2px solid #00007E;
}
.dedicated-item-borders:nth-child(5) {
    border-right: 2px solid #00007E;
    border-bottom: 2px solid #00007E;
}
.dedicated-item-borders:nth-child(6) {
    border-bottom: 2px solid #00007E;
}
.dedicated-item-borders:nth-child(7) {
    border-right: 2px solid #00007E;
}
.dedicated-item-borders:nth-child(8) {
    border-right: 2px solid #00007E;
}
@media (min-width: 768px) and (max-width: 1023.5px) {
    .careerspage-dedicated-team-icon {
        height: 300px;
    }
}
</style>