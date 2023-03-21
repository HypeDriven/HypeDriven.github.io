<template>
    <SectionContainer class="bg-main-bg" >
            <div class="flex flex-row justify-between">
                <SectionTitle class="text-[#00007E] h-fit m-auto text-6xl tracking-[15px] uppercase">
                    {{$t('technologiesPage.technologicalAdvancement.title')}}
                </SectionTitle>
                <img :src="technologicalAdvancementIllustr" class="max-w-[50%]"/>
            </div>
            <div class="">
                <SectionSubTitle class="text-[#000026] h-fit text-xl px-2 font-bold text-left">
                    {{$t('technologiesPage.technologicalAdvancement.subtitle')}}
                </SectionSubTitle>
            </div>
            <div class="flex flex-wrap gap-4"> 
                <div v-for="(tech, index) in technologicalItems1" :key="index" class="technologicalitemHover cursor-pointer">
                    <span class="p-2 text-xl bg-[#2892FF] text-white rounded-lg">{{ tech }}</span>
                </div>
            </div>
            <div class="flex flex-wrap gap-4 mt-[-40px]"> 
                <div v-for="(tech, index) in technologicalItems2" :key="index" class="technologicalitemHover cursor-pointer">
                    <span class="p-2 text-xl bg-[#66C3CD] text-white rounded-lg">{{ tech }}</span>
                </div>
            </div>
            <Button class="mt-20 rounded-[30px]">{{ $t('button.wantConsult') }}</Button>
    </SectionContainer>
    <div class="with-large-wrapper">
        <div class="max-w-[80%]">
            <span class="text-white text-2xl">With a large number of professionals from around the world, Hypedriven offers full- cycle software development services to IT and non-IT organizations from various industries worldwide.</span>
        </div>
        <div class="max-w-[20%] p-[18px] bg-[#150DCE] cursor-pointer">
            <img class="" :src="buttonArrow">
        </div>
    </div>
</template>

<script>
import Button from "../../buttons";
import SectionContainer from "../container";
import SectionTitle from "../title";
import SectionSubTitle from "../sub-title";
export default {
    name: "TechnologiesPageTechnologicalAdvancementComponent",
    components: {
        SectionContainer,
        SectionTitle,
        SectionSubTitle,
        Button
    },
    data: function () {
        return {
            buttonArrow:  require('@/assets/img/images/aboutpageArrowImg.svg'),
            technologicalAdvancementIllustr: require('@/assets/img/images/technologiespage-technological-advancement-illustr.png'),
            technologicalItems1: ['Blockchain', 'Smart contracts', 'Cryptocurrency wallets', 'Cryptocurrency exchanges', 'NFT', 'DApps', 'DAO', 'DEX',
            'DeFi applications', 'Cloud', 'AWS', 'GCP'],
            technologicalItems2: ['Metaverse', 'Metaverse avatars', 'Virtual products', 'NFT marketplaces', 'Virtual events', 'White Label NFT Marketplace',
            'Web 3.0', 'Extended reality', 'Augmented reality', 'Virtual reality', 'Mixed reality', 'Big data', 'Machine learning', 'Artificial intelligence',
            'Data science', 'Computer vision', 'Internet of things', 'Smart devices', 'Home automation', 'Remote monitoring', 'Telematics', 'Real-time communication',
            'Real-time messaging', 'Video conferencing']
        }
    }
}
</script>

<style>
    .with-large-wrapper {
        background-image: url('../../../assets/img/images/technologiespage-technological-advancement-withlarge-bg.png');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        padding: 120px 90px 120px 90px;
        display: flex;
        justify-content: space-between;
    }
    .technologicalitemHover:hover {
        transition: .4s;
        transform: scale(1.1);
    }
</style>