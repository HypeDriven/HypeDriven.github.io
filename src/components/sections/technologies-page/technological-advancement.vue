<template>
    <SectionContainer class="bg-main-bg xxs:px-4 xxs:pb-10 xs:px-4 sm:px-4 sm:pb-10 pb-10">
            <div class="flex flex-row xxs:flex-col-reverse xs:flex-col-reverse sm:flex-col-reverse justify-between"> 
                <SectionTitle class="text-[#00007E] h-fit m-auto  xxs:text-5xl xs:text-5xl md:text-5xl lg:text-6xl xl:tracking-[15px] xxs:tracking-[2px] xs:tracking-[4px] sm:tracking-[0px] md:tracking-[3px] lg:tracking-[2px] lg:leading-[70px] xl:leading-none uppercase xxs:mt-10 xs:mt-10 sm:mt-10">
                    {{$t('technologiesPage.technologicalAdvancement.title')}}
                </SectionTitle>
                <img :src="technologicalAdvancementIllustr" class="xl:w-[50%] lg:w-[100%] xxs:max-w-[100%] xs:max-w-[100%] sm:max-w-[100%] md:max-w-[35%] lg:max-w-[35%]"/> 
            </div>
            <div class="">
                <SectionSubTitle class="text-[#000026] h-fit text-xl xxs:text-lg font-bold text-left">
                    {{$t('technologiesPage.technologicalAdvancement.subtitle')}}
                </SectionSubTitle>
            </div>
            <div class="flex flex-wrap gap-4 xxs:gap-3 xxs:mb-5 xs:gap-3 xs:mb-5 sm:mb-5"> 
                <div v-for="(tech, index) in technologicalItems1" :key="index" class="technologicalitemHover cursor-pointer">
                    <span class="p-2 text-xl xxs:p-[5px] xxs:text-lg xs:p-[5px] xs:text-lg bg-[#2892FF] text-white rounded-lg">{{ tech }}</span>
                </div>
            </div>
            <div class="flex flex-wrap gap-4 mt-[-40px] xxs:gap-3 xs:gap-3 xxs:mb-5 xs:mb-5 sm:mb-3 md:mb-3 lg:mb-10"> 
                <div v-for="(tech, index) in technologicalItems2" :key="index" class="technologicalitemHover cursor-pointer">
                    <span class="p-2 text-xl xxs:p-[5px] xxs:text-lg xs:p-[5px] xs:text-lg bg-[#66C3CD] text-white rounded-lg">{{ tech }}</span>
                </div>
            </div>
            <router-link to="/contact-us">
                <Button class=" w-full xxs:text-lg">{{ $t('button.wantConsult') }}</Button>
            </router-link>
    </SectionContainer>
    <div class="with-large-wrapper">
        <div class="xxs:max-w-[78%] xs:max-w-[78%] sm:max-w-[78%] md:max-w-[78%] lg:max-w-[80%] ">
            <span class="text-white xxs:text-lg xs:text-lg sm:text-xl md:text-xl lg:text-2xl">With a large number of professionals from around the world, Hypedriven offers full- cycle software development services to IT and non-IT organizations from various industries worldwide.</span>
        </div>
        <div class="xxs:max-w-[22%] xxs:h-[100%] xs:max-w-[22%] xs:h-[100%] sm:max-w-[22%] sm:h-[100%] md:max-w-[22%] md:h-[100%] lg:max-w-[20%] p-[18px] xxs:p-[14px] xs:p-[14px] sm:p-[18px] md:p-[28px] lg:p-[24px] flex flex-col justify-center bg-[#150DCE] cursor-pointer">
            <router-link to="/contact-us">
                <img class="" :src="buttonArrow">
            </router-link>
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
    @media (min-width: 2200px) {
        .with-large-wrapper {
            padding: 120px 384px 120px 384px;
        }
    }
    @media (min-width: 2050px) and (max-width: 2199.5px) {
        .with-large-wrapper {
            padding: 120px 320px 120px 320px;
        }
    }
    @media (min-width: 1850px) and (max-width: 2049.5px) {
        .with-large-wrapper {
            padding: 120px 256px 120px 256px;
        }
    }
    @media (min-width: 1750px) and (max-width: 1849.5px) {
        .with-large-wrapper {
            padding: 120px 208px 120px 208px;
        }
    }
    @media (min-width: 768px) and (max-width: 1023.5px) {
        .with-large-wrapper {
            padding: 85px 60px 85px 60px;
            align-items: center;
        }
    }
    @media (min-width: 576px) and (max-width: 767.5px) {
        .with-large-wrapper {
            padding: 35px 20px 35px 20px;
            align-items: center;
        }
    }
    @media (min-width: 425px) and (max-width: 575.5px) {
        .with-large-wrapper {
            padding: 25px 15px 25px 15px;
            align-items: center;
        }
    }
    @media (min-width: 320px) and (max-width: 424.5px) {
        .with-large-wrapper {
            padding: 25px 15px 25px 15px;
            align-items: center;
        }
    }
</style>