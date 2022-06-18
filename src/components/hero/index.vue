<template>
  <div class="bg-primary-bg bg-cover bg-no-repeat flex flex-col relative">
    <div class="my-auto flex justify-between md:px-16 lg:px-28 xl:px-28 w-full z-10">
      <div class="flex flex-col gap-6 max-w-xl">
        <Header1 class="text-white">
          Software development company
        </Header1>
        <BodyText class="text-white">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever
        </BodyText>
        <div>
          <Button>Learn More</Button>
        </div>
      </div>
      <div class="flex flex-col gap-6 justify-center">
        <Socials/>
      </div>
    </div>
    <div class="justify-end text-center my-10 z-10">
      <div class="flex justify-center">
        <SlideUnlock />
      </div>
      <div class="text-white mt-8">Scroll down</div>
    </div>
      <img id="image" class="absolute top-0 right-0 z-0 w-1/2" :src="image" />

  </div>
</template>

<script>
import Button from "../buttons";
import Header1 from "../text/header/header_1.vue";
import BodyText from "../text/body/body.vue";
import image from "../../assets/img/home-hero-bg.svg";
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
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

#image {
  transform-origin: 50% 50%;
  animation: rot infinite 15s ease-in-out;
  filter: blur(8px);
  -webkit-filter: blur(8px);
}
</style>