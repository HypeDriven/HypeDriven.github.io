<template>
    <SectionContainer class="relative mt-16">
        <v-card elevation="4" class="card flex gap-8 p-6 sm:p-16 lg:p-36 justify-center flex-col card-bg">
        </v-card>
    </SectionContainer>
</template>

<script>
import SectionContainer from "../sections/container";
export default {
    name: "AboutUsHeroComponent",
    components: {
        SectionContainer,
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
