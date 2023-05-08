<template>
    <div class="carousel-pagination border-r-2  border-[#00007E]">
        <div class="flex flex-col gap-8 max-w-lg m-auto">
            <SectionTitle class="text-[#00007E] h-fit mb-[60px] lg:text-6xl md:text-5xl sm:text-4xl xs:text-2xl xxs:text-2xl xxs:mb-[12px] px-2 lg:pt-8 md:pt-4 sm:pt-4 xs:pt-4 xxs:pt-3 text-left font-light">
                {{$t('homepage.industries.subtitle')}}<strong class="font-black"> many industries </strong>
            </SectionTitle> 
        </div>
        <div class="flex flex-col">
            <button class="carousel-pagination-item lg:h-[70px] md:h-[60px] sm:h-[40px] xs:h-[35px] xxs:h-[27px] md:text-xl sm:text-sm xs:text-sm xxs:text-sm text-left font-black"
            v-for="(item, index) in total" 
            :key="index"
            :class="{active: currentIndex === index}"
            @click="$emit('switch', index)"
            >{{`${item}`}}<span class="md:ml-[25px] sm:ml-[15px] xs:ml-[10px] xxs:ml-[5px]">{{$t(`homepage.industries.${item}`)}}</span></button>
        </div>
        <div class="carousel-pagination-more lg:h-[70px] md:h-[60px] sm:h-[40px] xs:h-[35px] xxs:h-[30px] lg:text-xl md:text-lg sm:text-base xs:text-base xxs:text-base font-black">
            <router-link to="/industries" class="flex justify-between">
                <div class="flex">
                    <span class="flex flex-col justify-center">...</span>
                    <span class="md:ml-[25px] sm:ml-[15px] flex flex-col justify-center">more</span>
                </div>
                <div class="lg:p-4 md:p-[11px] lg:mr-[-68px] md:mr-[-58px] sm:p-[6px] sm:mr-[-38px] xs:p-[4px] xs:mr-[-32px] xxs:p-[4px] xxs:mr-[-28px] bg-[#66C3CD] z-10">
                    <img class="industries-arrowImg" src="@/assets/img/servicesArrowImg.svg">
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
import SectionTitle from "../sections/title.vue";
 
export default {
    emits: ['switch'],
    components: {
        SectionTitle
    },
    props: {
        total: Number,
        currentIndex: Number,
        title: String
    }
}
</script>

<style> 
    .carousel-pagination-item {
        max-width: 512px;
        background-color: rgb(255, 255, 255);
        color: black;
        border-top: 2px solid #00007E;
        padding-left: 10px;
    }
    .carousel-pagination-more {
        border-top: 2px solid #00007E;
        border-bottom: 2px solid #00007E;
        padding-left: 10px;
    }
    .carousel-pagination-more:hover {
        background-color: #00007E;
        color: #66C3CD;
    }
    .active {
        background-color: #00007E;
        color: #66C3CD;
    }
    .industries-arrowImg {
        width: 35px;
        height: 35px;
    }
    @media (min-width: 576px) and (max-width: 767.5px) {
        .industries-arrowImg {
            width: 25px;
            height: 25px;
        }
    }
    @media (min-width: 425px) and (max-width: 576px) {
        .industries-arrowImg {
            width: 25px;
            height: 25px;
        }
    }
    @media (min-width: 320px) and (max-width: 425px) {
        .industries-arrowImg {
            width: 20px;
            height: 20px;
        }
    }
</style>