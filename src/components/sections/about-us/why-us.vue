<template>
    <SectionContainer class="bg-main-bg sm:pt-10 xs:p-6 xxs:p-4">
        <div class="flex flex-col gap-8 max-w-lg lg:m-0">
            <SectionTitle class="text-[#00007E] h-fit text-6xl max-w-full xxs:pt-2 xs:pt-2 sm:pt-2 px-2 lg:text-left md:text-left ">
                {{ $t('aboutpage.whyus.title') }}
            </SectionTitle>
        </div>
        <div>
            <Carousel :items="whyUs" v-slot="{ data }" :autoplay="6000" :transition="3000"> 
                <WhyUsCard class=""> 
                    <div class="flex xxs:flex-col xs:flex-col justify-between"> 
                        <div class="whyus-card-content xxs:hidden xs:hidden">  
                            <img :src="data?.img" class="whyus-card-content-img"/>    
                        </div>
                        <div class="whyus-card-content">
                            <h1 class="text-[#ffffff] h-fit m-auto text-4xl xs:text-3xl xxs:text-2xl font-bold xl:mt-[-50px] xl:mb-[50px] lg:mt-[-30px] lg:mb-[30px] md:mt-[-20px] md:mb-[20px] sm:mt-[-15px] sm:mb-[15px] xs:mt-[-10px] xs:mb-[10px] xxs:mt-[-10px] xxs:mb-[10px]">
                                {{ $t(`aboutpage.whyus.${data?.title}`) }}
                            </h1>
                            <div class=" border-t-2 border-[#00007E] xl:pt-8 lg:pt-5 md:pt-3 sm:pt-2 xs:pt-2 xxs:pt-1 xxs:mb-10 xs:mb-5">
                                <BodyText class="xl:text-lg lg:text-base md:text-base sm:text-sm xs:text-sm xxs:text-sm lg:mr-0 md:pr-6 sm:pr-5 xs:pr-5 xxs:pr-5 font-bold">{{$t(`aboutpage.whyus.${data?.subtitle}`)}}</BodyText>
                            </div>
                        </div>
                        <div class="hidden whyus-card-content xxs:block xs:block">  
                            <img :src="data?.img" class="whyus-card-content-img"/>    
                        </div>
                        
                    </div>
                </WhyUsCard>
            </Carousel>
        </div>
   
    </SectionContainer>
    <div class="flex flex-col justify-center bg-[#150DCE] whyus-running-line">
        <RunningLine :img="runStringImg" :content="runningLineContent"/>
    </div>
</template>

<script>
import WhyUsCard from "../../why-us/why-us-card.vue";
import SectionContainer from "../container";
import SectionTitle from "../title";
import Carousel from "../../carousel/single.vue";
import BodyText from "../../text/body/body-textXL.vue";
import RunningLine from "../../sections/running-line/running-line.vue";
export default {
    name: "WhyUsSectionComponent",
    components: {
        SectionContainer,
        SectionTitle,
        Carousel,
        WhyUsCard,
        BodyText,
        RunningLine,
    },
    data: function () {
        return {
            runStringImg: require('../../../assets/img/images/aboutpage-whyus-star.svg'),
            runningLineContent: ['Result-oriented', 'Experticed', 'Transparent', 'Flexible'],
            whyUs: [
               {
                img: require('../../../assets/img/images/aboutpage-whyus-img1.png'),
                title: "slide1.title",
                subtitle: "slide1.subtitle"
               },
               {
                img: require('../../../assets/img/images/aboutpage-whyus-img2.png'),
                title: "slide2.title",
                subtitle: "slide2.subtitle"
               },
               {
                img: require('../../../assets/img/images/aboutpage-whyus-img3.png'),
                title: "slide3.title",
                subtitle: "slide3.subtitle"
               },
               {
                img: require('../../../assets/img/images/aboutpage-whyus-img4.png'),
                title: "slide4.title",
                subtitle: "slide4.subtitle"
               }
            ]
        };
    }
};
</script>

<style>
.whyus-card-content {
    max-width: 50%;
    text-align: left;
}
.whyus-card-content-img {
    width: 95%;
    height: 95%;
}
.whyus-running-line {
    width: 100vw;
    height: 100px;
    margin-top: -100px;
    z-index: 1;
}
@media (min-width: 576px) and (max-width: 767.5px) {
    .whyus-running-line {
        height: 80px;
        margin-top: -80px;
        width: 160vw;
    }
}
@media (min-width: 425px) and (max-width: 575.5px) {
     .whyus-card-content {
        max-width: 80%;
        margin: 0 auto;
        text-align: left;
    }
    .whyus-card-content-img {
        width: 90%;
        height: 90%;
    }
    .whyus-running-line {
        height: 60px;
        margin-top: -60px;
        width: 160vw;
    }
}
@media (min-width: 320px) and (max-width: 424.5px) {
    .whyus-card-content {
        max-width: 80%;
        margin: 0 auto;
        text-align: left;
    }
    .whyus-card-content-img {
        width: 90%;
        height: 90%;
    }
    .whyus-running-line {
        height: 60px;
        margin-top: -60px;
        width: 160vw;
    }
}
</style>
