<template>
    <div>
        <SectionContainer class="bg-primary-bg xxs:px-4 xxs:py-[40px] xs:px-4 xs:py-[40px] sm:px-4 sm:py-[40px] md:px-4 md:py-[40px]">
            <div class="p-5 xxs:p-0 xs:p-0 sm:p-0">
                <SectionTitle class="text-[#66C3CD] h-fit text-6xl xxs:text-5xl max-w-full tracking-[10px] xxs:tracking-[2px] xs:tracking-[4px] sm:tracking-[6px] text-center uppercase mb-8">
                    {{ $t('teamPage.hero.title') }}<span class="text-white"> team</span>
                </SectionTitle>
                <SectionSubTitle class="text-white h-fit text-xl font-bold text-center mb-8">
                    {{ $t('teamPage.hero.subtitle') }}
                </SectionSubTitle>
                <div class="flex justify-center w-full">
                    <router-link to="/contact-us">
                        <Button class="bg-[#66C3CD] text-[#00007E]">{{ $t('button.contactUs') }}</Button>
                    </router-link>
                </div>

                <img :src="teamPageHeroImhg" class="w-full xxs:mt-2"/>
                <SectionSubTitle class="text-white h-fit text-base text-center max-w-3xl m-auto mt-8">
                    {{ $t('teamPage.hero.text') }}
                </SectionSubTitle>
            </div>

        </SectionContainer>
        <div class="flex flex-col justify-center bg-[#150DCE] team-running-line">
            <RunningLine :img="runStringImg" :content="runningLineContent"/>
        </div>
    </div>
</template>

<script>
import SectionContainer from "../sections/container.vue";
import SectionTitle from "../sections/title";
import SectionSubTitle from "../sections/sub-title.vue"
import Button from "../buttons";
import RunningLine from "../sections/running-line/running-line.vue";
export default {
    name: 'TeamPageHeroComponent',
    components: {
        SectionContainer,
        SectionTitle,
        SectionSubTitle,
        Button,
        RunningLine
    },
    data: function () {
        return {
            teamPageHeroImhg: require('@/assets/img/images/teampage-hero-illustration.svg'),
            runStringImg: require("@/assets/img/icons/servicespage-runningline-icon-logo.svg"),
            runningLineContent: [
                'teamPage.runningline.ceo',
                'teamPage.runningline.managers',
                'teamPage.runningline.backend',
                'teamPage.runningline.qa',
                'teamPage.runningline.frontend',
                'teamPage.runningline.designer'
            ]
        };
    },
}
</script>

<style>
.team-running-line {
    width: 100vw;
    height: 100px;
    border-top: 2px solid white;
    border-bottom: 2px solid white;
}
@media (min-width: 768px) and (max-width: 1023.5px) {
    .team-running-line  {
        height: 90px;
        width: 160vw;
    }
}
@media (min-width: 576px) and (max-width: 767.5px) {
    .team-running-line  {
        height: 80px;
        width: 160vw;
    }
}
@media (min-width: 425px) and (max-width: 575.5px) {
    .team-running-line  {
        height: 70px;
        width: 160vw;
    }
}
@media (min-width: 320px) and (max-width: 424.5px) {
    .team-running-line  {
        height: 60px;
        width: 160vw;
    }
}
</style>
