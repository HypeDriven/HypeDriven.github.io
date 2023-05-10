<template>
        <div class="bg-primary-bg">
            <SectionTitle class="text-[#66C3CD] h-fit text-center m-auto text-6xl max-w-full mb-16 pt-10">
                {{ $t('diversityPage.worldwide.title') }}
            </SectionTitle>
            <SectionSubTitle class="text-xl text-white text-center max-w-2xl m-auto mb-16">
                {{ $t('diversityPage.worldwide.subtitle') }}
            </SectionSubTitle>
            <div class="diversity-map-wrapper">
                <svg width="1220" height="602" class="m-auto" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <image :href="diversitypageWorldwide"/>
                    <g v-for="country in countries" :key="country.name"> 
                        <path :d="country.path" @mouseover="showCountryName(country.name), country.ishoverd=true" @mouseout="hideHoveredCountry(), country.ishoverd=false"
                        :fill="country.ishoverd ? '#FFFFFF' : '#150DCE'" class=" cursor-pointer duration-500"/>
                        <text v-if="country.ishoverd" :x="country.x" :y="country.y" text-anchor="middle" fill="#FFFFFF" font-size="16px" font-weight="700">· {{ hoveredCountry }}</text>
                        <image :href="standWithUkraine" x="50%" y="27%" class="stand-with-ukraine"></image>
                    </g>    
                    
                </svg>
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
    /*.stand-with-ukraine {
        animation: pulse 5s infinite ease-in;
    }
    @keyframes pulse {
        0% {
            transform: translateY(-2px);
        }
        50% {
            transform: translateY(2px);
        }
        100% {
            transform: translateY(0px);
        }
    }*/
</style>