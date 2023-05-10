<template>
    <div class="carousel-pagination border-r-2  border-[#00007E]">
        <div class="flex flex-col gap-8 max-w-lg m-auto">
            <SectionTitle class="text-[#00007E] h-fit mb-[60px] text-7xl px-2 pt-8 text-left font-normal">
                {{$t('homepage.industries.subtitle')}}<strong class="font-black"> many industries </strong>
                <!-- We bring our expertise to <p class="font-extrabold"> many industries </p> -->
            </SectionTitle> 
        </div>
        <div class="flex flex-col">
            <button class="carousel-pagination-item text-xl text-left font-black"
            v-for="(item, index) in total" 
            :key="index"
            :class="{active: currentIndex === index}"
            @click="$emit('switch', index)"
            >{{`${item}`}}<span class="ml-[25px]">{{$t(`homepage.industries.${item}`)}}</span></button>
        </div>
        <div class="carousel-pagination-more text-xl font-black">
            <router-link to="/industries" class="flex justify-between">
                <div class="flex">
                    <span class="flex flex-col justify-center">...</span>
                    <span class="ml-[25px] flex flex-col justify-center">more</span>
                </div>
                <div class="p-4 bg-[#66C3CD] mr-[-68px] z-10">
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
        height: 70px;
        background-color: rgb(255, 255, 255);
        color: black;
        border-top: 2px solid #00007E;
        padding-left: 10px;
    }
    .carousel-pagination-more {
        border-top: 2px solid #00007E;
        border-bottom: 2px solid #00007E;
        height: 70px;
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
</style>