<template>
    <SectionContainer class="bg-main-bg services-hero-wrapper"> 
        <div>
            <Carousel :items="servicesHero" v-slot="{ data }" :autoplay="8000" :transition="3000" class=" justify-start"> 
                    <div class="flex flex-col justify-evenly md:h-[450px] sm:h-[400px] xs:h-[380px] xxs:h-[350px]"> 
                        <div class="flex flex-col max-w-auto">
                            <SectionTitle class="text-white h-fit m-auto xxs:m-0 xxs:max-w-sm xs:m-0 xs:max-w-lg lg:text-6xl md:text-5xl sm:text-5xl xs:text-4xl xxs:text-4xl max-w-full sm:pr-3 xs:pr-6 xxs:pr-6 text-left z-10 uppercase">
                                {{ $t(`servicespage.hero.${data?.title}`) }}<span class="text-[#00007E]">{{ data?.completeSubtitle }}</span>
                            </SectionTitle>
                        </div>
                        <div class="services-hero-card-content">
                            <div class="lg:pl-20 md:pl-0 sm:pl-0 xs:pl-0 xxs:pl-0 lg:m-0 md:m-auto sm:px-6 xs:px-6 xxs:px-6">
                                <BodyText class="xl:text-xl md:text-lg sm:text-sm xs:text-lg xxs:text-base w-auto text-left">{{$t(`servicespage.hero.${data?.subtitle}`)}}</BodyText>
                                <router-link to="/contact-us">
                                    <Button class="mt-10">{{ $t(`${data?.buttonText}`) }}</Button>
                                </router-link>
                            </div>
                            
                        </div>
                    </div>
            </Carousel>
        </div>
   
    </SectionContainer>
</template>

<script>
import SectionContainer from "../sections/container.vue";
import SectionTitle from "../sections/title";
import Carousel from "../carousel/single.vue";
import BodyText from "../text/body/body-textXL.vue";
import Button from "../buttons";
export default {
    name: "ServicesPageHeroComponent",
    components: {
        SectionContainer,
        SectionTitle,
        Carousel,
        BodyText,
        Button
    },
    data: function () {
        return {
            servicesHero: [
               {
                title: "slide1.title",
                subtitle: "slide1.subtitle",
                completeSubtitle: "company",
                buttonText: "button.contactus"
               },
               {
                title: "slide2.title",
                subtitle: "slide2.subtitle",
                completeSubtitle: "and development",
                buttonText: "button.requestContact"
               }
            ],
            
        };
    },
};
</script>

<style>
.services-hero-card-content {
    width: 100%;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.services-hero-wrapper { 
    background-image: url('../../assets/img/images/servicespage-hero-illustration.svg');  
    background-repeat: no-repeat;
    background-position: 100% 100%;
}

@media (min-width: 768px) and (max-width: 1023.5px) {
    .services-hero-wrapper { 
        background-size: contain;
    }
}

@media (min-width: 576px) and (max-width: 767.5px) {
    .services-hero-wrapper { 
        background-size: contain;
    }
}

@media (min-width: 425px) and (max-width: 575.5px) {
    .services-hero-wrapper { 
        background-size: contain;
    }
}

@media (min-width: 320px) and (max-width: 424.5px) {
    .services-hero-wrapper { 
        background-size: contain;
    }
}
</style>
