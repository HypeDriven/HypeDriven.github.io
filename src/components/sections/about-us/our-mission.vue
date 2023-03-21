<template>
    <SectionContainer>
        <Header1 class="text-white max-w-auto text-2xl font-extrabold leading-[80px]">
            {{ $t('aboutpage.ourmission.title') }}
        </Header1>
    </SectionContainer>
    <div class="flex">
        <div class="employment-ourmission-vision">
            <Header4 class="max-w-auto font-bold text-[#00007E] mt-[40px] px-16">{{ $t('aboutpage.ourmission.vision.title') }}</Header4>
            <BodyText class="max-w-auto text-white text-3xl px-16 mt-[300px]">{{ $t('aboutpage.ourmission.vision.subtitle') }}</BodyText>
        </div>
        <div class="employment-ourmission-mission">
            <Header4 class="max-w-auto font-bold text-[#00007E] mt-[40px] px-16">{{ $t('aboutpage.ourmission.mission.title') }}</Header4>
            <BodyText class="max-w-auto text-black text-3xl mt-[150px] px-16">{{ $t('aboutpage.ourmission.mission.subtitle') }}</BodyText>
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
</style>
