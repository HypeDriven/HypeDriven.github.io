<template>
    <SectionContainer class="bg-main-bg" >
        <div class="flex flex-col max-w-auto mt-[-100px]">
            <SectionTitle class="text-white h-fit m-auto text-6xl max-w-full px-2 text-center mb-[-180px] z-10">
                {{ $t('servicespage.hero.title') }}<span class="text-[#00007E]"> company</span>
            </SectionTitle>
        </div>
        <div>
            <Carousel :items="servicesHero" v-slot="{ data }" :autoplay="3000"  :transition="1000">
                    <div class="flex justify-between"> <!--:style="{'background-image': `url(${data?.img})`}"-->
                        <div class="services-hero-card-content">
                            <div class="">
                                <BodyText class="text-lg w-auto">{{$t(`servicespage.hero.${data?.subtitle}`)}}</BodyText>
                                <Button class="mt-10">{{ $t('servicespage.button.contactus') }}</Button>
                            </div>
                            
                            
                        </div>
                        <div class="services-hero-card-content">  
                            <img :src="data?.img" class="services-hero-card-content-img"/>    
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
    name: "WhyUsSectionComponent",
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
                img: require('../../assets/img/images/servicespage-hero-illustration.png'),
                subtitle: "slide1.subtitle"
               },
               {
                img: require('../../assets/img/images/servicespage-hero-illustration2.png'),
                subtitle: "slide2.subtitle"
               }
            ]
        };
    }
};
</script>

<style>
.services-hero-card-content {
    max-width: 100%;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.services-hero-card-content-img {
    width: 100%;
    height: 100%;
}
/*.services-hero-card-content-img22 {
    background-image: url('../../assets/img/images/servicespage-hero-illustration.png');
    background-size: cover;
    background-position: right;
    width: 100%;
    height: 100vh;

}*/
</style>
