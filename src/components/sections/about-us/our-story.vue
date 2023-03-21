<template>
    <div class="our-story-bg">
        <SectionContainer>
            <div class="flex justify-between"> 
                <div class="our-story-content">
                    <Header1 class="text-[#ffffff] h-fit m-auto text-4xl font-bold">
                        {{ $t('aboutpage.ourstory.title') }}
                    </Header1>
                    <div class="pt-8">
                        <BodyText class="text-lg text-[#9DD3E1] font-bold">{{$t('aboutpage.ourstory.subtitle')}}</BodyText>
                    </div>
                </div>
                <div class="our-story-content">  
                    <img :src="ourStoryCloud" class="our-story-cloud-img"/>    
                    <img :src="ourStoryRocket" class=" our-story-rocket-img"/>  
                </div>
            </div>
            <div class="mt-16">
                <div class="flex justify-around text-white text-2xl">
                    <span>2010</span>
                    <span>2012</span>
                    <span>2015</span>
                    <span>2019-20223</span>
                </div>
                <div class="py-6">   
                    <img :src="ourStoryLine" class="our-story-line-img"/>
                </div>
                <div class="flex justify-between text-white">   
                    <span>Something about our history<img :src="ourStoryImg1" class="pt-8"/></span>
                    <span>Something about our history<img :src="ourStoryImg2" class="pt-8"/></span>
                    <span>Something about our history<img :src="ourStoryImg3" class="pt-8"/></span>
                    <span>Something about our history<img :src="ourStoryImg4" class="pt-8"/></span>
                </div>
                
            </div>
        </SectionContainer>
        
    </div>
    
</template>

<script>
import SectionContainer from "../container";
import Header1 from "../../text/header/header_1.vue";
// import Header4 from "../../text/header/header_4.vue";
import BodyText from "../../text/body/body-textXL.vue";
export default {
    name: "OurStorySectionComponent",
    components: {
        SectionContainer,
        Header1,
        // Header4,
        BodyText
    },
    data: function () {
        return {
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
    background: linear-gradient(180deg, #00007E 80%,  #9DD3E1 85%);
    /* background: radial-gradient(farthest-corner at 0% 0%, #00007E 80%, #9DD3E1 80%);; */
    border-top-left-radius: 20%;
    border-top-right-radius: 20%;
    /* background: linear-gradient(110deg, #a60af3 40%, rgba(0, 0, 0, 0) 30%), radial-gradient(farthest-corner at 0% 0%, #7a00cc 70%, #c03fff 70%); */
}

.our-story-content {
    position: relative;
    max-width: 50%;
}

.our-story-cloud-img {
    max-width: 100%;
}

.our-story-rocket-img {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -5%);
    animation: rocket 5s ease-in-out infinite;
}

.our-story-line-img {
    width: 100%;
}

@keyframes rocket {
    0%{
        transform: translate(-50%, -5%);
    }
    35% {
        transform: translate(-50%, -20%);
    }
    75% {
        transform: translate(-50%, 10%);
    }
}
</style>
