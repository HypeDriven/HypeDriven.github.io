<template>
        <div class="flex gap-10 flex-wrap justify-between flex-row careers-bg xxs:pt-[40px] xs:pt-[40px]">
            <Card class="w-full" :reverse="true" :url1="screenFrame" :url2="hiringPersons" :url3="flyElements" :url4="cloud"> 
                <div class="flex flex-col gap-6 self-center lg:px-14 xxs:px-0 xs:px-0 sm:px-0 sm:m-auto md:px-0">
                    <Header1 class="text-[#00007E] max-w-max  xxs:text-5xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold pb-5 xxs:pb-2 xs:pb-3 3xl:uppercase"> 
                        {{ $t('careersPage.hero.title') }}
                    </Header1>
                    <BodyText class="flex text-black max-w-max leading-7 xxs:text-xl md:text-xl lg:text-xl xl:text-2xl font-normal">
                        <img :src="textIcon" class="w-[120px] h-[120px] xxs:w-[80px] xxs:h-[80px] xs:w-[100px] xs:h-[100px]"/>
                        <span class="self-center">{{ $t('careersPage.hero.subtitle') }}</span>
                    </BodyText>
                    <div class="w-[100%] md:hidden sm:block sm:mb-16 sm:m-auto xs:block xs:mb-16 xxs:block xxs:mb-16">
                        <img :src="weAreHiringMobile" class="m-auto"/>
                        
                    </div>
                    <router-link to="/careers/vacancies">
                        <Button class="w-full">{{ $t('button.findTheJob') }}</Button>
                    </router-link>
                   
                </div>
            </Card>
        </div>
</template>

<script>
import Card from "../card/hiring-card.vue";
import Button from "../buttons";
import Header1 from "../text/header/header_1.vue";
import BodyText from "../text/body/body.vue";
export default {
    name: "CareersPageHeroComponent",
    components: {
        Card,
        Button,
        Header1,
        BodyText
    },
    data: function () {
        return {
            screenFrame: require('@/assets/img/images/hiring-screen-frame.png'),
            hiringPersons: require('@/assets/img/images/hiring-persons.png'),
            flyElements: require('@/assets/img/images/hiring-fly-elements.png'),
            arrow: require('@/assets/img/images/hiring-arrow.png'),
            cloud: require('@/assets/img/images/hiring-cloud.png'),
            textIcon: require('@/assets/img/images/hiring-text-icon2.svg'),
            weAreHiringMobile: require('@/assets/img/images/home-page-hiring-mobile-img.png'),
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
.careers-bg{
    background-image: url('@/assets/img/images/hiring-bg.png');
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
    .careers-bg {
        background-size: cover;
    }
}
</style>
