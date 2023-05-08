<template>
    <SectionContainer class="bg-main-bg xxs:px-4 xxs:pt-[40px] xs:px-4 xs:pt-[50px] sm:px-4 sm:pt-[50px] sm:pb-0 md:pt-[50px] md:pb-16 divarsity-hero-wrapper"> 
        <div class="flex xxs:flex-col xs:flex-col sm:flex-col justify-between">
            <div class="diversity-hero-card-content max-w-xl"> 
                <SectionTitle class="text-white h-fit m-auto text-6xl xxs:text-5xl max-w-full tracking-[10px] xxs:tracking-[2px] xs:tracking-[2px] sm:tracking-[7px] text-left uppercase xxs:mb-8 xs:mb-10 sm:mb-12 md:mb-12 lg:mb-16">
                    {{ $t('diversityPage.hero.title') }}<span class="text-[#00007E]"> and inclusion</span>
                </SectionTitle>
                <SectionSubTitle class="text-[#000026] h-fit text-2xl xxs:text-xl text-left xxs:mb-8 xs:mb-10 sm:mb-12 md:mb-12 lg:mb-16"> 
                    {{$t('diversityPage.hero.subtitle')}}
                </SectionSubTitle>  
                <router-link to="/contact-us">
                    <Button class="w-[150px] py-3">{{ $t('button.joinUs') }}</Button> 
                </router-link>
            </div>
            <div class="diversity-hero-card-content">  
                <img :src="img" class="hidden xxs:block xxs:mt-5 xs:block xs:mt-5 sm:block sm:mt-2 diversity-hero-card-content-img"/>    
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
    name: "DiversityPageHeroComponent",
    components: {
        SectionContainer,
        SectionTitle,
        Button,
        SectionSubTitle
    },
    data: function () {
        return {
            img: require('../../assets/img/images/diversitypage-hero-img.png')
        };
    }
};
</script>

<style>
.divarsity-hero-wrapper {
    background-image: url('../../assets/img/images/diversitypage-hero-img.png');
    background-repeat: no-repeat;
    background-size: auto;
    background-position: 90% 100%;
}

.diversity-hero-card-content {
    max-width: 50%;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.diversity-hero-card-content-img {
    width: 100%;
    height: 100%;
}

@media (min-width: 1024px) and (max-width: 1279.5px) {
    .diversity-hero-card-content {
        max-width: 60%;
    }
    .divarsity-hero-wrapper {
        background-position: 100% 100%;
        background-size: 45%;
    }
}

@media (min-width: 768px) and (max-width: 1023.5px) {
    .diversity-hero-card-content {
        max-width: 55%;
    }
    .divarsity-hero-wrapper {
        background-position: 100% 100%;
        background-size: 50%;
    }
}

@media (min-width: 576px) and (max-width: 767.5px) {
    .diversity-hero-card-content {
        max-width: 100%;
    }
    .divarsity-hero-wrapper {
        background-image: none;
    }
}

@media (min-width: 425px) and (max-width: 575.5px) {
    .diversity-hero-card-content {
        max-width: 100%;
    }
    .divarsity-hero-wrapper {
        background-image: none;
    }
}

@media (min-width: 320px) and (max-width: 424.5px) {
    .diversity-hero-card-content {
        max-width: 100%;
    }
    .divarsity-hero-wrapper {
        background-image: none;
    }
}
</style>
