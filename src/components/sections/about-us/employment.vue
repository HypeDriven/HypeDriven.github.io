<template>
    <div class="employment-wrapper m-auto">
        <EmploymentParallax :bgImage="backgroundImg" ref="parallaxBg"/>
        <div class=" m-auto employment-parallax-wrapper ">
            <div class="regular-wrapper flex flex-col justify-center gap-4 ">
                <Header1 class="text-[#00007E] mt-12 xxs:mb-10 xs:mb-10 sm:mb-12 md:mb-10 max-w-auto text-6xl font-extrabold"> 
                    {{ $t('aboutpage.employment.title') }}
                </Header1>
                <BodyText class="text-black xxs:mb-10 xs:mb-10 sm:mb-12 md:mb-10 max-w-auto whitespace-pre-wrap xl:leading-10 xl:text-2xl lg:leading-8 lg:text-xl font-normal"> 
                    {{ $t('aboutpage.employment.subtitle') }}
                </BodyText>
                    <router-link to="/contact-us" class="xxs:w-full xs:w-full sm:w-full">
                        <Button class="xxs:w-full xs:w-full sm:w-full">{{ $t('aboutpage.button.contactus') }}</Button>
                    </router-link>
            </div>
        </div>
    </div>
        
</template>

<script>
import Button from "../../buttons";
import Header1 from "../../text/header/header_1.vue";
import BodyText from "../../text/body/body.vue";
import EmploymentParallax from "../parallax-bg.vue";
export default {
    name: "EmploymentSectionComponent",
    components: {
        Header1,
        BodyText,
        Button,
        EmploymentParallax
    },
    data: function () {
        return {
            backgroundImg: require('../../../assets/img/images/employment-bg.png')
        };
    }
};
</script>

<style>
.employment-parallax-wrapper {
    position: relative;
    height: 100vh;
    width: 100vw;
    transform-style: preserve-3d;
    box-sizing: border-box;
}

.regular-wrapper {
    width: 100vw;
    height: 100vh;
    background-image: url('../../../assets/img/images/employment-bg-puzzle.png');
    background-size: cover;
    object-fit: cover;
    padding: 80px;
}

@media (min-width: 2200px) {
    .regular-wrapper {
        padding-left: 384px;
        padding-right: 384px;
    }
}

@media (min-width: 2050px) and (max-width: 2199.5px) {
    .regular-wrapper {
        padding-left: 320px;
        padding-right: 320px;
    }
}

@media (min-width: 1850px) and (max-width: 2049.5px) {
    .regular-wrapper {
        padding-left: 256px;
        padding-right: 256px;
    }
}

@media (min-width: 1750px) and (max-width: 1849.5px) {
    .regular-wrapper {
        padding-left: 208px;
        padding-right: 208px;
    }
}

@media (min-width: 576px) and (max-width: 767.5px) {
    .regular-wrapper {
        background-position: 38% 100%;
        padding: 25px;
    }
}

@media (min-width: 425px) and (max-width: 575.5px) {
    .regular-wrapper {
        background-position: 38% 100%;
        padding: 15px;
    }
}

@media (min-width: 320px) and (max-width: 424.5px) {
    .regular-wrapper {
        background-position: 38% 100%;
        padding: 10px;
    }
}

@media (min-height: 320px) and (max-height: 424.5px) {
    .regular-wrapper {
       padding-bottom: 50px;
    }
}
</style>