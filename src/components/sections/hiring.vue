<template>
    <SectionContainer>
        <div class="flex gap-10 flex-wrap justify-between flex-row">
            <Card class="w-full" :reverse="true" :url="cardUrl">
                <div class="flex flex-col gap-6 self-center">
                    <Header1 class="text-white max-w-max text-3xl font-extrabold">
                        {{ $t('homepage.hiring.title') }}
                    </Header1>
                    <BodyText class="text-white max-w-max whitespace-pre-wrap leading-10 text-2xl font-bold">
                        {{ $t('homepage.hiring.subtitle') }}
                    </BodyText>
                    <div>
                        <Button>{{ $t('button.searchjob') }}</Button>
                    </div>
                </div>
            </Card>
        </div>
    </SectionContainer>
</template>

<script>
import SectionContainer from "./container";
import Card from "../card/";
import Button from "../buttons";
import Header1 from "../text/header/header_1.vue";
import BodyText from "../text/body/body.vue";
export default {
    name: "HiringSectionComponent",
    components: {
        SectionContainer,
        Card,
        Button,
        Header1,
        BodyText
    },
    data: function () {
        return {
            cardUrl: require('../../assets/img/images/hiring-image.png')
        };
    }
};
</script>

<style>
</style>
