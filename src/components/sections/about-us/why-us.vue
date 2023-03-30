<template>
    <SectionContainer class="bg-main-bg" >
        <div class="flex flex-col gap-8 max-w-lg">
            <SectionTitle class="text-[#00007E] h-fit m-auto text-6xl max-w-full px-2 text-center">
                {{ $t('aboutpage.whyus.title') }}
            </SectionTitle>
            <!-- <Test class="text-[#ffffff] h-fit m-auto text-3xl font-bold px-2 text-center " :items="whyUs" v-slot="{ data }"> -->
                <!-- {{ $t(`aboutpage.whyus.${data?.title}`) }} -->
            <!-- </Test> -->
        </div>
        <div>
            <Carousel :items="whyUs" v-slot="{ data }" :autoplay="2000" :transition="2000"> 
                <WhyUsCard class="mx-4">
                   
                    <div class="flex justify-between"> 
                        <div class="whyus-card-content">  
                            <img :src="data?.img" class="whyus-card-content-img"/>    
                        </div>
                        <div class="whyus-card-content">
                            <h1 class="text-[#ffffff] h-fit m-auto text-4xl font-bold mt-[-50px] mb-[50px] ">
                                {{ $t(`aboutpage.whyus.${data?.title}`) }}
                            </h1>
                            <div class=" border-t-2 border-[#00007E] pt-8">
                                <BodyText class="text-lg font-bold">{{$t(`aboutpage.whyus.${data?.subtitle}`)}}</BodyText>
                            </div>
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
// import Test from "./testiks.vue";
export default {
    name: "WhyUsSectionComponent",
    components: {
        SectionContainer,
        SectionTitle,
        Carousel,
        WhyUsCard,
        BodyText,
        RunningLine,
        // Test
    },
    data: function () {
        return {
            runStringImg: require('../../../assets/img/images/aboutpage-whyus-star.svg'),
            runStringImg1: require('../../../assets/img/images/aboutpage-whyus-ticker-line.png'),
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
    width: 100%;
    height: 100%;
}
.whyus-running-line {
    width: 100vw;
    height: 100px;
    margin-top: -100px;
    z-index: 1;
}
</style>
