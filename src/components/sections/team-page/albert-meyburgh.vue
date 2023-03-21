<template>
    <SectionContainer class="bg-main-bg">
        <div class="flex justify-around">
            <div class="max-w-[50%]">
                <img :src="albertAvatar"/>
            </div>
            <div class="max-w-[50%] p-20">
                <SectionTitle class="text-white h-fit mb-4">{{ $t('teamPage.albertMeyburgh.title') }}</SectionTitle>
                <span class="text-[#00007E]">{{ $t('teamPage.albertMeyburgh.position') }}</span>
                <SectionSubTitle class="mt-8 text-white h-fit text-2xl">{{ $t('teamPage.albertMeyburgh.subtitle') }}</SectionSubTitle>
            </div>
        </div>
    </SectionContainer>
</template>

<script>
import SectionContainer from "../container.vue";
import SectionTitle from "../title";
import SectionSubTitle from "../sub-title.vue"
    export default {
        name: "TeamPageAlbertComponent",
        components: {
            SectionContainer,
            SectionTitle,
            SectionSubTitle
        },
        data: function() {
            return {
                albertAvatar: require('@/assets/img/images/teampage-albert-avatar.png')
            }
        }
    }
</script>