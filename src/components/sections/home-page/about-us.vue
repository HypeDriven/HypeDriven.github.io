<template>
    <SectionContainer>
        <div class="flex gap-10 flex-wrap justify-between flex-row">
            <Card class="w-full" :reverse="false" :url="cardUrl">
                <div class="flex flex-col gap-6 max-w-xl self-center">
                    <Header1 class="text-white text-3xl font-extrabold">
                        {{ $t('homepage.aboutus.title') }}
                    </Header1>
                    <BodyText class="text-turquoise-blue text-2xl font-bold">
                        {{ $t('homepage.aboutus.subtitle') }}
                    </BodyText>
                    <div class="flex flex-col gap-5">
                        <div class="text-white flex gap-3">
                            <img :src="mapIcon" />
                            <span>
                                {{ $t('homepage.aboutus.location') }}
                            </span>

                        </div>
                        <div class="text-white flex gap-3">
                            <img :src="usersIcon" /> <span>
                                {{ $t('homepage.aboutus.team') }}
                            </span>
                        </div>
                    </div>
                    <div>
                        <router-link to="/about-us">
                            <Button>{{ $t('button.learnmore') }}</Button>
                        </router-link>
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
import mapIcon from "../../../assets/img/icons/map-pin.svg";
import usersIcon from "../../../assets/img/icons/users.svg";
export default {
    name: "AboutUsSectionComponent",
    components: {
        SectionContainer,
        Card,
        Button,
        Header1,
        BodyText
    },
    data: function () {
        return {
            mapIcon: mapIcon,
            usersIcon: usersIcon,
            cardUrl: require('../../../assets/img/images/banking.png')
        };
    }
};
</script>

<style>
</style>
