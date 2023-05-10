<template>
    <SectionContainer class="bg-primary-bg">
        <div>
            <SectionTitle class="text-[#66C3CD] h-fit text-center m-auto text-6xl max-w-full mb-16">
                {{ $t('diversityPage.qote.title') }}
            </SectionTitle>
            <div class="relative flex justify-around">
                <img :src="quoteImg" class="absolute top-0 left-0"/>
                <div class="max-w-[50%] border-r-2"> <!--щоб картинка блуа ширша, треба забрати макс з ширини-->
                    <img :src="diversityQoteImg" class="w-[100%]"/>
                </div>
                <div class="flex flex-col justify-between max-w-[50%] px-20 pt-20">
                    <span class="text-3xl text-white italic font-bold">{{ $t('diversityPage.qote.phrase') }}</span>
                    <div class="flex flex-col">
                        <span class="text-xl text-[#66C3CD] font-bold">{{ $t('diversityPage.qote.whoSaid') }}</span>
                        <span class="text-sm text-white">{{ $t('diversityPage.qote.position') }}</span>
                    </div>
                </div>
                <img :src="quoteImg" class="absolute bottom-0 right-0 rotate-180"/>
            </div>
        </div>
    </SectionContainer>
</template>
<script>
import SectionContainer from "../container.vue";
import SectionTitle from "../title";

export default {
    name: "DiversityPageQoteComponent",
    components: {
        SectionContainer,
        SectionTitle
    },
    data: function () {
        return {
            diversityQoteImg: require('@/assets/img/images/diversitypage-qote-img1.png'),
            quoteImg: require('@/assets/img/images/diversitypage-qote.svg')
        };
    }
}
</script>