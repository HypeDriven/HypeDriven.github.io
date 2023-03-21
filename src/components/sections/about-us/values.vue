<template>
    <div class="values-bg">
        <SectionContainer>
            <Header4 class="text-[#66C3CD] max-w-auto text-4xl font-extrabold leading-[80px]">
                {{ $t('aboutpage.values.title') }}
            </Header4>
        </SectionContainer>
        <div class="grid grid-rows-2 grid-cols-2 grid-flow-col gap-16 px-[100px]">
            <div class="employment-values">
                <img :src="valuesIcon1" class="employment-values-img border-r-2"/>
                <BodyText class="max-w-auto text-white text-3xl px-16 py-4">{{ $t('aboutpage.values.wedo') }}</BodyText>
            </div>
            <div class="employment-values">
                <img :src="valuesIcon3" class="employment-values-img border-r-2"/>
                <BodyText class="max-w-auto text-white text-3xl px-16 py-4">{{ $t('aboutpage.values.working') }}</BodyText>
            </div>
            <div class="employment-values">
                <img :src="valuesIcon2" class="employment-values-img border-r-2"/>
                <BodyText class="max-w-auto text-white text-3xl px-16 py-4">{{ $t('aboutpage.values.wetake') }}</BodyText>
            </div>
            <div class="employment-values">
                <img :src="valuesIcon4" class="employment-values-img border-r-2"/>
                <BodyText class="max-w-auto text-white text-3xl px-16 py-4">{{ $t('aboutpage.values.amodern') }}</BodyText>
            </div>
        </div>
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
</style>
