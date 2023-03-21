<template>
    <div class="challenges-bg pb-20">
        <SectionContainer>
            <Header1 class="text-[#00007E] max-w-2xl text-2xl font-extrabold leading-[80px]">
                {{ $t('aboutpage.challenges.title') }}
            </Header1>
        </SectionContainer>
    <div class="flex px-12">
        <div class="challenges-card ">
            <Header4 class="max-w-auto font-bold text-[#66C3CD] mb-[30px] px-16">{{ $t('aboutpage.challenges.digital.title') }}</Header4>
            <BodyText class="max-w-auto text-black text-2xl px-20 mb-[100px]">{{ $t('aboutpage.challenges.digital.subtitle') }}</BodyText>
        </div>
        <div class="challenges-card ">
            <Header4 class="max-w-xs font-bold text-[#66C3CD] mb-[30px] px-16">{{ $t('aboutpage.challenges.cost.title') }}</Header4>
            <BodyText class="max-w-auto text-black text-2xl px-20">{{ $t('aboutpage.challenges.cost.subtitle') }}</BodyText>
        </div>
        <div class="challenges-card ">
            <Header4 class="max-w-auto font-bold text-[#66C3CD] mb-[30px] px-16">{{ $t('aboutpage.challenges.itexp.title') }}</Header4>
            <BodyText class="max-w-auto text-black text-2xl px-20 mb-[130px]">{{ $t('aboutpage.challenges.itexp.subtitle') }}</BodyText>
        </div>
    </div>
    </div>
    
</template>

<script>
import SectionContainer from "../container";
import Header1 from "../../text/header/header_1.vue";
import Header4 from "../../text/header/header_4.vue";
import BodyText from "../../text/body/body-textXL.vue";
export default {
    name: "ChallengesSectionComponent",
    components: {
        SectionContainer,
        Header1,
        Header4,
        BodyText
    },
    data: function () {
        return {
        };
    }
};
</script>

<style>
.challenges-bg {
    background-color: white;
}

.challenges-card {
    max-width: 34%;
    cursor: pointer;
}

.challenges-card::before {
    content: url("../../../assets/img/images/aboutus-challenges-crossIcon.svg");
    background-repeat: no-repeat;
    background-size: contain;
    transform: translateY(140px);
    margin-left: 20px;
    display: inline-block;
}

.challenges-card::after {
    content: url("../../../assets/img/images/aboutus-challenges-crossIcon.svg");
    background-repeat: no-repeat;
    background-size: contain;
    margin-left: 20px;
    /* transform: translateX(380px); */
    display: inline-block;
}

.challenges-card:hover {
    transition: .8s;
    box-shadow: 0px 0px 10px 0px;
    border-radius: 30px;
    /* transform: translateY(-20px); */
    /* transform: translateX(20px); */
    animation: challenges-card-bounce 5s ease-in-out infinite;
}

@keyframes challenges-card-bounce {
    0% {
        transform: translateY(0px);
    }
    35% {
        transform: translateY(-20px);
    }
    75% {
        transform: translateY(20px);
    }
    100% {
        transform: translateY(0px);
    }
}
</style>
