<template>
    <!-- <SectionContainer> -->
        <div class="flex gap-10 flex-wrap justify-between flex-row bggg">
            <Card class="w-full" :reverse="true" :url1="screenFrame" :url2="hiringPersons" :url3="flyElements" :url4="arrow" :url5="cloud">
                <div class="flex flex-col gap-6 self-center px-14">
                    <Header1 class="text-[#00007E] max-w-max text-2xl font-extrabold pb-5">
                        {{ $t('homepage.hiring.title') }}
                    </Header1>
                    <BodyText class="flex text-black max-w-max leading-5 text-2xl font-normal">
                        <img :src="textIcon1" class="w-[100px] h-[100px]"/>
                        <span class="self-center">{{ $t('homepage.hiring.subtitle1') }}</span>
                    </BodyText>
                    <BodyText class="flex text-black max-w-max  leading-5 text-2xl font-normal">
                        <img :src="textIcon2" class="w-[100px] h-[100px]"/>
                        <span class="self-center">{{ $t('homepage.hiring.subtitle2') }}</span>
                    </BodyText>
                    <div @click="changeShowEmail">
                        <Button :class="!showEmail ? 'block' : 'hidden'">{{ $t('button.searchjob') }}</Button>
                        <div :class="showEmail ? 'block' : 'hidden'">
                            <BodyText class="text-white max-w-max whitespace-pre-wrap leading-10 text-2xl font-bold">
                                <span>{{ $t('info.emailus') }}</span> <span class="text-violet-700">
                                    <a href="mailto:careers@hypedriven.com">mailto:careers@hypedriven.com</a>
                                </span>
                            </BodyText>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
        <Carousel :items="technologies" v-slot={data}>
                <TechnologiesCard @mouseover="data.hover=true" @mouseleave="data.hover=false" class="cursor-pointer">
                    <div class="technologies-card-content"> 
                            <img v-if="!data.hover" :src="data?.img" class="technologies-card-imgs" />   
                            <span v-if="data.hover" class="text-xl">{{data?.title}}</span> 
                    </div>
                </TechnologiesCard>
        </Carousel>
    <!-- </SectionContainer> -->
</template>

<script>
// import SectionContainer from "../container";
import Card from "../../card/hiring-card.vue";
import TechnologiesCard from "../../card/hiring-technologies-card.vue"
import Button from "../../buttons";
import Header1 from "../../text/header/header_1.vue";
import BodyText from "../../text/body/body.vue";
import Carousel from "../../card/hiring-technologies-carousel.vue";
export default {
    name: "HiringSectionComponent",
    components: {
        // SectionContainer,
        Card,
        Button,
        Header1,
        BodyText,
        Carousel,
        TechnologiesCard
    },
    data: function () {
        return {
            showEmail: false,
            cardUrl: require('../../../assets/img/images/hiring-image.png'),
            screenFrame: require('../../../assets/img/images/hiring-screen-frame.png'),
            hiringPersons: require('../../../assets/img/images/hiring-persons.png'),
            flyElements: require('../../../assets/img/images/hiring-fly-elements.png'),
            arrow: require('../../../assets/img/images/hiring-arrow.png'),
            cloud: require('../../../assets/img/images/hiring-cloud.png'),
            textIcon1: require('../../../assets/img/images/hiring-text-icon1.svg'),
            textIcon2: require('../../../assets/img/images/hiring-text-icon2.svg'),
            technologies: [
                {
                    title: 'Java',
                    img: require("../../../assets/img/images/technologies-img-Java.svg"),
                    hover: false
                },
                {
                    title: '.NET/C#',
                    img: require("../../../assets/img/images/technologies-img-NET.svg"),
                    hover: false
                },
                {
                    title: 'PHP',
                    img: require("../../../assets/img/images/technologies-img-PHP.svg"),
                    hover: false
                },
                {
                    title: 'Node.JS',
                    img: require("../../../assets/img/images/technologies-img-NodeJS.svg"),
                    hover: false
                },
                {
                    title: 'Unity',
                    img: require("../../../assets/img/images/technologies-img-Unity.svg"),
                    hover: false
                },
                {
                    title: 'Ruby',
                    img: require("../../../assets/img/images/technologies-img-Ruby.svg"),
                    hover: false
                },
                {
                    title: 'Go',
                    img: require("../../../assets/img/images/technologies-img-Go.svg"),
                    hover: false
                },
                {
                    title: 'React',
                    img: require("../../../assets/img/images/technologies-img-React.svg"),
                    hover: false
                },
                {
                    title: 'Python',
                    img: require("../../../assets/img/images/technologies-img-Python.svg"),
                    hover: false
                },
                {
                    title: 'Vue.JS',
                    img: require("../../../assets/img/images/technologies-img-Vue.svg"),
                    hover: false
                },
                {
                    title: 'JavaScript',
                    img: require("../../../assets/img/images/technologies-img-JavaScript.svg"),
                    hover: false
                },
                {
                    title: 'IOS',
                    img: require("../../../assets/img/images/technologies-img-IOS.svg"),
                    hover: false
                },
                {
                    title: 'Android',
                    img: require("../../../assets/img/images/technologies-img-Android.svg"),
                    hover: false
                },
                {
                    title: 'Flutter',
                    img: require("../../../assets/img/images/technologies-img-Flutter.svg"),
                    hover: false
                },
                {
                    title: 'React Native',
                    img: require("../../../assets/img/images/technologies-img-React-Native.svg"),
                    hover: false
                },
                {
                    title: 'Angular',
                    img: require("../../../assets/img/images/technologies-img-Angular.svg"),
                    hover: false
                }
            ]
        };
    },
    methods: {
        changeShowEmail() {
            this.showEmail = !this.showEmail;
        }
    }
};
</script>

<style>
.bggg{
    background-image: url('../../../assets/img/images/hiring-bg.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: bottom;
 
}
@media screen and (min-width: 1550px) {
    .bggg {
        background-size: cover;
    }
}
.technologies-card-content {
    width: 100%;
}
.technologies-card-imgs {
    width: 100%;
}
</style>
