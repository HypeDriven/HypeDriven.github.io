<template>
    <SectionContainer>
        <!-- gap-10 >> -->
        <div class="flex flex-wrap justify-between flex-row"> 
            <div class="w-full flex sm:pl-16 sm:pr-16 lg:pr-16 lg:pl-16" >
                <div class="w-[50%] flex justify-between border-solid border-r-2 border-white py-4">
                    <Header1 class="text-[#00007E] text-2xl font-extrabold">
                        {{ $t('homepage.aboutus.title') }}
                    </Header1>
                    <router-link to="about-us">
                        <div class="mr-[30px]">
                            <img class="about-us-arrowImg" src="@/assets/img/servicesArrowImg.svg">
                        </div>
                    </router-link>
                </div>
                <div class="w-[50%] ml-4 py-4">
                    <BodyText class="text-[#00007E] text-3xl font-extrabold">
                        {{ $t('homepage.aboutus.subtitle') }}
                    </BodyText>
                </div>
            </div>
            <Card class="w-full" :reverse="false" :url1="cardUrl"  :url2="cardUrlBg" :url3="cardUrlBgCld">
                <div class="flex flex-col gap-6 max-w-xl self-center">
                    <div class="flex flex-col gap-5">
                        <router-link to="/about-us">
                            <div class="flex gap-3 border-t-2 border-white mb-24">
                                <div class="about-us-img-wrapper1 mt-2">
                                    <img :src="mapIcon" class="about-us-img"/>
                                </div>
                                <div class="mt-5">
                                    <h2 class="text-3xl text-[#00007E] font-bold mb-5">
                                        {{ $t('homepage.aboutus.locationtitle') }}
                                    </h2>
                                    <span class="text-xl text-[black]">
                                        {{ $t('homepage.aboutus.location') }}
                                    </span>
                                </div>
                            </div>
                        </router-link>
                        <router-link to="/about-us" >
                            <div class="flex gap-3 border-t-2 border-white mb-24">
                                <div class="about-us-img-wrapper2 mt-2">
                                    <img :src="usersIcon" class="about-us-img"/> 
                                </div>
                                <div class="mt-5">
                                    <h2 class="text-3xl text-[#00007E] font-bold mb-5">
                                        {{ $t('homepage.aboutus.teamtitle') }}
                                    </h2>
                                    <span class="text-xl text-[black]">
                                        {{ $t('homepage.aboutus.team') }}
                                    </span>
                                </div>
                            </div>
                        </router-link>
                    </div>
                    <div class="border-y-2 border-white">
                        <router-link to="/about-us" class="flex justify-between">
                            <div class="py-5">
                                <span class="text-3xl text-[black] font-bold mx-8">...</span>
                                <span class="text-3xl text-[black] font-bold">{{ $t('button.learnmore') }}</span>
                            </div>
                            <div class="flex align-center justify-between p-5 bg-[#66C3CD] border-l-2">
                                <img class="about-us-arrowImg" src="@/assets/img/servicesArrowImg.svg">
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
// import Button from "../../buttons";
import Header1 from "../../text/header/header_1.vue";
import BodyText from "../../text/body/body.vue";
import mapIcon from "../../../assets/img/icons/map-pin.svg";
import usersIcon from "../../../assets/img/icons/users.svg";
export default {
    name: "AboutUsSectionComponent",
    components: {
    SectionContainer,
    Card,
    // Button,
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
.about-us-arrowImg {
    width: 32px;
    height: 32px;
}

.about-us-arrowImg:hover {
    filter: brightness(0) invert(1);
    transform: scale(1.2);
    transition: .5s ease-in;
}

.about-us-img-wrapper1 {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 60px;
    background-color: #00007E;
    border-radius: 50%;
}

.about-us-img-wrapper2 {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 60px;
    background-color: #00007E;
    border-radius: 50%;
}

.about-us-img {
    width: 35px;
    height: 35px;
}
</style>
