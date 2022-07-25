<template>
    <SectionContainer class="relative">
        <v-card elevation="4" class="card flex gap-8 p-6 sm:p-16 lg:p-36 justify-center flex-col card-bg">
            <SectionTitle class="text-white h-fit m-auto text-4xl max-w-xl px-2 text-center">
                {{ $t('homepage.contactus.title') }}
            </SectionTitle>
            <SectionSubTitle class="text-white h-fit m-auto max-w-3xl px-2 text-center">
                {{ $t('homepage.contactus.subtitle') }}
            </SectionSubTitle>
            <div class="m-auto">
                <Button>{{ $t('button.contactus') }}</Button>
            </div>
        </v-card>
    </SectionContainer>
</template>

<script>
import SectionContainer from "./container";
import SectionTitle from "./title";
import Button from "../buttons";
export default {
    name: "ContactUsSectionComponent",
    components: {
        SectionContainer,
        SectionTitle,
        Button,
    },
    data: function () {
        return {
            cardUrl: require('../../assets/img/images/banking.png')
        };
    }
};
</script>

<style>
.card-bg {
    background-image: url('../../assets/img/images/contact-us-bg.png');
    background-repeat: no-repeat;
    background-size: cover;
}
</style>
