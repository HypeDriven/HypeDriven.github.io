<template>
        <div class="bg-primary-bg">
            <div class="xxs:px-4 xxs:pt-[50px] xs:px-4 xs:pt-[50px] sm:px-4 sm:pt-[50px]">
                <SectionTitle class="text-[#66C3CD] h-fit text-center m-auto text-6xl xxs:text-5xl max-w-full mb-16 xxs:mb-8 xs:mb-10 sm:mb-12 md:mb-10 pt-10">
                    {{ $t('diversityPage.worldwide.title') }}
                </SectionTitle>
                <SectionSubTitle class="text-xl text-white text-center max-w-2xl m-auto mb-16 xxs:mb-8 xs:mb-10 sm:mb-12 md:mb-10">
                    {{ $t('diversityPage.worldwide.subtitle') }}
                </SectionSubTitle>
            </div>
            <div class="diversity-map-wrapper"> 
                <svg width="1220" height="602" class="m-auto xxs:hidden xs:hidden sm:hidden md:hidden lg:hidden xl:block" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <image :href="diversitypageWorldwide"/>
                    <g v-for="country in countries" :key="country.name"> 
                        <path :d="country.path" @mouseover="showCountryName(country.name), country.ishoverd=true" @mouseout="hideHoveredCountry(), country.ishoverd=false"
                        :fill="country.ishoverd ? '#FFFFFF' : '#150DCE'" class=" cursor-pointer duration-500"/>
                        <text v-if="country.ishoverd" :x="country.x" :y="country.y" text-anchor="middle" fill="#FFFFFF" font-size="16px" font-weight="700">· {{ hoveredCountry }}</text>
                        <image :href="standWithUkraine" x="50%" y="27%" class="stand-with-ukraine"></image>
                    </g>    
                </svg>
                <img :src="diversitypageWorldwideMobile" class="w-[95%] m-auto xxs:block xs:block sm:block md:block lg:block xl:hidden"/>
            </div>
        </div>
</template>
<script>
import SectionTitle from "../title";
import SectionSubTitle from "../sub-title";
import countries from "./countries";
export default {
    name: "DiversityPageWorldwideComponent",
    components: {
        SectionTitle,
        SectionSubTitle
    },
    data: function () {
        return {
            countries,
            hoveredCountry: '',
            diversitypageWorldwide: require('@/assets/img/images/diversitypage-worldwide-img.svg'),
            diversitypageWorldwideMobile: require('@/assets/img/images/diversitypage-worldwide-img-mobile.svg'),
            standWithUkraine: require('@/assets/img/images/diversitypage-worldwide-stand-with-UKRAINE.svg')
        };
    },
    methods: {
        showCountryName(name) {
            this.hoveredCountry = name;
        },
        hideHoveredCountry() {
            this.hoveredCountry = ''
        }
    }
}
</script>

<style>
    .diversity-map-wrapper {
        display: flex;
        width: 100%;
        height: 120vh;
        background-image: url('@/assets/img/images/diversitypage-worldwide-bg.png');
        background-size: cover;
        background-position: center;
    }
    @media (min-width: 2050px) {
        .diversity-map-wrapper {
            height: 80vh;
            background-position: top;
        }
    }
    @media (min-width: 1600px) and (max-width: 2049.5px) {
        .diversity-map-wrapper {
            height: 90vh;
            background-position: top;
        }
    }
    @media (min-width: 768px) and (max-width: 1023.5px) {
        .diversity-map-wrapper {
            height: 95vh;
        }
    }
    @media (min-width: 576px) and (max-width: 767.5px) {
        .diversity-map-wrapper {
            height: 70vh;
        }
    }
    @media (min-width: 425px) and (max-width: 575.5px) {
        .diversity-map-wrapper {
            height: 60vh;
        }
    }
    @media (min-width: 320px) and (max-width: 424.5px) {
        .diversity-map-wrapper {
            height: 50vh;
        }
    }
    @media (min-height: 451px) and (max-height: 555.5px) { /*575.5px*/
        .diversity-map-wrapper {
            height: 85vh;
        }
    }
    @media (min-height: 320px) and (max-height: 450.5px) {
        .diversity-map-wrapper {
            height: 120vh;
        }
    }
</style>