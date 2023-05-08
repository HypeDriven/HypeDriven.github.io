<template>
    <div class="our-story-bg">
        <SectionContainer class="sm:p-4 sm:pt-10 xs:p-2 xs:pt-10 xxs:p-2 xxs:pt-8">
            <div class="flex xxs:flex-col xs:flex-col sm:flex-col gap-4 justify-between 3xl:justify-around"> 
                <div class="our-story-content">
                    <Header1 class="text-[#ffffff] h-fit m-auto sm:m-0 text-4xl xs:text-5xl xxs:text-5xl font-bold">
                        {{ $t('aboutpage.ourstory.title') }}
                    </Header1>
                    <div class="pt-8">
                        <BodyText class="xl:text-xl lg:text-lg md:text-base sm:text-xl xs:text-lg xxs:text-base text-[#9DD3E1] xl:leading-8 lg:leading-6 md:leading-4 font-bold tracking-wider xxs:tracking-tight">{{$t('aboutpage.ourstory.subtitle1')}}</BodyText>
                    </div>
                </div>
                <div class="our-story-content">  
                    <img :src="ourStoryillustr1" class=""/> 
                </div>
            </div>
            <div class="flex xxs:flex-col-reverse xxs:gap-4 xs:flex-col-reverse xs:gap-4 sm:flex-col-reverse sm:gap-4 justify-between 3xl:justify-around">
                <div class="our-story-content">  
                    <img :src="ourStoryillustr2" class=""/> 
                </div>
                <div class="our-story-content"> 
                    <BodyText class="xl:text-xl lg:text-lg md:text-base sm:text-xl xs:text-lg xxs:text-base text-[#9DD3E1] xl:leading-8 lg:leading-6 md:leading-4 font-bold tracking-wider xxs:tracking-tight">{{$t('aboutpage.ourstory.subtitle2')}}</BodyText>
                </div>
            </div>
            <div class="flex xxs:flex-col xs:flex-col sm:flex-col justify-between 3xl:justify-around">
                <div class="our-story-content"> 
                    <BodyText class="xl:text-xl lg:text-lg md:text-base sm:text-xl xs:text-lg xxs:text-base text-[#9DD3E1] xl:leading-8 lg:leading-6 md:leading-4 font-bold tracking-wider xxs:tracking-tight">{{$t('aboutpage.ourstory.subtitle3')}}</BodyText>
                </div>
                <div class="our-story-content">  
                    <img :src="ourStoryillustr3" class=""/> 
                </div>
            </div>
            <div class="flex xxs:flex-col-reverse xxs:gap-4 xs:flex-col-reverse xs:gap-4 sm:flex-col-reverse sm:gap-4 justify-between 3xl:justify-around">
                <div class="our-story-content">  
                    <img :src="ourStoryillustr4" class=""/> 
                </div>
                <div class="our-story-content">
                    <BodyText class="xl:text-xl lg:text-lg md:text-base sm:text-xl xs:text-lg xxs:text-base text-[#9DD3E1] xl:leading-8 lg:leading-6 md:leading-4 font-bold tracking-wider xxs:tracking-tight">{{$t('aboutpage.ourstory.subtitle4')}}</BodyText>
                </div>
            </div>
            <div class="mt-16 xxs:hidden xs:hidden sm:hidden">
                <div class="flex justify-around text-white text-2xl">
                    <span>2010</span>
                    <span>2012</span>
                    <span>2015</span>
                    <span>2019-2023</span>
                </div>
                <div class="py-6">   
                    <img :src="ourStoryLine" class="our-story-line-img"/>
                </div>
                <div class="flex justify-between text-white">   
                    <div class="max-w-[24%] flex flex-col justify-between">
                        <span class="3xl:text-lg 1xl:text-base lg:text-sm md:text-xs sm:text-xs xs:text-xs  xxs:text-xs">Hypedriven was Founded in Kyiv with 10 workers.</span>
                        <img :src="ourStoryImg1" class="pt-5 w-[100%]"/>
                    </div>
                    <div class="max-w-[24%] flex flex-col justify-between">
                        <span class="3xl:text-lg 1xl:text-base lg:text-sm md:text-xs sm:text-xs xs:text-xs  xxs:text-xs">Grew to 20 employees. Adapted to remote-first work model due to COVID-19 pandemic.</span>
                        <img :src="ourStoryImg2" class="pt-5 w-[100%]"/>
                    </div>
                    <div class="max-w-[24%] flex flex-col justify-between">
                        <span class="3xl:text-lg 1xl:text-base lg:text-sm md:text-xs sm:text-xs xs:text-xs  xxs:text-xs">Became international with a subsidiary in Canada and first employee from Nigeria.</span>
                        <img :src="ourStoryImg3" class="pt-5 w-[100%]"/>
                    </div>
                    <div class="max-w-[24%] flex flex-col justify-between">
                        <span class="3xl:text-lg 1xl:text-base lg:text-sm md:text-xs sm:text-xs xs:text-xs  xxs:text-xs">Registered a branch in Dubai due to war in Ukraine and expanded the hiring pool to include candidates from Turkey, Ethiopia, and Azerbaijan.</span>
                        <img :src="ourStoryImg4" class="pt-5 w-[100%]"/>
                    </div>
                </div>
                
            </div>
        </SectionContainer>
        
    </div>
    
