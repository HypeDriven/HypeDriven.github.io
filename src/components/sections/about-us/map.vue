<template>
    <SectionContainer class="bg-main-bg md:px-0 sm:px-4 xs:px-4 xxs:px-2">
        <div class="section-bg min-h-max flex">
            <div class="flex flex-col gap-6 max-w-md self-center sm:self-end xs:self-end xxs:self-end">
                <Header1 class="text-white max-w-max text-6xl xs:text-5xl xxs:text-5xl font-extrabold"> 
                    {{ $t('aboutpage.weare.title') }}
                </Header1>
                <BodyText class="text-[#00007E] max-w-max whitespace-pre-wrap leading-10 text-2xl sm:text-2xl xs:text-2xl xxs:text-2xl font-bold">
                    {{ $t('aboutpage.weare.subtitle') }}
                </BodyText>
            </div>
        </div>
    </SectionContainer>
</template>

<script>
import SectionContainer from "../container";
import Header1 from "../../text/header/header_1.vue";
import BodyText from "../../text/body/body.vue";
export default {
    name: "MapSectionComponent",
    components: {
        SectionContainer,
        Header1,
        BodyText
    },
    data: function () {
        return {
        };
    }
};
</script>

<style>
.section-bg {
    background-image: url('../../../assets/img/images/aboutpage-ourstory-map.png'); 
    height: 90vh;
    background-repeat: no-repeat;
    background-size: contain;
}
@media (min-width: 576px) and (max-width: 767.5px) {
    .section-bg {
        height: 80vh;
        background-repeat: no-repeat;
        background-size: contain;
        background-position: 100% 20%;
        padding-bottom: 80px;
    }
}
@media (min-width: 425px) and (max-width: 575.5px) {
    .section-bg {
        height: 80vh;
        background-repeat: no-repeat;
        background-size: contain;
        background-position: 100% 20%;
        padding-bottom: 80px;
    }
}
@media (min-width: 320px) and (max-width: 424.5px) {
    .section-bg {
        background-image: url('../../../assets/img/images/aboutpage-ourstory-map.png');
        height: 70vh;
        background-repeat: no-repeat;
        background-size: contain;
        background-position: 100% 20%;
        padding-bottom: 80px;
    }
}
</style>
