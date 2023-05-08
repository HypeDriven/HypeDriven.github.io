<template>
    <Header/>
    <SectionContainer class="gap-[0px] bg-primary-bg xxs:px-4 xxs:pt-[40px] xxs:pb-10 xs:px-4 xs:pt-[40px] xs:pb-10 sm:px-4 sm:pt-[40px] sm:pb-10 md:pt-[40px]">
        <div class="text-lg xxs:mb-10 xs:mb-10 sm:mb-10 md:mb-10 lg:mb-0">
            <router-link to="/careers">
                <span class="text-white">Careers > </span>
            </router-link>
            <span class="text-[#66C3CD]">Vacancies</span>
        </div>
        <SectionTitle class="text-white h-fit text-center mb-20">
            {{ $t('careersPage.careersVacancies.title') }}
        </SectionTitle>

        
        <div id="example-widget-container" class="mb-20"></div>

        <router-link to="/contact-us">
            <Button class="w-full">{{ $t('button.contactUs') }}</Button>
        </router-link>

        <div class="bg-main-bg flex md:flex-col lg:flex-col xl:flex-row mt-20 hover:border-[2px]">
            <div class="xxs:px-5 xxs:py-10 xs:px-8 xs:py-12 sm:px-10 sm:py-14 md:p-14 md:pt-20 xl:px-6 xl:pt-14 1xl:px-16 1xl:pt-20">
                <SectionTitle class="text-[#00007E]">{{ $t('careersPage.findYourDreamJob.canNotFound.title') }}</SectionTitle>
                <SectionSubTitle class="text-white text-[16px] lg:text-xl mt-10">{{ $t('careersPage.findYourDreamJob.canNotFound.subtitle') }}<a href="mailto:careers@hypedriven.com" class="text-[#00007E]"> mailto:careers@hypedriven.com</a></SectionSubTitle>
            </div>
            <img :src="findYourJobImg" class="xxs:hidden xs:hidden sm:hidden lg:px-14 lg:pb-10 xl:px-0 xl:pb-0"/>
        </div>

    </SectionContainer>
    <Footer/>
</template>

<script> 
import Header from "@/components/header";
import Footer from "@/components/footer";
import SectionContainer from "../container";
import SectionTitle from "../title";
import SectionSubTitle from "../sub-title.vue";
import Button from "../../buttons";
export default {
    name: "CareersPageVacanciesComponent",
    components: {
        Header,
        Footer,
        SectionContainer,
        SectionTitle,
        SectionSubTitle,
        Button,
    },
    data: function () {
        return {
            findYourJobImg: require('@/assets/img/images/careerspage-findyourjob-searchbar-img.png'),
            searchBarIcon: require('@/assets/img/images/industriespage-hero-searchbar-icon.svg'),
            crossSearchBarIcon: require('@/assets/img/images/industriespage-hero-searchbar-cross-icon.svg'),
            contentButtonArrow1:  require('@/assets/img/images/aboutpageArrowImg.svg'), 
            contentButtonArrow2: require('@/assets/img/servicesArrowImg.svg')
        }
    }, 
    mounted() {
        const widgetScript = document.createElement('script')
        widgetScript.type = 'text/javascript'
        widgetScript.src = 'https://jobsapi.ceipal.com/APISource/widget.js'
        widgetScript.setAttribute('data-ceipal-api-key', 'TDZrR2luMyt2ZXlDdk4yQ3JUVkFIdz09')
        widgetScript.setAttribute('data-ceipal-career-portal-id', 'Z3RkUkt2OXZJVld2MjFpOVRSTXoxZz09')
        document.body.appendChild(widgetScript)
    }
}
</script>