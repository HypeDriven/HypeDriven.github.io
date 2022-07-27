<template>
    <SectionContainer>
        <div class="section-bg min-h-max flex">
            <div class="flex flex-col gap-6 max-w-md self-center">
                <Header1 class="text-white max-w-max text-3xl font-extrabold">
                    {{ $t('aboutpage.weare.title') }}
                </Header1>
                <BodyText class="text-white max-w-max whitespace-pre-wrap leading-10 text-2xl font-bold">
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
    background-image: url('../../../assets/img/images/map.svg');
    /* Full height */
    height: 90vh;

    /* Center and scale the image nicely */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
</style>
