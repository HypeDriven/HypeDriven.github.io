<template>
    <SectionContainer class="bg-primary-bg xxs:px-4 xxs:pt-[50px] xs:px-4 xs:pt-[50px] sm:px-4 sm:pt-[50px]"> 
        <div>
            <SectionTitle class="text-[#66C3CD] h-fit text-center m-auto text-6xl xxs:text-5xl max-w-full mb-16">
                {{ $t('diversityPage.qote.title') }}
            </SectionTitle>
            <div class="relative flex xxs:flex-col xs:flex-col sm:flex-col justify-around">
                <img :src="quoteImg" class="absolute top-0 left-0 quote-img"/>
                <div class="xxs:hidden xs:hidden sm:hidden max-w-[50%] border-r-2"> 
                    <img :src="diversityQoteImg" class="w-[100%]"/>
                </div>
                <div class="hidden xxs:block xs:block sm:block max-w-[100%] sm:w-[90%] sm:m-auto border-b-2"> 
                    <img :src="diversityQoteImgMobile" class="w-[100%] rounded-t-full"/>
                </div>
                <div class="flex flex-col justify-between max-w-[50%] xxs:max-w-[100%] xs:max-w-[100%] sm:max-w-[90%] sm:m-auto xxs:px-0 xxs:pt-8 xs:px-0 xs:pt-8 sm:px-0 sm:pt-8 md:px-2 md:pt-0 lg:px-2 lg:pt-1 xl:px-15 xl:pt-5 1xl:px-20 1xl:pt-12 ">
                    <span class="xl:text-2xl xxs:text-lg xs:text-xl sm:text-xl md:text-sm lg:text-lg text-size text-white italic font-bold xl:tracking-widest md:tracking-normal lg:tracking-normal">{{ $t('diversityPage.qote.phrase') }}</span>
                    <div class="flex flex-col xxs:pt-6 xs:pt-6 sm:pt-6">
                        <span class="text-xl text-[#66C3CD] font-bold">{{ $t('diversityPage.qote.whoSaid') }}</span> 
                        <span class="text-sm text-white">{{ $t('diversityPage.qote.position') }}</span>
                    </div>
                </div>
                <img :src="quoteImg" class="absolute bottom-0 right-0 rotate-180 quote-img"/>
            </div>
        </div>
    </SectionContainer>
</template>
<script>
import SectionContainer from "../container.vue";
import SectionTitle from "../title";

export default {
    name: "DiversityPageQoteComponent",
    components: {
        SectionContainer,
        SectionTitle
    },
    data: function () {
        return {
            diversityQoteImg: require('@/assets/img/images/diversitypage-qote-img1.png'),
            diversityQoteImgMobile: require('@/assets/img/images/diversitypage-qote-mobile-img.png'),
            quoteImg: require('@/assets/img/images/diversitypage-qote.svg')
        };
    }
}
</script>

<style>
.quote-img {
    width: 77px;
    height: 59px;

}
@media (min-width: 890px) and (max-width: 1023.5px) {
    .text-size {
        font-size: 20px;
    }
}
@media (min-width: 890px) and (max-width: 1023.5px) {
    .text-size {
        font-size: 20px;
    }
}
@media (min-width: 768px) and (max-width: 889.5px) {
    .quote-img {
        width: 55px;
        height: 55px;
    } 
}
@media (min-width: 425px) and (max-width: 575.5px) {
    .quote-img {
        width: 60px;
        height: 60px;
    }
}
@media (min-width: 320px) and (max-width: 424.5px) {
    .quote-img {
        width: 42px;
        height: 42px;
    }
}
</style>