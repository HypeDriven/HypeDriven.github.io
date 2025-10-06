<template>
    <div class="servicespage-sowtwaretesting-wrapper"
    :style="{backgroundImage: `url(${servicespageSoftwareBg1})`,}"> 
    <SectionContainer class="sm:px-4 xs:px-4 xxs:p-4 py-0 xs:py-1 xxs:py-1">
        <div class="flex flex-col sm:pt-[20px] xs:pt-[40px] xxs:pt-[40px]">
            <SectionTitle class="text-white h-fit md:text-[40px] sm:text-[32px] xs:text-[26px] xxs:text-[22px] max-w-3xl mb-6">
                {{$t('servicespage.softwareTesting.title')}}
            </SectionTitle>
            <div class="w-[60px] border-b-4 border-white"></div>
            <div class="flex flex-row xxs:flex-col xs:flex-col sm:flex-col mt-10 xl:mb-20 lg:mb-10 md:mb-8 sm:mb-6 xs:mb-6 xxs:mb-6 m-auto">
                <div class="servicespage-softwaretesting-item md:border-r-[1px] xxs:border-b-[1px] xs:border-b-[1px] sm:border-b-[1px] border-[#00007E]"  
                v-bind:class="[hover1 ? ` bg-[#00007E]`: 'bg-white']"
                @mouseover="changeBackground1(servicespageSoftwareBg2, true)" 
                @mouseout="restoreBackground">
                    <div class="flex flex-row justify-between" >
                        <div class="xl:w-[25%] md:w-[22%] sm:w-[24%] xs:w-[22%] xxs:w-[22%]">
                            <img :src="servicespageSoftwareIcon1" class="sm:m-auto md:m-0"/>
                        </div>
                        <div class="w-[75%] xxs:pt-5 xs:pt-5 sm:pt-5">
                            <Header4 class="font-bold xl:text-[40px] lg:text-[34px] md:text-[28px] sm:text-[26px] xs:text-[22px] xxs:text-[18px]" v-bind:class="[hover1 ? `text-[#66C3CD]`: 'text-[#091796] ']">
                                {{ $t('servicespage.softwareTesting.item1.title') }}
                            </Header4>
                            <BodyText class="xl:mt-6 lg:mt-4 xl:text-[24px] lg:text-[20px] md:text-[16px] sm:text-[18px] xs:text-[16px] xxs:text-[14px] xxs:mt-5 xs:mt-5 sm:mt-3" v-bind:class="[hover1 ? `text-white`: 'text-black ']">
                                {{ $t('servicespage.softwareTesting.item1.subtitle') }}
                            </BodyText>
                        </div>
                    </div>
                    <div class="servicespage-arrowImg-wrapper">
                        <img class="servicespage-arrowImg" src="@/assets/img/servicesArrowImg.svg" v-bind:class="[hover1 ? ` servicespage-arrowImg-hover `: '']">
                    </div>
                </div>
                <div class="servicespage-softwaretesting-item md:border-l-[1px] xxs:border-t-[1px] xs:border-t-[1px] sm:border-t-[1px] border-[#00007E]" 
                v-bind:class="[hover2 ? ` bg-[#00007E]`: 'bg-white']" 
                @mouseover="changeBackground2(servicespageSoftwareBg3, true)" 
                @mouseout="restoreBackground">
                    <div class="flex flex-row justify-between">
                        <div  class="xl:w-[25%] md:w-[22%] sm:w-[24%] xs:w-[22%] xxs:w-[22%]"> 
                            <img :src="servicespageSoftwareIcon2" class="sm:m-auto md:m-0"/>
                        </div>
                        <div class="w-[75%] xxs:pt-5 xs:pt-5 sm:pt-5">
                            <Header4 class="font-bold xl:text-[40px] lg:text-[34px] md:text-[28px] sm:text-[26px] xs:text-[22px] xxs:text-[18px]" v-bind:class="[hover2 ? `text-[#66C3CD]`: 'text-[#091796] ']">
                                {{ $t('servicespage.softwareTesting.item2.title') }}
                            </Header4>
                            <BodyText class="xl:mt-6 lg:mt-4 xl:text-[24px] lg:text-[20px] md:text-[16px] sm:text-[18px] xs:text-[16px] xxs:text-[14px] xxs:mt-5 xs:mt-5 sm:mt-3" v-bind:class="[hover2 ? `text-white`: 'text-black ']">
                                {{ $t('servicespage.softwareTesting.item2.subtitle') }}
                            </BodyText>
                        </div>
                    </div>
                    <div class="servicespage-arrowImg-wrapper">
                        <img class="servicespage-arrowImg" src="@/assets/img/servicesArrowImg.svg" v-bind:class="[hover2 ? ` servicespage-arrowImg-hover `: '']">
                    </div>
                </div>
            </div>
            <router-link to="/contact-us">
                <Button class="w-full">{{ $t('button.getAdvice') }}</Button>
            </router-link>
        </div>
    </SectionContainer>
    </div>
