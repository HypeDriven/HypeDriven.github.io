<template>
    <div class="jobs-bg">
    <SectionContainer>
        <div class="flex gap-10 flex-wrap justify-between flex-row">
            <div class="w-full xxs:px-5 xs:px-5 sm:px-5">
                <div class="flex xxs:flex-col xxs:pt-5 xxs:pl-5 xs:flex-col xs:pt-5 xs:pl-5 sm:flex-col sm:pt-5 sm:pl-5 justify-between gap-6 bg-main-bg join-us-bg">
                    <div class="flex flex-col justify-center ml-8 xxs:ml-0 xs:ml-0 sm:ml-0">
                        <Header1 class="text-[#00007E] max-w-max xl:text-7xl lg:text-5xl md:text-5xl sm:text-6xl xs:text-6xl xxs:text-6xl font-extrabold">
                            {{ $t('aboutpage.jobs.title') }}
                        </Header1>
                    </div>
                    <div class="flex flex-col justify-center">
                        <BodyText class="text-white xl:max-w-xl lg:max-w-xs md:max-w-[250px] sm:max-w-[400px] xs:max-w-[350px] xxs:max-w-[240px] whitespace-pre-wrap xl:text-2xl lg:text-base md:text-base sm:text-base font-bold">
                            {{ $t('aboutpage.jobs.subtitle') }}
                        </BodyText>
                    </div>
                    <div class="p-10 xxs:p-7 xs:p-6 sm:p-6 xxs:self-end xs:self-end sm:self-end xxs:w-[75px] xs:w-[75px] sm:w-[100px] bg-[#00007E] cursor-pointer">
                        <router-link to="/contact-us">
                            <img class="" :src="aboutpageArrowImg">
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </SectionContainer>
    </div>
</template>

<script>
import SectionContainer from "../container";
import Header1 from "../../text/header/header_1.vue";
import BodyText from "../../text/body/body.vue";
export default {
    name: "JobsSectionComponent",
    components: {
        SectionContainer,
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
.join-us-bg {
    background-image: url('@/assets/img/images/aboutpage-jobs-bg-illustr.png');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: 80% 0%;
}
@media (min-width: 768px) and (max-width: 1024px) {
    .jobs-bg {
       background-position: right;
    }
    .join-us-bg {
        background-position: 65% 0%;
    }
}
@media (min-width: 576px) and (max-width: 767.5px) {
    .jobs-bg {
       background-position: right;
    }
    .join-us-bg {
        background-position: 30% 100%;
        background-size: 35%;
    }
}
@media (min-width: 425px) and (max-width: 575.5px) {
    .jobs-bg {
       background-position: right;
    }
    .join-us-bg {
        background-position: 20% 100%;
        background-size: 40%;
    }
}
@media (min-width: 320px) and (max-width: 424.5px) {
    .jobs-bg {
       background-position: right;
    }
    .join-us-bg {
        background-position: 15% 100%;
        background-size: 40%;
    }
}
</style>
