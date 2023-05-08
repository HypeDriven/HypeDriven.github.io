<template>
    <SectionContainer>
        <div class="flex flex-wrap justify-between flex-row"> 
            <div class="w-full flex xxs:flex-col xs:flex-col xxs:px-2 xs:px-2 sm:px-2 md:px-0 lg:px-0 xl:px-16" >
                <div class="w-[50%] xs:w-[100%] xxs:w-[100%] flex justify-between border-solid border-r-2 border-white xxs:border-none xs:border-none py-4">
                    <Header1 class="text-[#00007E] xl:text-[70px] lg:text-[60px] md:text-[52px] sm:text-[42px] xs:text-[38px] xxs:text-[30px] font-extrabold">
                        {{ $t('homepage.aboutus.title') }}
                    </Header1>
                    <router-link to="about-us">
                        <div class="mr-[30px] xs:mr-[0px] xxs:mr-[0px]">
                            <img class="about-us-arrowImg" src="@/assets/img/servicesArrowImg.svg">
                        </div>
                    </router-link>
                </div>
                <div class="w-[50%] xxs:w-[70%] xs:w-[70%] ml-4 xxs:ml-0 xs:ml-0 py-4">
                    <BodyText class="text-[#00007E] font-extrabold xl:text-3xl lg:text-2xl">
                        {{ $t('homepage.aboutus.subtitle') }}
                    </BodyText>
                </div>
            </div>
            <div class="w-[100%] h-[400px] xs:h-[520px] imgsWrapper hidden xs:block xxs:block">   
                <img class="animation-layer image1" :src="cardUrl" /> 
                <img class="animation-layer image2" :src="cardUrlBg"/>
                <img class="animation-layer image3" :src="cardUrlBgCld"/>
            </div>
            <Card class="w-full" :reverse="false" :url1="cardUrl" :url2="cardUrlBg" :url3="cardUrlBgCld">
                <div class="flex flex-col justify-between gap-6 w-[100%] xs:px-2 xxs:px-2">
                    <div class="flex flex-col gap-5">
                        <router-link to="/about-us">
                            <div class="flex gap-3 border-t-2 border-white xxs:border-t-0 xs:border-t-0 2xl:mb-24 3xl:mb-44">
                                <div class="w-[15%]">
                                    <div class="about-us-img-wrapper1 xl:w-[70px] xl:h-[70px] lg:w-[55px] lg:h-[55px] md:w-[42px] md:h-[42px] sm:w-[35px] sm:h-[35px] xs:w-[60px] xs:h-[60px] xxs:w-[45px] xxs:h-[45px] mt-2">
                                        <img :src="mapIcon" class="md:w-[35px] md:h-[35px] sm:w-[22px] sm:h-[22px] xs:w-[40px] xs:h-[40px] xxs:w-[35px] xxs:h-[35px]"/>
                                    </div>
                                </div>
                                <div class="lg:mt-5 md:mt-3 sm:mt-2 xs:mt-3 xxs:mt-2 w-[85%]">
                                    <h2 class="xl:text-4xl lg:text-2xl md:text-xl sm:text-lg xs:text-4xl xxs:text-xl text-[#00007E] font-bold lg:mb-5 md:mb-2 sm:mb-1 xs:mb-1 xxs:mb-2">
                                        {{ $t('homepage.aboutus.locationtitle') }}
                                    </h2>
                                    <span class="xl:text-2xl lg:text-lg sm:text-sm xs:text-xl xxs:text-lg text-[black]">
                                        {{ $t('homepage.aboutus.location') }}
                                    </span>
                                </div>
                            </div>
                        </router-link>
                        <router-link to="/about-us" >
                            <div class="flex gap-3 border-t-2 border-white ">
                                <div class="w-[15%]">
                                    <div class="about-us-img-wrapper2 xl:w-[70px] xl:h-[70px] lg:w-[55px] lg:h-[55px] md:w-[42px] md:h-[42px] sm:w-[35px] sm:h-[35px] xs:w-[60px] xs:h-[60px] xxs:w-[45px] xxs:h-[45px] mt-2">
                                        <img :src="usersIcon" class="md:w-[35px] md:h-[35px] sm:w-[22px] sm:h-[22px] xs:w-[40px] xs:h-[40px] xxs:w-[35px] xxs:h-[35px]"/> 
                                    </div>
                                </div>
                                <div class="lg:mt-5 md:mt-3 sm:mt-2 xs:mt-3 xxs:mt-2 w-[85%]">
                                    <h2 class="xl:text-4xl lg:text-2xl md:text-xl sm:text-lg xs:text-4xl xxs:text-xl text-[#00007E] font-bold lg:mb-5 md:mb-2 sm:mb-1 xs:mb-1 xxs:mb-2">
                                        {{ $t('homepage.aboutus.teamtitle') }}
                                    </h2>
                                    <span class="xl:text-2xl lg:text-lg sm:text-sm xs:text-xl xxs:text-lg text-[black]">
                                        {{ $t('homepage.aboutus.team') }}
                                    </span>
                                </div>
                            </div>
                        </router-link>
                    </div>
                    <div class="border-y-2 border-white">
                        <router-link to="/about-us" class="flex justify-between">
                            <div class="py-5">
                                <span class="text-3xl md:text-2xl sm:text-xl xs:text-xl text-[black] font-bold mx-8 xs:mx-4">...</span>
                                <span class="lg:text-3xl md:text-2xl sm:text-xl xs:text-xl text-[black] font-bold">{{ $t('button.learnmore') }}</span>
                            </div>
                            <div class="flex align-center justify-between p-5 bg-[#66C3CD] border-l-2">
                                <img class="w-[32px] h-[32px] xs:w-[26px] xs:h-[26px]" src="@/assets/img/servicesArrowImg.svg">
                            </div>
                        </router-link>
                    </div>
                </div>
            </Card>
        </div>
    </SectionContainer>
</template>

<script>
import SectionContainer from "../container";
import Card from "../../card/";
import Header1 from "../../text/header/header_1.vue";
import BodyText from "../../text/body/body.vue";
import mapIcon from "../../../assets/img/icons/map-pin.svg";
import usersIcon from "../../../assets/img/icons/users.svg";
export default {
    name: "AboutUsSectionComponent",
    components: {
    SectionContainer,
    Card,
    Header1,
    BodyText
},
    data: function () {
        return {
            mapIcon: mapIcon,
            usersIcon: usersIcon,
            cardUrl: require('../../../assets/img/images/about-us-building.png'),
            cardUrlBg:  require('../../../assets/img/images/about-us-elements2.png'),
            cardUrlBgCld:  require('../../../assets/img/images/about-us-clouds.png')
        };
    }
};
</script>

<style>
.about-us-arrowImg:hover {
    filter: brightness(0) invert(1);
    transform: scale(1.2);
    transition: .5s ease-in;
}

.about-us-img-wrapper1 {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #00007E;
    border-radius: 50%;
}

.about-us-img-wrapper2 {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #00007E;
    border-radius: 50%;
}
</style>
