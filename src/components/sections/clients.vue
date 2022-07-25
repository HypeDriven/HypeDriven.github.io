<template>
    <SectionContainer>
        <div class="flex flex-col gap-8 max-w-lg m-auto">
            <SectionTitle class="text-white h-fit m-auto text-4xl max-w-full px-2 text-center">
                {{ $t('homepage.clients.title') }}
            </SectionTitle>
        </div>
        <div class="flex gap-10 flex-wrap justify-evenly">
            <div v-for="(client, i) in clients" :key="i">
                <img :src="client.url" alt="" class="image-content">
            </div>
        </div>
    </SectionContainer>
</template>

<script>
import SectionContainer from "./container";
import SectionTitle from "./title";
export default {
    name: "ClientsSectionComponent",
    components: {
        SectionContainer,
        SectionTitle,
    },
    data: function () {
        return {
            clients: [
                {
                    url: require('../../assets/img/icons/client.svg')
                },
                {
                    url: require('../../assets/img/icons/client.svg')
                },
                {
                    url: require('../../assets/img/icons/client.svg')
                },
                {
                    url: require('../../assets/img/icons/client.svg')
                },
                {
                    url: require('../../assets/img/icons/client.svg')
                }
            ]
        };
    }
};
</script>

<style>
.image-content {
    max-width: 136px;
    max-height: 50px;;
}
</style>
