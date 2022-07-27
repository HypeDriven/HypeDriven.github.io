<template>
    <SectionContainer>
        <div class="flex gap-10 flex-wrap justify-between flex-row">
            <Card class="w-full" :reverse="true" :url="cardUrl">
                <div class="flex flex-col gap-6 self-center">
                    <Header1 class="text-white max-w-max text-3xl font-extrabold">
                        {{ $t('aboutpage.jobs.title') }}
                    </Header1>
                    <BodyText class="text-white max-w-max whitespace-pre-wrap leading-10 text-2xl font-bold">
                        {{ $t('aboutpage.jobs.subtitle') }}
                    </BodyText>
                    <div @click="changeShowEmail">
                        <Button :class="!showEmail ? 'block' : 'hidden'">{{ $t('button.searchjob') }}</Button>
                        <div :class="showEmail ? 'block' : 'hidden'">
                            <BodyText class="text-white max-w-max whitespace-pre-wrap leading-10 text-2xl font-bold">
                                <span>{{ $t('info.emailus') }}</span> <span class="text-violet-700">{{ $t('info.email')
                                }}</span>
                            </BodyText>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    </SectionContainer>
</template>

<script>
import SectionContainer from "../container";
import Card from "../../card/";
import Button from "../../buttons";
import Header1 from "../../text/header/header_1.vue";
import BodyText from "../../text/body/body.vue";
export default {
    name: "JobsSectionComponent",
    components: {
        SectionContainer,
        Card,
        Button,
        Header1,
        BodyText
    },
    data: function () {
        return {
            showEmail: false,
            cardUrl: require('../../../assets/img/images/jobs.png')
        };
    },
    methods: {
        changeShowEmail() {
            this.showEmail = !this.showEmail;
        }
    }
};
</script>

<style>
</style>
