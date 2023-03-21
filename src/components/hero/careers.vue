<template>
        <div class="flex gap-10 flex-wrap justify-between flex-row careers-bg">
            <Card class="w-full" :reverse="true" :url1="screenFrame" :url2="hiringPersons" :url3="flyElements" :url4="arrow" :url5="cloud">
                <div class="flex flex-col gap-6 self-center px-14">
                    <Header1 class="text-[#00007E] max-w-max text-2xl font-extrabold pb-5">
                        {{ $t('careersPage.hero.title') }}
                    </Header1>
                    <BodyText class="flex text-black max-w-max  leading-5 text-2xl font-normal">
                        <img :src="textIcon" class="w-[100px] h-[100px]"/>
                        <span class="self-center">{{ $t('careersPage.hero.subtitle') }}</span>
                    </BodyText>
                    <div class="flex justify-between">
                        <div class="relative">   
                            <img :src="searchBarIcon" class=" absolute left-[10px] translate-y-[50%]"/>
                            <input  class="w-[400px] p-3 px-12 rounded-3xl" 
                            placeholder="Search job title"
                            type="text"
                            v-model="searchQuery"
                            maxlength="30"/> 
                                
                            <img :src="crossSearchBarIcon" class=" absolute right-[10px] top-[50%] translate-y-[-50%] cursor-pointer"
                            @click="searchQuery=''"/>
                        </div>
                        <Button class="rounded-3xl">{{ $t('button.findTheJob') }}</Button>
                    </div>
                        
                   
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
            searchQuery: '',
            notFound: false,
            enterText: false,
            isAnimating: false,
            searchBarIcon: require('../../assets/img/images/industriespage-hero-searchbar-icon.svg'),
            crossSearchBarIcon: require('../../assets/img/images/industriespage-hero-searchbar-cross-icon.svg'),
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
@media screen and (min-width: 1550px) {
    .careers-bg {
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
