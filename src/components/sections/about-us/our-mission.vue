<template>
    <SectionContainer>
        <div class="flex flex-col gap-6 m-auto">
            <Header1 class="text-white max-w-auto text-3xl font-extrabold text-center">
                {{ $t('homepage.hiring.title') }}
            </Header1>
            <BodyText class="text-white max-w-auto whitespace-pre-wrap leading-10 text-2xl font-bold text-center">
                {{ $t('homepage.hiring.subtitle') }}
            </BodyText>
        </div>
    </SectionContainer>
</template>

<script>
import SectionContainer from "../container";
import Header1 from "../../text/header/header_1.vue";
import BodyText from "../../text/body/body.vue";
export default {
    name: "OurMissionSectionComponent",
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
</style>
