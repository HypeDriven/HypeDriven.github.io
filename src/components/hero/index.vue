<template>
  <div class="bg-primary-bg bg-cover bg-no-repeat flex flex-col relative">
    <div class="my-auto flex justify-between px-3 md:px-16 lg:px-28 xl:px-28 w-full z-10">
      <div class="flex flex-col gap-6 max-w-xl">
        <Header1 class="text-white">
          {{$t('homepage.hero.title')}}
        </Header1>
        <BodyText class="text-white">
          {{$t('homepage.hero.subtitle')}}
        </BodyText>
        <div>
          <Button>{{$t('button.learnmore')}}</Button>
        </div>
      </div>
      <div class="flex flex-col gap-6 justify-center">
        <Socials />
      </div>
    </div>
    <div class="justify-end text-center my-10 z-10">
      <div class="flex justify-center">
        <SlideUnlock />
      </div>
      <div class="text-white mt-8">{{$t('button.scrolldown')}}</div>
    </div>
    <img id="image" class="absolute top-0 right-0 md:-right-32 z-0 w-full md:w-4/6 h-screen" :src="image" />

  </div>
</template>

<script>
import Button from "../buttons";
import Header1 from "../text/header/header_1.vue";
import BodyText from "../text/body/body.vue";
import image from "../../assets/img/home-page-hero-bg.svg";
import SlideUnlock from "../slide/slide-unlock";
import Socials from "../socials/index.vue";

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
      image: image
    };
  }
};
</script>

<style>
@keyframes rot {
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
}
</style>