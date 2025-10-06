<template>
    <SectionContainer class="bg-main-bg sm:px-4 sm:pb-10 xs:px-4 xs:pb-10 xxs:px-4 xxs:pb-10">
            <div class="flex flex-row xxs:flex-col-reverse xs:flex-col-reverse sm:flex-col-reverse justify-between xxs:pt-[40px] xs:pt-[40px] sm:pt-[40px]">
                <SectionTitle class="text-[#00007E] h-fit m-auto lg:text-6xl md:text-5xl sm:text-6xl xs:text-5xl xxs:text-5xl xxs:mt-10 xs:mt-10 sm:mt-10 tracking-wide">
                    {{$t('industriesPage.digitalTransform.title')}}
                </SectionTitle>
                <img :src="digitalTransformIllustr" class="max-w-[50%] xxs:max-w-[100%] xs:max-w-[100%] sm:max-w-[100%]"/>
            </div>
            <div class="">
                <SectionSubTitle class="text-[#000026] h-fit md:text-xl sm:text-xl xs:text-xl xxs:text-lg font-bold text-left">
                    {{$t('industriesPage.digitalTransform.subtitle')}}
                </SectionSubTitle>
            </div>
            <div class="flex flex-wrap md:gap-4 sm:gap-5 xs:gap-5 xxs:gap-4 md:mb-5 sm:mb-5"> 
                <div v-for="(tech, index) in technologiesItems" :key="index" class="digitalitemHover cursor-pointer">
                    <span class="p-2 xxs:p-[5px] xs:p-[8px] sm:p-[10px] md:text-xl sm:text-lg xs:text-lg xxs:text-lg bg-[#2892FF] text-white rounded-lg">{{ tech }}</span>
                </div>
            </div>

            <router-link to="/contact-us">
                <Button class="w-full">{{ $t('button.wantConsult') }}</Button>
            </router-link>
    </SectionContainer>
</template>

<script>
import Button from "../../buttons";
import SectionContainer from "../container";
import SectionTitle from "../title";
import SectionSubTitle from "../sub-title";
export default {
    name: "IndustriesPageDigatalTransformationComponent",
    components: {
        SectionContainer,
        SectionTitle,
        SectionSubTitle,
        Button
    },
    data: function () {
        return {
            digitalTransformIllustr: require('@/assets/img/images/industriespage-digatal-transform-illustr.png'),
            technologiesItems: ['Digital enterprise', 'ERP', 'RPA', 'HRM', 'CRM', 'Content & document management', 'DMS',
            'Business process management', 'CMS', 'Project Management','Task Management', 'Time Managment', 'Workflow automation', 
            'Digital workspace', 'Team collaboration', 'Service desk', 'Video conferencing', 'Data management', 'Business Intelligence',
            'Predictive Analytics', 'Data Analytics and Visualization']
        }
    }
}
</script>

<style>
    .digitalitemHover:hover {
        transition: .4s;
        transform: scale(1.1);
    }
</style>