<template>
        <SectionContainer class="xxs:p-6 xxs:pt-20 xxs:pb-32 xs:p-10 xs:pt-14 xs:pb-32 sm:px-8 sm:pt-14 sm:pb-32 md:px-16 md:pt-20 md:pb-32 lg:pb-32 lg:p-36 xl:p-36 1xl:p-36 card-bg 1xl:justify-between">  
            <Header2 class="text-[#66C3CD] w-full font-black uppercase tracking-widest text-left 3xl:text-right"> 
                {{ $t('aboutpage.hero.title') }} <span class="text-white">Hypedriven</span>
            </Header2>
            <div class="flex lg:justify-end xl:justify-end gap-8 p-6 xxs:p-0 xs:p-0 xs:min-h-[250px] sm:p-0 sm:min-h-[300px] md:p-0"> 
                <div class="flex flex-col justify-center sm:w-full"> 
                    <BodyText class="text-white xl:text-2xl text-4xl text-left font-normal mb-12"> 
                        {{ $t('aboutpage.hero.subtitle') }}
                    </BodyText>
                    <div class="flex xl:justify-start"> 
                        <router-link to="/contact-us" class="xxs:w-full xs:w-full sm:w-full">
                            <Button class="bg-[#66C3CD] text-[#00007E] xxs:w-full xs:w-full sm:w-full">{{ $t('aboutpage.button.contactus') }}</Button>
                        </router-link>
                    </div>
                    
                </div>
            </div>
            <div class="justify-end text-center z-10" @click="godown"> 
                <div class="flex justify-center">
                    <SlideUnlock :color="'#00007E'"/>
                </div>
                <div class="text-[#ffffff] text-lg font-black mt-8 xxs:hidden xs:hidden sm:hidden md:hidden">{{ $t('button.scrolldown') }}</div>
            </div>
        </SectionContainer>
         
</template>

<script>
import Button from "../buttons";
import Header2 from "../text/header/header_2.vue";
import BodyText from "../text/body/body.vue";
import SlideUnlock from "../slide/slide-unlock2";
import SectionContainer from "../sections/container.vue";
export default {
    name: "AboutUsHeroComponent",
    components: {
        Button,
        Header2,
        BodyText,
        SlideUnlock,
        SectionContainer
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
    background-position: center;
}
</style>
