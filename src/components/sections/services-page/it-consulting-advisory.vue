<template>
    <SectionContainer class="p-2 sm:px-4 xxs:p-5 xs:p-5">
        <div class="flex flex-col sm:py-[40px] xs:py-[40px] xxs:py-[40px]">
            <SectionTitle class="text-white h-fit text-[40px] sm:text-[30px] xs:text-[26px] xxs:text-[22px] max-w-3xl mb-6">
                {{$t('servicespage.itConsultingAdvisory.title')}}
            </SectionTitle>
            <div class="w-[60px] border-b-4 border-white"></div>
            <div class="mt-10 mb-20">
                <div class="servicespage-itconsulting-advisory-item" 
                    v-bind:class="[hover1 ? `border-[2px]`: '']"
                    @mouseover="hover1=true" 
                    @mouseout="hover1=false"> 
                    <div class="flex flex-row xxs:flex-col xs:flex-col justify-between">
                        <div class="w-[50%] xxs:w-[100%] xs:w-[100%] flex justify-start"> 
                            <img :src="bg1" class="w-[100%]"/>
                        </div>
                        <div class="flex flex-col justify-between w-[50%] xxs:w-[100%] xs:w-[100%] xl:p-8 lg:p-5 md:p-4 sm:p-2 xs:px-3 xs:py-6 xxs:px-3 xxs:py-6">
                            <div>
                                <Header4 class="text-[#66C3CD] font-bold xl:text-[40px] lg:text-[30px] md:text-[30px] sm:text-[26px] xs:text-[24px] xxs:text-[20px]">
                                    {{ $t(`servicespage.itConsultingAdvisory.${title1}`) }}
                                </Header4> 
                                <BodyText class="text-white mt-6 1xl:text-[24px] xl:text-[20px] lg:text-[16px] md:text-[16px] sm:text-[14px] xs:text-[14px] xxs:text-[12px] xl:pl-16 lg:pl-10 md:pl-5 xs:pl-10 xxs:pl-10 tracking-wider 1xl:leading-8 xl:leading-7 lg:leading-5 md:leading-5 sm:leading-4 xs:leading-5 xxs:leading-5">
                                    {{ $t(`servicespage.itConsultingAdvisory.${subtitle1}`) }}
                                </BodyText>
                            </div>
                            <div class="servicespage-arrowImg-wrapper">
                                <img class="servicespage-arrowImg lg:block md:hidden sm:hidden xs:mt-6 xxs:mt-6" src="@/assets/img/images/servicespage-arrow.svg">
                            </div>
                        </div>
                    </div> 
                </div>
                <div class="servicespage-itconsulting-advisory-item" 
                    v-bind:class="[hover2 ? `border-[2px]`: '']"
                    @mouseover="hover2=true" 
                    @mouseout="hover2=false"> 
                    <div class="flex flex-row xxs:flex-col-reverse xs:flex-col-reverse justify-between">
                        <div class="flex flex-col justify-between w-[50%] xxs:w-[100%] xs:w-[100%] xl:p-8 lg:p-5 md:p-4 sm:p-2 xs:px-3 xs:py-6 xxs:px-3 xxs:py-6">
                            <div>
                                <Header4 class="text-[#66C3CD] font-bold  xl:text-[40px] lg:text-[30px] md:text-[30px] sm:text-[26px] xs:text-[24px] xxs:text-[20px]">
                                    {{ $t(`servicespage.itConsultingAdvisory.${title2}`) }}
                                </Header4>
                                <BodyText class="text-white mt-6 1xl:text-[24px] xl:text-[20px] lg:text-[16px] md:text-[16px] sm:text-[14px] xs:text-[14px] xxs:text-[12px] xl:pl-16 lg:pl-10 md:pl-5 xs:pl-10 xxs:pl-10 tracking-wider 1xl:leading-8 xl:leading-7 lg:leading-5 md:leading-5 sm:leading-4 xs:leading-5 xxs:leading-5">
                                    {{ $t(`servicespage.itConsultingAdvisory.${subtitle2}`) }}
                                </BodyText>
                            </div>
                            <div class="servicespage-arrowImg-wrapper">
                                <img class="servicespage-arrowImg lg:block md:hidden sm:hidden xs:mt-6 xxs:mt-6" src="@/assets/img/images/servicespage-arrow.svg">
                            </div>
                        </div>
                        <div class="w-[50%] xxs:w-[100%] xs:w-[100%] flex justify-end">
                            <img :src="bg2" class="w-[100%]"/>
                        </div>
                    </div> 
                </div>
            </div>
            
            <router-link to="/contact-us">
                <Button class="w-full">{{ $t('button.wantConsult') }}</Button>
            </router-link>
            
        </div>
    </SectionContainer>
</template>

<script>

import SectionContainer from "../container";
import SectionTitle from "../title";
import Button from "../../buttons";
import Header4 from "../../text/header/header_4.vue";
import BodyText from "../../text/body/body.vue";
export default {
    name: "ServicesPageItConsultingAdvisoryComponent",
    components: {
        SectionContainer,
        SectionTitle,
        Button,
        Header4,
        BodyText
    },
    data: function () {
        return {
            title1: 'item1.title',
            subtitle1: 'item1.subtitle',
            title2: 'item2.title',
            subtitle2: 'item2.subtitle',
            bg1: require('@/assets/img/icons/servicespage-it-consulting-advisory-bg1.png'),
            bg2: require('@/assets/img/icons/servicespage-it-consulting-advisory-bg2.png'),
            hover1: false,
            hover2: false
        };
    }

};
</script>

<style>
.servicespage-itconsulting-advisory-item {
    cursor: pointer;
}
</style>

