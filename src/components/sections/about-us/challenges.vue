<template>
    <div class="challenges-bg pb-20">
        <SectionContainer>
            <Header1 class="text-[#00007E] max-w-2xl text-6xl sm:text-6xl xs:text-5xl xxs:text-5xl font-extrabold leading-[80px] sm:leading-[60px] xs:leading-[55px] xxs:leading-[45px] lg:m-0 text-left md:py-6 sm:px-4 sm:py-10 xs:px-4 xs:py-10 xxs:px-4 xxs:py-10 sm:m-auto xs:m-auto "> 
                {{ $t('aboutpage.challenges.title') }}
            </Header1>
        </SectionContainer>
    <div class="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col xxs:flex-col px-12 4xl:px-52 5xl:px-64 6xl:px-80 7xl:px-96"> 
        <Header4 class="lg:hidden max-w-auto font-bold text-[#66C3CD] xl:text-5xl lg:text-3xl xs:text-4xl xxs:text-4xl mb-[30px] px-16 md:px-1 sm:px-1 xs:px-0 xs:max-w-xs xxs:px-0 xxs:max-w-xs">{{ $t('aboutpage.challenges.digital.title') }}</Header4>
        <div class="challenges-card">
            <img :src="crissCross" class="absolute left-[20px] top-[90px] criss-cross1 "/> 
            <img :src="crissCross" class="absolute left-[20px] top-[90px] criss-cross2 "/> 
            <Header4 class="hidden lg:block max-w-auto font-bold text-[#66C3CD] xl:text-5xl lg:text-3xl xs:text-4xl xxs:text-4xl mb-[30px] px-16 sm:px-1 xs:px-0 xs:max-w-xs xxs:px-0">{{ $t('aboutpage.challenges.digital.title') }}</Header4>
            <BodyText class="max-w-auto text-black 1xl:text-xl xl:text-lg lg:text-base md:text-2xl xs:text-lg xxs:text-lg xl:px-20 lg:px-16 md:px-6 sm:px-4 xs:px-3 xxs:px-3 lg:m-0 sm:m-auto">{{ $t('aboutpage.challenges.digital.subtitle') }}</BodyText> 
            <img :src="crissCross" class="absolute right-[20px] bottom-[10px] criss-cross3 "/> 
            <img :src="crissCross" class="absolute right-[20px] bottom-[10px] criss-cross4 "/> 
        </div>
        <Header4 class="lg:hidden lg:max-w-xs md:max-w-auto sm:max-w-auto font-bold text-[#66C3CD] xl:text-5xl lg:text-3xl xs:text-4xl xxs:text-4xl mb-[30px] px-16 md:px-1 sm:px-1 xs:px-0 xs:max-w-[170px] xxs:px-0 xxs:max-w-[170px]">{{ $t('aboutpage.challenges.cost.title') }}</Header4>
        <div class="challenges-card">
            <img :src="crissCross" class="absolute left-[20px] top-[90px] criss-cross1 "/>
            <img :src="crissCross" class="absolute left-[20px] top-[90px] criss-cross2 "/> 
            <Header4 class="hidden lg:block lg:max-w-xs md:max-w-auto sm:max-w-auto font-bold text-[#66C3CD] xl:text-5xl lg:text-3xl mb-[30px] px-16">{{ $t('aboutpage.challenges.cost.title') }}</Header4>
            <BodyText class="max-w-auto text-black 1xl:text-xl xl:text-lg lg:text-base md:text-2xl xxs:text-lg xl:px-20 lg:px-16 md:px-6 sm:px-4 xs:px-3 xxs:px-3 lg:m-0 sm:m-auto">{{ $t('aboutpage.challenges.cost.subtitle') }}</BodyText>
            <img :src="crissCross" class="absolute right-[20px] bottom-[10px] criss-cross3 "/> 
            <img :src="crissCross" class="absolute right-[20px] bottom-[10px] criss-cross4 "/> 
        </div>
        <Header4 class="lg:hidden max-w-auto font-bold text-[#66C3CD] xl:text-5xl lg:text-3xl xs:text-4xl xxs:text-4xl mb-[30px] px-16 md:px-1 sm:px-1 xs:px-0 xs:max-w-[190px] xxs:px-0 xxs:max-w-[150px]">{{ $t('aboutpage.challenges.itexp.title') }}</Header4>
        <div class="challenges-card">
            <img :src="crissCross" class="absolute left-[20px] top-[90px] criss-cross1 "/>
            <img :src="crissCross" class="absolute left-[20px] top-[90px] criss-cross2 "/>
            <Header4 class="hidden lg:block 1xl:max-w-sm xl:max-w-xl lg:max-w-xs font-bold text-[#66C3CD] xl:text-5xl lg:text-3xl xs:text-4xl xxs:text-4xl mb-[30px] px-16 sm:px-1 xs:px-0 xs:max-w-[190px] xxs:px-0 xxs:max-w-[150px]">{{ $t('aboutpage.challenges.itexp.title') }}</Header4>
            <BodyText class="max-w-auto md:w-[100%] text-black 1xl:text-xl xl:text-lg lg:text-base md:text-2xl xxs:text-lg xl:px-20 lg:px-16 md:px-6 sm:px-4 xs:px-3 xxs:px-3 lg:m-0 sm:m-auto">{{ $t('aboutpage.challenges.itexp.subtitle') }}</BodyText> 
            <img :src="crissCross" class="absolute right-[20px] bottom-[10px] criss-cross3 "/>
            <img :src="crissCross" class="absolute right-[20px] bottom-[10px] criss-cross4 "/>
        </div>
    </div>
    </div>
    
