<template>
    <SectionContainer class="relative">
        <v-card elevation="4" class="contact-us-card flex sm:p-16 lg:p-36 justify-center flex-col card-bg">
            <SectionTitle class="text-[#00007E] h-fit m-auto text-6xl max-w-4xl text-center">
                {{ $t('homepage.contactus.title') }}
            </SectionTitle>
            <SectionSubTitle class="text-white h-fit m-auto text-xl max-w-3xl px-2 text-center">
                {{ $t('homepage.contactus.subtitle') }}
            </SectionSubTitle>
            <div class="m-auto">
                <Button>{{ $t('button.contactus') }}</Button>
            </div>
        </v-card>
    </SectionContainer>
</template>

<script>
import SectionContainer from "../container";
import SectionTitle from "../title";
import Button from "../../buttons";
export default {
    name: "ContactUsSectionComponent",
    components: {
        SectionContainer,
        SectionTitle,
        Button,
    },
    data: function () {
        return {
        };
    }
};
</script>

<style scoped>
.contact-us-card {
    height: 500px;
    margin: 0 auto;
}
.card-bg {
    background-image: url('../../../assets/img/images/contact-us-bg.png');
    background-repeat: no-repeat;
    background-size: contain;
    background-position-y: center;
}
</style>
