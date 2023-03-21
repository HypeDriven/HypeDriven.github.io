<template>
    <SectionContainer class="bg-primary-bg">
        <div class="p-5">
            <SectionTitle class="text-[#66C3CD] h-fit text-6xl max-w-full tracking-[10px] text-center uppercase mb-8">
                {{ $t('teamPage.hero.title') }}<span class="text-white"> team</span>
            </SectionTitle>
            <SectionSubTitle class="text-white h-fit text-xl font-bold text-center mb-8">
                {{ $t('teamPage.hero.subtitle') }}
            </SectionSubTitle>
            <div class="flex justify-center w-full">
                <Button class="bg-[#66C3CD] text-[#00007E]">{{ $t('button.contactUs') }}</Button>
            </div>
            
            <img :src="teamPageHeroImhg" class="w-full"/>
            <SectionSubTitle class="text-white h-fit text-base text-center max-w-3xl m-auto mt-8">
                {{ $t('teamPage.hero.text') }}
            </SectionSubTitle>
        </div>
    </SectionContainer>
</template>

<script>
import SectionContainer from "../sections/container.vue";
import SectionTitle from "../sections/title";
import SectionSubTitle from "../sections/sub-title.vue"
import Button from "../buttons";
export default {
    name: 'TeamPageHeroComponent',
    components: {
        SectionContainer,
        SectionTitle,
        SectionSubTitle,
        Button
    },
    data: function () {
        return {
            teamPageHeroImhg: require('@/assets/img/images/teampage-hero-illustration.png')
        };
    },
}
</script>