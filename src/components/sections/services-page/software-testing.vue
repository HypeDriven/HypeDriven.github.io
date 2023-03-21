<template>
    <div class="servicespage-sowtwaretesting-wrapper"
    :style="{backgroundImage: `url(${servicespageSoftwareBg1})`,}"> <!--hover1 ? `url(${servicespageSoftwareBg2})`: ''-->
    <SectionContainer>
        <div class="flex flex-col">
            <SectionTitle class="text-white h-fit text-[40px] max-w-3xl mb-6">
                {{$t('servicespage.softwareTesting.title')}}
            </SectionTitle>
            <div class="w-[60px] border-b-4 border-white"></div>
            <div class="flex mt-10 m-auto">
                <div class="servicespage-softwaretesting-item"  
                v-bind:class="[hover1 ? ` bg-[#00007E]`: 'bg-white']"
                @mouseover="changeBackground1(servicespageSoftwareBg2, true)" 
                @mouseout="restoreBackground">
                    <div class="flex flex-row justify-between" >
                        <div class="w-[25%]">
                            <img :src="servicespageSoftwareIcon1"/>
                        </div>
                        <div class="w-[75%]">
                            <Header4 class="font-bold text-[40px]" v-bind:class="[hover1 ? `text-[#66C3CD]`: 'text-[#091796] ']">
                                {{ $t('servicespage.softwareTesting.item1.title') }}
                            </Header4>
                            <BodyText class="mt-6 text-[24px]" v-bind:class="[hover1 ? `text-white`: 'text-black ']">
                                {{ $t('servicespage.softwareTesting.item1.subtitle') }}
                            </BodyText>
                        </div>
                    </div>
                    <div class="servicespage-arrowImg-wrapper">
                        <img class="servicespage-arrowImg" src="@/assets/img/servicesArrowImg.svg" v-bind:class="[hover1 ? ` servicespage-arrowImg-hover `: '']">
                    </div>
                </div>
                <div class="servicespage-softwaretesting-item" 
                v-bind:class="[hover2 ? ` bg-[#00007E]`: 'bg-white']" 
                @mouseover="changeBackground2(servicespageSoftwareBg3, true)" 
                @mouseout="restoreBackground">
                    <div class="flex flex-row justify-between">
                        <div  class="w-[25%]">
                            <img :src="servicespageSoftwareIcon2"/>
                        </div>
                        <div class="w-[75%]">
                            <Header4 class="font-bold text-[40px]" v-bind:class="[hover2 ? `text-[#66C3CD]`: 'text-[#091796] ']">
                                {{ $t('servicespage.softwareTesting.item2.title') }}
                            </Header4>
                            <BodyText class="mt-6 text-[24px]" v-bind:class="[hover2 ? `text-white`: 'text-black ']">
                                {{ $t('servicespage.softwareTesting.item2.subtitle') }}
                            </BodyText>
                        </div>
                    </div>
                    <div class="servicespage-arrowImg-wrapper">
                        <img class="servicespage-arrowImg" src="@/assets/img/servicesArrowImg.svg" v-bind:class="[hover2 ? ` servicespage-arrowImg-hover `: '']">
                        <!-- <img class="servicespage-arrowImg" src="@/assets/img/images/servicespage-arrow.svg"> -->
                    </div>
                </div>
            </div>
            
            <Button class="mt-20 rounded-[30px]">{{ $t('button.getAdvice') }}</Button>
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
    /* background-color: white; */
    padding: 40px;
    height: 350px;
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

</style>

