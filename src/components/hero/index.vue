<template>
  <div class="bg-main-bg mt-[-50px] bg-cover bg-no-repeat flex flex-col relative">
    <div class="my-auto flex justify-between px-3 md:px-16 lg:px-28 xl:px-28 w-full z-10">
      <div class="flex flex-col gap-6 max-w-xl pt-40">
        <Header1 class="text-[#00007E] font-black uppercase tracking-widest">
          {{ $t('homepage.hero.title') }}
        </Header1>
        <BodyText class="text-[#000026] text-2xl font-bold">
          {{ $t('homepage.hero.subtitle') }} 
        </BodyText>
        <div>
          <router-link to="/about-us">
            <Button>{{ $t('button.readmore') }}</Button>
          </router-link>
        </div>
      </div>
      <div class="flex">
        <div>
          <img :src="ilustraition"/>
        </div>
        <div class="flex flex-col gap-6 justify-center">
          <Socials/>
        </div>
      </div>
    </div>
    <div class="justify-end text-center my-10 z-10" @click="godown">
      <div class="flex justify-center">
        <SlideUnlock />
      </div>
      <div class="text-[#00007E] text-lg font-black mt-8">{{ $t('button.scrolldown') }}</div>
    </div>
    <!-- <img id="image" class="absolute top-0 right-0 md:-right-32 z-0 w-full md:w-4/6 h-screen" :src="image" /> -->

  </div>
</template>

<script>
import Button from "../buttons";
import Header1 from "../text/header/header_1.vue";
import BodyText from "../text/body/body.vue";
import image from "../../assets/img/home-page-hero-bg.svg";
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
      image: image,
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

<style>
/*@keyframes rot {
  0% {
    transform: rotate(45deg);
    filter: blur(20px);
    -webkit-filter: blur(20px);
  }

  50% {
    transform: rotate(0deg);
    filter: blur(60px);
    -webkit-filter: blur(60px);
  }

  100% {
    transform: rotate(45deg);
    filter: blur(20px);
    -webkit-filter: blur(20px);
  }
}

#image {
  transform-origin: 50% 50%;
  animation: rot infinite 60s linear;
  filter: blur(20px);
  -webkit-filter: blur(20px);
}*/
</style>