</template>

<script>
import SectionContainer from "../container";
import Header1 from "../../text/header/header_1.vue";
import Header4 from "../../text/header/header_4.vue";
import BodyText from "../../text/body/body-textXL.vue";
export default {
    name: "ChallengesSectionComponent",
    components: {
        SectionContainer,
        Header1,
        Header4,
        BodyText
    },
    data: function () {
        return {
            crissCross: require("../../../assets/img/images/aboutus-challenges-crossIcon.svg")
        };
    }
};
</script>

<style>
.challenges-bg {
    background-color: white;
}

.challenges-card {
    max-width: 34%;
    height: 450px;
    position: relative;
    padding-top: 10px;
}

.criss-cross1 {
    position: absolute;
}
.criss-cross2 {
    position: absolute;
}
.criss-cross3 {
    position: absolute;
}
.criss-cross4 {
    position: absolute;
}

@keyframes challenges-card-bounce {
    0% {
        transform: translateY(0px);
    }
    35% {
        transform: translateY(-20px);
    }
    75% {
        transform: translateY(20px);
    }
    100% {
        transform: translateY(0px);
    }
}

@media (min-width: 1850px) {
    .challenges-card {
        height: 450px;
    }
    .criss-cross1 {
        left: -5px;
        top: 90px;
        width: 50px;
    }
    .criss-cross2 {
        left: 99%; 
        top: 90px;
        width: 50px;
    }
    .criss-cross3 {
        left: -5px; 
        bottom: 10px;
        width: 50px;
    }
    .criss-cross4 {
        left: 99%; 
        bottom: 10px;
        width: 50px;
    }
}

@media (min-width: 1440px) and  (max-width: 1849.8px) {
    .challenges-card {
        height: 500px;
    }
    .criss-cross1 {
        left: -24px;
        top: 90px;
        width: 50px;
    }
    .criss-cross2 {
        left: 95%; 
        top: 90px;
        width: 50px;
    }
    .criss-cross3 {
        left: -24px; 
        bottom: 10px;
        width: 50px;
    }
    .criss-cross4 {
        left: 95%; 
        bottom: 10px;
        width: 50px;
    }
}

@media (min-width: 1280px) and (max-width: 1439.5px) {
    .challenges-card {
        height: 500px;
    }
    .criss-cross1 {
        left: -12px;
        top: 90px;
        width: 50px;
    }
    .criss-cross2 {
        left: 97%; 
        top: 90px;
        width: 50px;
    }
    .criss-cross3 {
        left: -12px; 
        bottom: 10px;
        width: 50px;
    }
    .criss-cross4 {
        left: 97%; 
        bottom: 10px;
        width: 50px;
    }
}

@media (min-width:  1109.5px) and (max-width:  1279.5px) {
    .challenges-card {
        height: 450px;
    }
    .criss-cross1 {
        left: -5px;
        top: 70px;
        width: 40px;
    }
    .criss-cross2 {
        left: 98.5%; 
        top: 70px;
        width: 40px;
    }
    .criss-cross3 {
        left: -5px; 
        bottom: 60px;
        width: 40px;
    }
    .criss-cross4 {
        left: 98.5%; 
        bottom: 60px;
        width: 40px;
    }
}

