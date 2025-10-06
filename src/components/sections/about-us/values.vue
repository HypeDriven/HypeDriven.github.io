<template>
    <div class="values-bg">
        <SectionContainer class="sm:px-6 xs:px-3 xxs:px-3">
            <Header4 class="text-[#66C3CD] max-w-auto text-4xl font-extrabold leading-[80px] xxs:leading-none sm:leading-[40px]">
                {{ $t('aboutpage.values.title') }}
            </Header4>
            <div class="grid grid-rows-2 grid-cols-2 grid-flow-col xl:gap-16 lg:gap-10 md:gap-10 sm:pb-5 sm:gap-4 sm:grid-rows-4 sm:grid-cols-1 xs:gap-6 xs:grid-rows-4 xs:grid-cols-1 xxs:gap-6 xxs:grid-rows-4 xxs:grid-cols-1 xxs:pb-4">
                <div class="employment-values sm:px-6 xs:px-6 xxs:px-6">
                    <img :src="valuesIcon1" class="employment-values-img border-r-2"/>
                    <BodyText class="max-w-auto text-white xl:text-3xl lg:text-xl md:text-base sm:text-2xl xs:text-2xl xxs:text-xl xl:px-16 lg:px-8 md:px-4 sm:px-6 xs:px-6 xxs:px-6 py-4">{{ $t('aboutpage.values.wedo') }}</BodyText>
                </div>
                <div class="employment-values sm:px-6 xs:px-6 xxs:px-6">
                    <img :src="valuesIcon3" class="employment-values-img border-r-2"/>
                    <BodyText class="max-w-auto text-white xl:text-3xl lg:text-xl md:text-base sm:text-2xl xs:text-2xl xxs:text-xl xl:px-16 lg:px-8 md:px-4 sm:px-6 xs:px-6 xxs:px-6 py-4">{{ $t('aboutpage.values.working') }}</BodyText>
                </div>
                <div class="employment-values sm:px-6 xs:px-6 xxs:px-6">
                    <img :src="valuesIcon2" class="employment-values-img border-r-2"/>
                    <BodyText class="max-w-auto text-white xl:text-3xl lg:text-xl md:text-base sm:text-2xl xs:text-2xl xxs:text-xl xl:px-16 lg:px-8 md:px-4 sm:px-6 xs:px-6 xxs:px-6 py-4">{{ $t('aboutpage.values.wetake') }}</BodyText>
                </div>
                <div class="employment-values sm:px-6 xs:px-6 xxs:px-6">
                    <img :src="valuesIcon4" class="employment-values-img border-r-2"/>
                    <BodyText class="max-w-auto text-white xl:text-3xl lg:text-xl md:text-base sm:text-2xl xs:text-2xl xxs:text-xl xl:px-16 lg:px-8 md:px-4 sm:px-6 xs:px-6 xxs:px-6 py-4">{{ $t('aboutpage.values.amodern') }}</BodyText>
                </div>
            </div>
        </SectionContainer>
    </div>
</template>

<script>
import SectionContainer from "../container";
import Header4 from "../../text/header/header_4.vue";
import BodyText from "../../text/body/body.vue";
export default {
    name: "ValuesSectionComponent",
    components: {
        SectionContainer,
        Header4,
        BodyText
    },
    data: function () {
        return {
            valuesIcon1: require('../../../assets/img/images/aboutus-values-icon1.svg'),
            valuesIcon2: require('../../../assets/img/images/aboutus-values-icon2.svg'),
            valuesIcon3: require('../../../assets/img/images/aboutus-values-icon3.svg'),
            valuesIcon4: require('../../../assets/img/images/aboutus-values-icon4.svg')
        };
    }
};
</script>

<style>
.employment-values {
   display: flex;
   max-width: 100%;
   cursor: pointer;
}
.employment-values:hover {
    transition: .5s;
    box-shadow: 0px 0px 10px 0px white;
    transform: scale(1.1);
    padding-left: 5px;
    border-radius: 20px;
}
.employment-values-img {
    width: 150px;
    height: 150px;
    padding-right: 40px;
}
.values-bg {
    background-image: url('../../../assets/img/images/aboutus-values.png');
    background-size: cover;
    width: 100vw;
    height: 100vh;
    padding-top: 20px;
}
@media (min-width: 2200px) {
    .values-bg {
        height: 70vh;
    }
}
@media (min-width: 1750px) and (max-width: 2199.5px) {
    .values-bg {
        height: 80vh;
    }
}
@media (min-width: 1024px) and (max-width: 1280px) {
    .employment-values-img {
        width: 120px;
        height: 120px;
    }
}
@media (min-width: 768px) and (max-width: 1024px) {
    .values-bg {
        height: 100%;
        padding-bottom: 40px;
    }
    .employment-values-img {
        width: 120px;
        height: 120px;
        padding-right: 30px;
    }
    .values-bg {
        background-position: center;
    }
}
@media (min-width: 576px) and (max-width: 767.5px) {
    .values-bg {
        height: 100%;
    }
    .employment-values-img {
        width: 115px;
        height: 115px;
        padding-right: 30px;
    }
    .employment-values:hover {
        transition: none;
        box-shadow: 0px 0px 10px 0px white;
        transform: scale(1);
        padding-left: 19px;
        padding-right: 24px;
        border-radius: 20px;
    }
    .values-bg {
        background-position: center;
    }
}
@media (min-width: 425px) and (max-width:  575.5px) {
    .values-bg { 
        height: 100%;
        padding-bottom: 10px;
    }
    .employment-values-img {
        width: 100px;
        height: 100px;
        padding-right: 25px;
    }
    .employment-values:hover {
        transition: none;
        box-shadow: 0px 0px 0px 0px white;
        transform: scale(1);
        padding-left: 19px;
        padding-right: 24px;
        border-radius: 20px;
    }
    .values-bg {
        background-position: center;
    }
}
@media (min-width: 320px) and (max-width: 424.5px) {
    .values-bg {
        height: 100%;
    }
    .employment-values-img {
        width: 90px;
        height: 90px;
        padding-right: 25px;
    }
    .employment-values:hover {
        transition: none;
        box-shadow: 0px 0px 0px 0px white;
        transform: scale(1);
        padding-left: 7px;
        padding-right: 12px;
        border-radius: 20px;
    }
    .values-bg {
        background-position: center;
    }
}
</style>
