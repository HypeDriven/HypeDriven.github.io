<template>
  <div class="bg-main-bg bg-cover bg-no-repeat flex flex-col relative xs:pt-5 xs:pb-10 xxs:pt-5 xxs:pb-10">
    <div class="my-auto flex justify-between px-3 md:px-16 lg:px-16 xl:px-28 4xl:px-52 5xl:px-64 6xl:px-80 7xl:px-96 w-full z-10">
      <div class="flex flex-col gap-6 xxs:gap-12 lg:max-w-xl md:max-w-[220px] xl:pt-28 lg:pt-20 md:pt-12 sm:pt-10 xs:pt-6 xxs:pt-4"> 
        <Header1 class="text-[#00007E] font-black uppercase tracking-widest xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-left xs:text-5xl xxs:text-5xl "> 
          {{ $t('homepage.hero.title') }}
        </Header1>
        <BodyText class="text-[#000026] lg:font-bold md:font-normal 1xl:text-2xl xl:text-lg lg:text-base md:text-sm sm:text-sm text-left xs:text-lg xxs:text-lg">
          {{ $t('homepage.hero.subtitle') }} 
        </BodyText>
        <div class="xs:flex xs:justify-between sm:m-0 xxs:flex xxs:justify-between">
          <router-link to="/about-us">
            <Button class="lg:w-[135px] lg:text-sm lg:py-3 lg:px-8">{{ $t('button.readmore') }}</Button>
          </router-link>
          <div class="hidden xs:block xxs:block">
            <img :src="ilustraition" class="w-[180px] xxs:mt-[-40px] xs:mt-[-10px]"/>
          </div>
        </div>
      </div>
      <div class="flex xs:hidden xxs:hidden"> 
        <div>
          <img :src="ilustraition"/>
        </div>
        <div class="flex flex-col lg:gap-6 md:gap-3 sm:gap-2 justify-center xs:hidden xxs:hidden">
          <Socials/>
        </div>
      </div>
    </div>
    <div class="justify-end text-center my-10 z-10 xs:hidden xxs:hidden" @click="godown">
      <div class="flex justify-center">
        <SlideUnlock />
      </div>
      <div class="text-[#00007E] lg:text-lg sm:text-sm md:text-base font-black mt-8">{{ $t('button.scrolldown') }}</div>
    </div>
  </div>
</template>

<script>
import Button from "../buttons";
import Header1 from "../text/header/header_1.vue";
import BodyText from "../text/body/body.vue";
import SlideUnlock from "../slide/slide-unlock.vue";
import Socials from "../socials/index.vue";
import ilustraition from "@/assets/img/mainBanerIllustration.svg"

export default {
  name: "HeroComponent",
  components: {
    Button,
    Header1,
    BodyText,
    SlideUnlock,
    Socials
  },
  data: function () {
    return {
      ilustraition: ilustraition
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
