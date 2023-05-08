<template>
        <div class="flex gap-10 flex-wrap justify-between flex-row home-hiring-bg xs:pt-10">
            <Card class="w-full" :reverse="true" :url1="screenFrame" :url2="hiringPersons" :url3="flyElements" :url4="cloud"> 
                <div class="flex flex-col xl:gap-6 lg:gap-4 self-center xl:px-14 lg:px-10 sm:m-auto">
                    <Header1 class="text-[#00007E] max-w-max xl:text-[62px] lg:text-[50px] md:text-[48px] md:text-left sm:text-[48px] sm:text-center xs:text-[36px] xxs:text-[36px] xs:text-center xxs:text-center font-extrabold pb-5">
                        {{ $t('homepage.hiring.title') }}
                    </Header1>
                    <BodyText class="flex text-black max-w-max xl:leading-7 lg:leading-5 md:leading-4 xl:text-2xl lg:text-lg md:text-base sm:text-xl xs:text-xl font-normal">
                        <img :src="textIcon1" class="w-[110px] h-[110px] xs:w-[90px] xs:h-[90px] xxs:w-[80px] xxs:h-[80px]"/>
                        <span class="self-center ">{{ $t('homepage.hiring.subtitle1') }}</span>
                    </BodyText>
                    <BodyText class="flex text-black max-w-max xl:leading-7 lg:leading-5 md:leading-4 xl:text-2xl lg:text-lg md:text-base sm:text-xl xs:text-xl font-normal">
                        <img :src="textIcon2" class="w-[110px] h-[110px] xs:w-[90px] xs:h-[90px] xxs:w-[80px] xxs:h-[80px]"/>
                        <span class="self-center ">{{ $t('homepage.hiring.subtitle2') }}</span> 
                    </BodyText>
                    <div class="w-[100%] md:hidden sm:block sm:my-16 sm:m-auto xs:block xs:my-16 xxs:block xxs:mb-16"> 
                        <img :src="weAreHiringMobile" class="m-auto"/>
                        
                    </div>
                    <router-link to="/contact-us">
                        <Button class="xxs:w-full xs:w-full sm:w-full lg:w-[145px] lg:text-sm lg:py-3 lg:px-8">{{ $t('button.searchjob') }}</Button>
                    </router-link>
                </div>
            </Card>
        </div>
        <Carousel :items="technologies" :key="technologies.id" v-slot={data}>
                <TechnologiesCard @mouseover="data.hover=true" @mouseleave="data.hover=false" class="cursor-pointer xxs:mt-8">
                    <div class="technologies-card-content"> 
                            <img v-if="!data.hover" :src="data?.img" class="technologies-card-imgs" />   
                            <span v-if="data.hover" class="text-xl">{{data?.title}}</span> 
                    </div>
                </TechnologiesCard>
        </Carousel>
</template>

<script>
import Card from "../../card/hiring-card.vue";
import TechnologiesCard from "../../card/hiring-technologies-card.vue";
import Button from "../../buttons";
import Header1 from "../../text/header/header_1.vue";
import BodyText from "../../text/body/body.vue";
import Carousel from "../../card/hiring-technologies-carousel.vue";
export default {
    name: "HiringSectionComponent",
    components: {
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
            screenFrame: require('../../../assets/img/images/hiring-screen-frame.png'),
            hiringPersons: require('../../../assets/img/images/hiring-persons.png'),
            flyElements: require('../../../assets/img/images/hiring-fly-elements.png'),
            arrow: require('../../../assets/img/images/hiring-arrow.png'),
            cloud: require('../../../assets/img/images/hiring-cloud.png'),
            textIcon1: require('../../../assets/img/images/hiring-text-icon1.svg'),
            textIcon2: require('../../../assets/img/images/hiring-text-icon2.svg'),
            weAreHiringMobile: require('../../../assets/img/images/home-page-hiring-mobile-img.png'),
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
.home-hiring-bg{
    background-image: url('../../../assets/img/images/hiring-bg.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: bottom;
 
}
.technologies-card-content {
    width: 100%;
}
.technologies-card-imgs {
    width: 100%;
}
@media (min-width: 320px) {
    .home-hiring-bg {
        /* background-position: center; */
        background-size: cover;
    }
}
</style>