</template>

<script>
import SectionContainer from "../container";
import Header1 from "../../text/header/header_1.vue";
import BodyText from "../../text/body/body-textXL.vue";
export default {
    name: "OurStorySectionComponent",
    components: {
        SectionContainer,
        Header1,
        BodyText
    },
    data: function () {
        return {
            ourStoryillustr1: require("../../../assets/img/images/aboutpage-our-story-illustr.png"),
            ourStoryillustr2: require("../../../assets/img/images/aboutpage-our-story-illustr2.png"),
            ourStoryillustr3: require("../../../assets/img/images/aboutpage-our-story-illustr3.png"),
            ourStoryillustr4: require("../../../assets/img/images/aboutpage-our-story-illustr4.png"),
            ourStoryCloud: require("../../../assets/img/images/aboutpage-our-story-cloud.png"),
            ourStoryRocket: require("../../../assets/img/images/aboutpage-our-story-rocket.png"),
            ourStoryLine: require("../../../assets/img/images/aboutpage-our-story-line.svg"),
            ourStoryImg1: require("../../../assets/img/images/aboutpage-ourstory-img1.png"),
            ourStoryImg2: require("../../../assets/img/images/aboutpage-ourstory-img2.png"),
            ourStoryImg3: require("../../../assets/img/images/aboutpage-ourstory-img3.png"),
            ourStoryImg4: require("../../../assets/img/images/aboutpage-ourstory-img4.png")
        };
    }
};
</script>

<style>
.our-story-bg {
    background: linear-gradient(180deg, #00007E 92%,  #9DD3E1 92%); /*80% 85%*/
}

.our-story-content {
    position: relative;
    max-width: 49%;
}

.our-story-cloud-img {
    max-width: 100%;
}

.our-story-line-img {
    width: 100%;
}
@media (min-width:  850px) and (max-width: 1023.5px) {
    .our-story-content {
        position: relative;
        max-width: 49%;
        margin: 0 auto;
    }
    .our-story-content div{
        font-size: 18px;
        line-height: normal;
    }
    .our-story-bg {
        background: linear-gradient(180deg, #00007E 95%,  #9DD3E1 95%);
    }
}
@media (min-width:  768px) and (max-width: 849.5px) {
    .our-story-content {
        position: relative;
        max-width: 49%;
        margin: 0 auto;
    }
    .our-story-bg {
        background: linear-gradient(180deg, #00007E 95%,  #9DD3E1 95%);
    }
}
@media (min-width:  576px) and (max-width: 767.5px) {
    .our-story-content {
        position: relative;
        max-width: 95%;
        margin: 0 auto;
    }
    .our-story-bg {
        background: linear-gradient(180deg, #00007E 100%,  #9DD3E1 90%);
    }
}
@media (min-width: 425px) and (max-width: 575.5px) {
    .our-story-content {
        position: relative;
        max-width: 95%;
        margin: 0 auto;
    }
    .our-story-bg {
        background: linear-gradient(180deg, #00007E 100%,  #9DD3E1 90%);
    }
}
@media (min-width: 320px) and (max-width: 424.5px) {
    .our-story-content {
        position: relative;
        max-width: 95%;
        margin: 0 auto;
    }
    .our-story-bg {
        background: linear-gradient(180deg, #00007E 100%,  #9DD3E1 90%);
    }
}
</style>