@media (min-width: 1024px) and (max-width:  1109.5px) {
    .challenges-card {
        height: 480px;
    }
    .criss-cross1 {
        left: -14px;
        top: 70px;
        width: 40px;
    }
    .criss-cross2 {
        left: 95.5%; 
        top: 70px;
        width: 40px;
    }
    .criss-cross3 {
        left: -14px; 
        bottom: 10px;
        width: 40px;
    }
    .criss-cross4 {
        left: 95.5%; 
        bottom: 10px;
        width: 40px;
    }
}


@media (min-width: 913px) and (max-width: 1023.5px) {
    .challenges-card {
        max-width: 100%;
        height: 250px;
        /* padding-left: 10px; */
    }
    .challenges-card:hover {
        transition: 0s;
        box-shadow: 0px 0px 0px 0px;
        border-radius: 0px;
    }
    .criss-cross1 {
        left: -15px;
        top: -15px;
        width: 40px;
    }
    .criss-cross2 {
        left: 95%; 
        top: -15px;
        width: 40px;
    }
    .criss-cross3 {
        left: -15px; 
        bottom: 80px;
        width: 40px;
    }
    .criss-cross4 {
        left: 95%; 
        bottom: 80px;
        width: 40px;
    }
}

@media (min-width: 768px) and (max-width: 912.5px) {
    .challenges-card {
        max-width: 100%;
        height: 250px;
        /* padding-left: 10px; */
    }
    .challenges-card:hover {
        transition: 0s;
        box-shadow: 0px 0px 0px 0px;
        border-radius: 0px;
    }
    .criss-cross1 {
        left: -15px;
        top: -15px;
        width: 40px;
    }
    .criss-cross2 {
        left: 95%; 
        top: -15px;
        width: 40px;
    }
    .criss-cross3 {
        left: -15px; 
        bottom: 50px;
        width: 40px;
    }
    .criss-cross4 {
        left: 95%; 
        bottom: 50px;
        width: 40px;
    }
}

@media (min-width: 576px) and (max-width: 767.5px) {
    .challenges-card {
        max-width: 100%;
        height: 260px;
    }
    .challenges-card:hover {
        transition: 0s;
        box-shadow: 0px 0px 0px 0px;
        border-radius: 0px;
    }
    .criss-cross1 {
        left: -15px;
        top: -15px;
        width: 30px;
    }
    .criss-cross2 {
        left: 95%; 
        top: -15px;
        width: 30px;
    }
    .criss-cross3 {
        left: -15px; 
        bottom: 60px;
        width: 30px;
    }
    .criss-cross4 {
        left: 95%; 
        bottom: 60px;
        width: 30px;
    }
}
@media (min-width: 511px) and (max-width: 575.5px) {
    .challenges-card {
        max-width: 100%;
        height: 220px;
        padding-bottom: 10px;
    }
    .challenges-card:hover {
        transition: 0s;
        box-shadow: 0px 0px 0px 0px;
        border-radius: 0px;
    }
    .criss-cross1 {
        left: -15px;
        top: -15px;
        width: 30px;
    }
    .criss-cross2 {
        left: 95%; 
        top: -15px;
        width: 30px;
    }
    .criss-cross3 {
        left: -15px; 
        bottom: 40px;
        width: 30px;
    }
    .criss-cross4 {
        left: 95%; 
        bottom: 40px;
        width: 30px;
    }
}
@media (min-width: 425px) and (max-width: 510.5px) {
    .challenges-card {
        max-width: 100%;
        height: 220px;
        padding-bottom: 10px;
    }
    .challenges-card:hover {
        transition: 0s;
        box-shadow: 0px 0px 0px 0px;
        border-radius: 0px;
    }
    .criss-cross1 {
        left: -15px;
        top: -15px;
        width: 30px;
    }
    .criss-cross2 {
        left: 95%; 
        top: -15px;
        width: 30px;
    }
    .criss-cross3 {
        left: -15px; 
        bottom: 50px;
        width: 30px;
    }
    .criss-cross4 {
        left: 95%; 
        bottom: 50px;
        width: 30px;
    }
}

@media (min-width: 320px) and (max-width: 424.5px) {
    .challenges-card {
        max-width: 100%;
        height: 200px;
        padding-bottom: 10px;
    }
    .challenges-card:hover {
        transition: 0s;
        box-shadow: 0px 0px 0px 0px;
        border-radius: 0px;
    }
    .criss-cross1 {
        left: -15px;
        top: -15px;
        width: 30px;
    }
    .criss-cross2 {
        left: 95%; 
        top: -15px;
        width: 30px;
    }
    .criss-cross3 {
        left: -15px; 
        bottom: 30px;
        width: 30px;
    }
    .criss-cross4 {
        left: 95%; 
        bottom: 30px;
        width: 30px;
    }
}
</style>
