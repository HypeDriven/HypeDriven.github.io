<template>
    <SectionContainer class="bg-main-bg 1xl:pt-24 xxs:px-4 xxs:pt-[40px] xs:px-4 xs:pt-[40px] sm:px-4 sm:pt-[50px] sm:pb-0 md:pt-[50px] md:pb-16 technologies-hero-wrapper">
            <div class="flex xxs:flex-col xs:flex-col sm:flex-col justify-between"> 
                <div class="technologies-hero-card-content ">
                        <SectionTitle class="text-white h-fit m-auto text-6xl xxs:text-5xl max-w-full text-left uppercase tracking-widest mb-10"> 
                            {{ $t('technologiesPage.hero.title') }}
                        </SectionTitle>
                        <SectionSubTitle class="text-[#000026] max-w-sm xxs:max-w-full xs:max-w-full sm:max-w-full h-fit lg:ml-16 xxs:ml-0 xs:ml-0 sm:ml-0 md:ml-0 text-xl xl:text-2xl text-left mb-16 xs:mb-10 sm:mb-10 md:mb-8">
                            {{$t('technologiesPage.hero.subtitle')}}
                        </SectionSubTitle>
                            
                        <router-link to="/contact-us">
                            <Button class="lg:ml-16 xxs:ml-0 xs:ml-0 sm:ml-0 md:ml-0 xxs:text-lg">{{ $t('button.contactUs') }}</Button>
                        </router-link>

                </div>
                <div class="technologies-hero-card-content">  
                    <img :src="img" class="hidden xxs:block xxs:mt-5 xs:block xs:mt-10 sm:block sm:mt-10 technologies-hero-card-content-img"/>    
                </div>
            </div>
    </SectionContainer>
</template>

<script>
import SectionContainer from "../sections/container.vue";
import SectionTitle from "../sections/title";
import SectionSubTitle from "../sections/sub-title.vue"
import Button from "../buttons";
export default {
    name: "TechnologiesPageHeroComponent",
    components: {
        SectionContainer,
        SectionTitle,
        Button,
        SectionSubTitle
    },
    data: function () {
        return {
            img: require('../../assets/img/images/technologiespage-hero-img.png')
        };
    }
};
</script>

<style>
.technologies-hero-card-content {
    max-width: 50%;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.technologies-hero-card-content-img {
    width: 100%;
    height: 100%;
}
.technologies-hero-wrapper {
    background-image: url('../../assets/img/images/technologiespage-hero-img.png');
    background-repeat: no-repeat;
    background-size: auto;
    background-position: 90% 100%;
}
@media (min-width: 1750px) {
    .technologies-hero-wrapper {
        background-position: 80% 100%;
    }
}
@media (min-width: 1024px) and (max-width: 1279.5px) {
    .technologies-hero-wrapper {
        background-image: url('../../assets/img/images/technologiespage-hero-img.png');
        background-repeat: no-repeat;
        background-size: 50%;
        background-position: 98% 100%;
    }
}
@media (min-width: 768px) and (max-width: 1023.5px) {
    .technologies-hero-card-content {
        max-width: 100%;
    }
    .technologies-hero-wrapper {
        background-image: url('../../assets/img/images/technologiespage-hero-img.png');
        background-repeat: no-repeat;
        background-size: 55%;
        background-position: 100% 100%;
    }
}
@media (min-width: 576px) and (max-width: 767.5px) {
    .technologies-hero-card-content {
        max-width: 100%;
    }
    .technologies-hero-wrapper {
        background-image: none;
    }
}
@media (min-width: 425px) and (max-width: 575.5px) {
    .technologies-hero-card-content {
        max-width: 100%;
    }
    .technologies-hero-wrapper {
        background-image: none;
    }
}
@media (min-width: 320px) and (max-width: 424.5px) {
    .technologies-hero-card-content {
        max-width: 100%;
    }
    .technologies-hero-wrapper {
        background-image: none;
    }
}
</style>
