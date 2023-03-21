<template>
    <SectionContainer class="bg-primary-bg">
        <SectionTitle class="text-white h-fit text-center">
            {{ $t('careersPage.howWeHire.title') }}
        </SectionTitle>
        <div class="flex m-auto h-[600px]">
            <div class="mr-[100px]">
                <img :src="howWeHireImg" class="imageAnimation" :style="{'transform': `translateY(${imagePosition})`}"> 
            </div>
            <div class="flex flex-col ">
                <div v-for="(item, index) in howWeHireItems" :key="index">
                    <div  class="flex"> <!--@mouseenter="item.isHoverd=true, changePosition(item.imgPosition)" @mouseout="item.isHoverd=false"-->
                        <img :src="item.icon"/> 
                        <span class="text-white text-[16px] max-w-xs flex flex-col justify-center ml-8">{{ item.title }}</span>
                    </div>
                    <img v-if="item.id !== 4" :src="howWeHireLine" class="my-3" />
                </div>
            </div>
          
        </div>
        <Button class="rounded-3xl mt-[-50px]">{{ $t('button.sendYourCv') }}</Button>
    </SectionContainer>
</template>

<script>
import SectionContainer from "../container";
import SectionTitle from "../title";
import Button from "../../buttons";
// import HowWEHireCard from "./how-we-hire-card.vue"
export default {
    name: "CareersPageHowWeHireComponent",
    components: {
        SectionContainer,
        SectionTitle,
        // HowWEHireCard,
        Button
    },
    data: function () {
        return {
            imagePosition: 0,
            howWeHireImg: require('@/assets/img/images/careerspage-how-we-hire-illustr.png'),
            howWeHireLine: require('@/assets/img/images/careerspage-how-we-hire-line.svg'),
            howWeHireItems: [
                {
                    id: 1,
                    title: "Send your CV",
                    icon: require('@/assets/img/images/careerspage-how-we-hire-icon1.svg'),
                    isHoverd: false,
                    imgPosition: '0px'
                },
                {
                    id: 2,
                    title: "Have interview with our recruiter and tech specialists",
                    icon: require('@/assets/img/images/careerspage-how-we-hire-icon2.svg'),
                    isHoverd: false,
                    imgPosition: '140px'
                },
                {
                    id: 3,
                    title: "Impress our client with your experience and expertise on the next interview",
                    icon: require('@/assets/img/images/careerspage-how-we-hire-icon3.svg'),
                    isHoverd: false,
                    imgPosition: '280px'
                },
                {
                    id: 4,
                    title: "Get job offer from Hypedriven and welcome on board!",
                    icon: require('@/assets/img/images/careerspage-how-we-hire-icon4.svg'),
                    isHoverd: false,
                    imgPosition: '420px'
                }
            ]
        }
    },
    /*methods: {
        changePosition(position) {
            this.imagePosition = position;
        }
    }*/
}
</script>

<style>
.imageAnimation {
    cursor: pointer;
    animation: imageFly infinite 15s ease-in-out;
}
@keyframes imageFly {
    20% {
        transform: translateY(140px);
    } 
    35% {
        transform: translateY(280px);
    }
    55% {
        transform: translateY(420px);
    }
    70% {
        transform: translateY(280px);
    }
    85% {
        transform: translateY(140px);
    }
    100% {
        transform: translateY(0px);
    }
}
</style>