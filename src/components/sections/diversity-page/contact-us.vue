<template>
    <div class="contactus-bg">
        <ContactUsParallax :bgImage="backgroundImg" ref="parallaxBg"/>
        <SectionContainer>
            <div class="flex gap-10 flex-wrap justify-between flex-row">
                <v-card class="w-full">
                    <div class="flex justify-between gap-6 bg-main-bg">
                        <div class="flex flex-col justify-center ml-20">
                            <Header1 class="text-[#00007E] max-w-max text-2xl font-extrabold">
                                {{ $t('diversityPage.contactUs.title') }}
                            </Header1>
                        </div>
                        <div class="flex flex-col justify-center">
                            <BodyText class="text-white max-w-sm  whitespace-pre-wrap text-2xl font-bold">
                                {{ $t('diversityPage.contactUs.subtitle') }}
                            </BodyText>
                        </div>
                        <img class="h-[90%] pt-4" :src="diversityPageIllustr">
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
import Header1 from "../../text/header/header_1.vue";
import BodyText from "../../text/body/body.vue";
import ContactUsParallax from "../parallax-bg.vue";
export default {
    name: "DiversityPageContactUsComponent",
    components: {
        SectionContainer,
        Header1,
        BodyText,
        ContactUsParallax
    },
    data: function () {
        return {
            diversityPageIllustr: require('@/assets/img/images/diversitypage-contactus-bg-illustr.png'),
            aboutpageArrowImg: require('@/assets/img/images/aboutpageArrowImg.svg'),
            backgroundImg: require('../../../assets/img/images/diversitypage-contactus-bg.png')
        };
    }
};
</script>

<style>
.contactus-bg {
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
</style>
