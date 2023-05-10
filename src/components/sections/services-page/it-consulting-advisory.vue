<template>
    <SectionContainer>
        <div class="flex flex-col">
            <SectionTitle class="text-white h-fit text-[40px] max-w-3xl mb-6">
                {{$t('servicespage.itConsultingAdvisory.title')}}
            </SectionTitle>
            <div class="w-[60px] border-b-4 border-white"></div>
            <div class="mt-10">
                <div class="servicespage-itconsulting-advisory-item" 
                    v-bind:class="[hover1 ? `border-[2px]`: '']"
                    @mouseover="hover1=true" 
                    @mouseout="hover1=false"> 
                    <div class="flex flex-row justify-between">
                        <div class="w-[50%]">
                            <img :src="bg1" class="w-[100%]"/>
                        </div>
                        <div class="flex flex-col justify-between w-[50%] p-8">
                            <div>
                                <Header4 class="text-[#66C3CD] font-bold text-[40px]">
                                    {{ $t(`servicespage.itConsultingAdvisory.${title1}`) }}
                                </Header4>
                                <BodyText class="text-white mt-6 text-[24px]">
                                    {{ $t(`servicespage.itConsultingAdvisory.${subtitle1}`) }}
                                </BodyText>
                            </div>
                            <div class="servicespage-arrowImg-wrapper">
                                <img class="servicespage-arrowImg" src="@/assets/img/images/servicespage-arrow.svg">
                            </div>
                        </div>
                    </div> 
                </div>
                <div class="servicespage-itconsulting-advisory-item" 
                    v-bind:class="[hover2 ? `border-[2px]`: '']"
                    @mouseover="hover2=true" 
                    @mouseout="hover2=false"> 
                    <div class="flex flex-row justify-between">
                        <div class="flex flex-col justify-between w-[50%] p-8">
                            <div>
                                <Header4 class="text-[#66C3CD] font-bold text-[40px]">
                                    {{ $t(`servicespage.itConsultingAdvisory.${title2}`) }}
                                </Header4>
                                <BodyText class="text-white mt-6 text-[24px]">
                                    {{ $t(`servicespage.itConsultingAdvisory.${subtitle2}`) }}
                                </BodyText>
                            </div>
                            <div class="servicespage-arrowImg-wrapper">
                                <img class="servicespage-arrowImg" src="@/assets/img/images/servicespage-arrow.svg">
                            </div>
                        </div>
                        <div class="w-[50%] flex justify-end">
                            <img :src="bg2" class="w-[100%]"/>
                        </div>
                    </div> 
                </div>
            </div>
            
            <Button class="mt-20 rounded-[30px]">{{ $t('button.wantConsult') }}</Button>
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

