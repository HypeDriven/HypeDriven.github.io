<template>
    <div class="contactus-bg">
        <ContactUsParallax :bgImage="backgroundImg" ref="parallaxBg"/>
        <SectionContainer>
            <div class="flex gap-10 flex-wrap justify-between flex-row">
                <div class="w-full xxs:px-5 xs:px-5 sm:px-10">
                    <div class="flex xxs:flex-col xxs:pt-8 xxs:pl-5 xs:flex-col xs:pt-10 xs:pl-5 sm:flex-col sm:pt-10 sm:pl-5 justify-between gap-6 bg-main-bg contactus-illustr-bg">
                        <div class="flex flex-col justify-center xxs:ml-0 xs:ml-0 sm:ml-0 md:ml-2 lg:ml-8 xl:ml-20 ">
                            <Header1 class="text-[#00007E] max-w-max xxs:text-5xl xs:text-6xl sm:text-6xl md:text-4xl lg:text-5xl diversity-contact-us-text xl:text-6xl font-extrabold">
                                {{ $t('diversityPage.contactUs.title') }}
                            </Header1>
                        </div>
                        <div class="flex flex-col justify-center">
                            <BodyText class="text-white xxs:max-w-[220px] xs:max-w-[260px] sm:max-w-xs md:max-w-xs lg:max-w-xs xl:max-w-sm 1xl:max-w-md xxs:pb-4 xs:pb-8 sm:pb-10 whitespace-pre-wrap text-2xl font-bold">
                                {{ $t('diversityPage.contactUs.subtitle') }}
                            </BodyText>
                        </div>
                        <div class="p-10 xxs:p-7 xxs:self-end xxs:w-[75px] xs:p-6 xs:self-end xs:w-[75px] sm:p-6 sm:self-end sm:w-[100px] bg-[#00007E] cursor-pointer">
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
.contactus-illustr-bg {
    background-image: url('@/assets/img/images/diversitypage-contactus-bg-illustr.png');
    background-repeat: no-repeat;
    background-size: contain;
    background-size: 15%;
    background-position: 85% 100%;
}
@media (min-width: 1440px) {
    .contactus-illustr-bg {
        background-position: 85% 100%;
        background-size: 12%;
    }
}
@media (min-width: 1280px) and (max-width: 1439.5px) {
    .contactus-illustr-bg {
        background-position: 84% 100%;
        background-size: 15%;
    }
}
@media (min-width: 1180px) and (max-width: 1279.5px) {
    .contactus-illustr-bg {
        background-position: 82% 100%;
        background-size: 15%;
    }
    .diversity-contact-us-text {
        font-size: 60px;
    }
}
@media (min-width: 1024px) and (max-width: 1179.5px) {
    .contactus-illustr-bg {
        background-image: none;
    }
}
@media (min-width: 768px) and (max-width: 1023.5px) {
    .contactus-illustr-bg {
        background-position: 20% 100%;
        background-size: 18%;
    }
}
@media (min-width: 576px) and (max-width: 767.5px) {
    .contactus-illustr-bg {
        background-position: 50% 100%;
        background-size: 45%;
    }
}
@media (min-width: 425px) and (max-width: 575.5px) {
    .contactus-illustr-bg {
        background-position: 40% 100%;
        background-size: 42%;
    }
}
@media (min-width: 320px) and (max-width: 424.5px) {
    .contactus-illustr-bg {
        background-position: 15% 100%;
        background-size: 45%;
    }
}
</style>
