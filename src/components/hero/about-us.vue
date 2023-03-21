<template>
        <v-card elevation="4" class="   sm:p-16 lg:p-36 card-bg">
            <div class="flex justify-between gap-8 p-6 min-h-[700px]">
                <div>
                <Header2 class="text-[#66C3CD] w-full font-black uppercase "> <!--tracking-widest-->
                    {{ $t('aboutpage.hero.title') }} <span class="text-white">Hypedriven</span>
                </Header2>
            </div>
            <div class="flex flex-col justify-center">
                <BodyText class="text-white text-4xl font-normal mb-12">
                    {{ $t('aboutpage.hero.subtitle') }}
                </BodyText>
                <router-link to="/about-us">
                    <Button class="bg-[#66C3CD] text-[#00007E]">{{ $t('aboutpage.button.contactus') }}</Button>
                </router-link>
            </div>
            </div>
            <div class="justify-end text-center my-10 z-10" @click="godown">
                <div class="flex justify-center">
                    <SlideUnlock :color="'#00007E'"/>
                </div>
                <div class="text-[#ffffff] text-lg font-black mt-8">{{ $t('button.scrolldown') }}</div>
            </div>
        </v-card>
         
</template>

<script>
import Button from "../buttons";
import Header2 from "../text/header/header_2.vue";
import BodyText from "../text/body/body.vue";
import SlideUnlock from "../slide/slide-unlock2";
export default {
    name: "AboutUsHeroComponent",
    components: {
        Button,
        Header2,
        BodyText,
        SlideUnlock
    },
    data: function () {
        return {
        };
    },
    methods:{
    godown(){
      document.getElementById('main-content').scrollIntoView({
        behavior: 'smooth'
      });
    }
  }
};
</script>

<style scoped>
.card-bg {
    background-image: url('../../assets/img/images/about-hypedriven-bg.png');
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 1000px;
}
</style>
