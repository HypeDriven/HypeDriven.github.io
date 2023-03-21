<template>
    <SectionContainer class="bg-main-bg" >
            <div class="flex flex-row justify-between">
                <SectionTitle class="text-[#00007E] h-fit m-auto text-6xl tracking-wide">
                    {{$t('industriesPage.digitalTransform.title')}}
                </SectionTitle>
                <img :src="digitalTransformIllustr" class="max-w-[50%]"/>
            </div>
            <div class="">
                <SectionSubTitle class="text-[#000026] h-fit text-xl px-2 font-bold text-left">
                    {{$t('industriesPage.digitalTransform.subtitle')}}
                </SectionSubTitle>
            </div>
            <div class="flex flex-wrap gap-4"> 
                <div v-for="(tech, index) in technologiesItems" :key="index" class="digitalitemHover cursor-pointer">
                    <span class="p-2 text-xl bg-[#2892FF] text-white rounded-lg">{{ tech }}</span>
                </div>
            </div>
            <Button class="mt-20 rounded-[30px]">{{ $t('button.wantConsult') }}</Button>
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
            technologiesItems: ['Digital enterprise', 'ERP', 'RPA', 'HRM', 'CRM', 'Content & document management', 'DMS', 'CMS',
            'Business process management', 'Project Management','Task Management', 'Time Managment', 'Workflow automation', 
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