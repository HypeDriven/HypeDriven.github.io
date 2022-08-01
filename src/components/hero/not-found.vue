<template>
    <SectionContainer class="relative mt-16">
        <v-card elevation="4" class="card flex gap-8 p-6 sm:p-16 lg:p-36 justify-center flex-col card-bg">
            <div class="m-auto">
                <Header1 class="text-red-600 text-center text-9xl font-extrabold">
                    {{ $t('404.hero.title') }}
                </Header1>
                <BodyText class="text-red-500 text-center text-5xl font-extrabold">
                    {{ $t('404.hero.subtitle') }}
                </BodyText>
            </div>
        </v-card>
    </SectionContainer>
</template>

<script>
import SectionContainer from "../sections/container";
import Header1 from "../text/header/header_1.vue";
import BodyText from "../text/body/body.vue";
export default {
    name: "NotFoundHeroComponent",
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

<style scoped>
.card-bg {
    background-image: url('../../assets/img/images/building.png');
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 500px;
}
</style>
