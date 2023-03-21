<template>
    <div class="jobs-bg">
    <SectionContainer>
        <div class="flex gap-10 flex-wrap justify-between flex-row">
            <v-card class="w-full">
                <div class="flex justify-between gap-6 bg-main-bg">
                    <div class="flex flex-col justify-center ml-8">
                        <Header1 class="text-[#00007E] max-w-max text-2xl font-extrabold">
                            {{ $t('aboutpage.jobs.title') }}
                        </Header1>
                    </div>
                    <div class="flex flex-col justify-center">
                        <BodyText class="text-white max-w-xl whitespace-pre-wrap text-2xl font-bold">
                            {{ $t('aboutpage.jobs.subtitle') }}
                        </BodyText>
                    </div>
                    <img class="" :src="aboutpageJobsBgIllustr">
                    <div class="p-10 bg-[#00007E] cursor-pointer">
                        <img class="" :src="aboutpageArrowImg">
                    </div>
                </div>
            </v-card>
        </div>
    </SectionContainer>
    </div>
</template>

<script>
import SectionContainer from "../container";
// import Card from "../../card/";
// import Button from "../../buttons";
import Header1 from "../../text/header/header_1.vue";
import BodyText from "../../text/body/body.vue";
export default {
    name: "JobsSectionComponent",
    components: {
        SectionContainer,
        // Card,
        // Button,
        Header1,
        BodyText
    },
    data: function () {
        return {
            aboutpageJobsBgIllustr: require('@/assets/img/images/aboutpage-jobs-bg-illustr.png'),
            aboutpageArrowImg: require('@/assets/img/images/aboutpageArrowImg.svg')
        };
    }
};
</script>

<style>
.jobs-bg {
    background-image: url('../../../assets/img/images/aboutpage-jobs-bg.png');
    background-repeat: no-repeat;
    background-size: cover;
    padding-top: 80px;
    padding-bottom: 80px;
}
</style>
