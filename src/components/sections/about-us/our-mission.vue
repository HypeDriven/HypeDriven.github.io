<template>
    <SectionContainer class="bg-primary-bg">
        <Header1 class="text-white max-w-auto text-6xl font-extrabold leading-[80px] xxs:leading-[45px] xxs:text-5xl xxs:px-8 xxs:py-16 xs:leading-[55px] xs:text-5xl xs:px-6 xs:py-12 sm:leading-[65px] sm:text-6xl sm:px-4 sm:py-8">
            {{ $t('aboutpage.ourmission.title') }}
        </Header1>
    </SectionContainer>
    <div class="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col xxs:flex-col"> 
        <div class="employment-ourmission-vision">
            <Header4 class="max-w-auto font-bold text-[#00007E] mt-[40px] px-16 xxs:px-0 xs:px-0 sm:px-0 md:px-12 4xl:pl-40 5xl:pl-52 6xl:pl-[270px] 7xl:pl-[330px]">{{ $t('aboutpage.ourmission.vision.title') }}</Header4>
            <BodyText class="max-w-auto 7xl:max-w-3xl text-white text-3xl xs:text-2xl xl:px-16 lg:px-10 md:px-12 6xl:mt-[500px] 5xl:mt-[400px] xl:mt-[300px] lg:mt-[250px] md:mt-[200px] sm:mt-[200px] xs:mt-[180px] xxs:mt-[40px] 4xl:pl-40 5xl:pl-52 5xl:pr-0 6xl:pl-[270px] 6xl:pr-0 7xl:pl-[330px]">{{ $t('aboutpage.ourmission.vision.subtitle') }}</BodyText> 
        </div>
        <div class="employment-ourmission-mission">
            <Header4 class="max-w-auto font-bold text-[#00007E] mt-[40px] px-16 xxs:px-0 xs:px-0 sm:px-0 md:px-12">{{ $t('aboutpage.ourmission.mission.title') }}</Header4>
            <BodyText class="max-w-auto xl:text-black xxs:text-white xs:text-white sm:text-white md:text-white text-3xl xs:text-2xl xl:px-16 lg:px-10 md:px-12 xl:mt-[150px] lg:mt-[100px] md:mt-[100px] sm:mt-[80px] xs:mt-[40px] xxs:mt-[40px]">{{ $t('aboutpage.ourmission.mission.subtitle') }}</BodyText>
        </div>
    </div>
</template>

<script>
import SectionContainer from "../container";
import Header1 from "../../text/header/header_1.vue";
import Header4 from "../../text/header/header_4.vue";
import BodyText from "../../text/body/body.vue";
export default {
    name: "OurMissionSectionComponent",
    components: {
        SectionContainer,
        Header1,
        Header4,
        BodyText
    },
    data: function () {
        return {
        };
    }
};
</script>

<style>
.employment-ourmission-vision {
    background-image: url('../../../assets/img/images/employment-ourmission-vision.png');
    background-size: cover;
    height: 100vh;
    width: 50%;
    padding: 50px;
}
.employment-ourmission-mission {
    background-image: url('../../../assets/img/images/employment-ourmission-mission.png');
    background-size: cover;
    height: 100vh;
    width: 50%;
    padding: 50px;
}
@media (min-width: 768px) and (max-width: 1023.5px) {
    .employment-ourmission-vision {
        width: 100%;
        background-position: center;
        height: 100vh;
    }
    .employment-ourmission-mission {
        width: 100%;
        background-position: center;
        height: 100vh;
    }
}
@media (min-width: 576px) and (max-width: 767.5px) {
    .employment-ourmission-vision {
        width: 100%;
        background-position: center;
        height: 90vh;
    }
    .employment-ourmission-mission {
        width: 100%;
        background-position: center;
        height: 90vh;
    }
}
@media (min-width: 425px) and (max-width: 575.5px) {
    .employment-ourmission-vision {
        width: 100%;
        background-position: center;
        height: 75vh;
    }
    .employment-ourmission-mission {
        width: 100%;
        background-position: center;
        height: 70vh;
    }
}
@media (min-width: 320px) and (max-width: 424.5px) {
    .employment-ourmission-vision {
        width: 100%;
        background-position: center;
        height: 65vh;
    }
    .employment-ourmission-mission {
        width: 100%;
        background-position: center;
        height: 65vh;
    }
}
@media (min-height: 320px) and (max-height: 549.5px) {
    .employment-ourmission-vision {
        height: 100%;
    }
    .employment-ourmission-mission {
        height: 100%;
    }
}
</style>