</template>

<script>

import SectionContainer from "../container";
import SectionTitle from "../title";
import Button from "../../buttons";
import Header4 from "../../text/header/header_4.vue";
import BodyText from "../../text/body/body.vue";

export default {
    name: "ServicesPageSoftwareTestComponent",
    components: {
        SectionContainer,
        SectionTitle,
        Button,
        Header4,
        BodyText
    },
    data: function () {
        return {
            servicespageSoftwareIcon1: require('@/assets/img/images/servicespage-softwaretesting-item-icon1.svg'),
            servicespageSoftwareIcon2: require('@/assets/img/images/servicespage-softwaretesting-item-icon2.svg'),
            servicespageSoftwareBg1: require('@/assets/img/images/servicespage-softwaretesting-bg1.png'),
            servicespageSoftwareBg2: require('@/assets/img/images/servicespage-softwaretesting-bg2.png'),
            servicespageSoftwareBg3: require('@/assets/img/images/servicespage-softwaretesting-bg3.png'),
            hover1: false,
            hover2: false
        };
    },
    methods: {
        changeBackground1(newBg, hover1) {
            this.servicespageSoftwareBg1 = newBg
            this.hover1 = hover1
        },
        changeBackground2(newBg, hover2) {
            this.servicespageSoftwareBg1 = newBg
            this.hover2 = hover2
        },
        restoreBackground() {
            this.servicespageSoftwareBg1 = require('@/assets/img/images/servicespage-softwaretesting-bg1.png')
            this.hover1 = false
            this.hover2 = false
        }
    }
};
</script>

<style>
.servicespage-sowtwaretesting-wrapper {
    background-size: cover;
    background-position: center;
    height: 100vh;
    transition: .4s;
}
.servicespage-softwaretesting-item {
    padding: 40px;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    transition: .4s;
}
.servicespage-arrowImg-wrapper {
    display: flex;
    justify-content: flex-end;
}
.servicespage-arrowImg {
    width: 42px;
    height: 42px;
}
.servicespage-arrowImg-hover {
    filter: brightness(.8) invert(20) hue-rotate(95deg);
    transition: .4s;
}
@media (min-width: 2200px) {
    .servicespage-sowtwaretesting-wrapper {
        height: 75vh;
    }
}
@media (min-width: 1750px) and (max-width: 2199.5px) {
    .servicespage-sowtwaretesting-wrapper {
        height: 85vh;
    }
}
@media (min-width: 1024px) and (max-width: 1279.5px) {
    .servicespage-softwaretesting-item {
        height: auto;
        padding: 35px;
    }
}
@media (min-width: 768px) and (max-width: 1023.5px) {
    .servicespage-sowtwaretesting-wrapper {
        height: 100%;
    }
    .servicespage-softwaretesting-item {
        height: auto;
        padding: 35px;
    }
    .servicespage-arrowImg {
        width: 30px;
        height: 30px;
    }
}
@media (min-width: 576px) and (max-width: 767.5px) {
    .servicespage-sowtwaretesting-wrapper {
        height: 100%;
    }
    .servicespage-softwaretesting-item {
        height: 215px; 
        padding: 12px;
    }
    .servicespage-arrowImg {
        width: 30px;
        height: 30px;
    }
}
@media (min-width: 425px) and (max-width: 575.5px) {
    .servicespage-sowtwaretesting-wrapper {
        height: 100%;
    }
    .servicespage-softwaretesting-item {
        height: 220px;
        padding: 12px;
    }
    .servicespage-arrowImg {
        width: 30px;
        height: 30px;
    }
}
@media (min-width: 320px) and (max-width: 424.5px) {
    .servicespage-sowtwaretesting-wrapper {
        height: 100%;
    }
    .servicespage-softwaretesting-item {
        height: 225px;
        padding: 12px;
    }
    .servicespage-arrowImg {
        width: 30px;
        height: 30px;
    }
}
</style>

