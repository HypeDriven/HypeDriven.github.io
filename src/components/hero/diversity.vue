<template>
    <SectionContainer class="bg-main-bg" >
            <div class="flex justify-between"> 
                <div class="diversity-hero-card-content">
                        <SectionTitle class="text-white h-fit m-auto text-6xl max-w-full tracking-[10px] text-left uppercase mb-16">
                            {{ $t('diversityPage.hero.title') }}<span class="text-[#00007E]"> and inclusion</span>
                        </SectionTitle>
                        <SectionSubTitle class="text-[#000026] h-fit text-xl font-bold text-left mb-16">
                            {{$t('diversityPage.hero.subtitle')}}
                        </SectionSubTitle>
                                
                        <Button class="w-[150px] py-4 rounded-3xl">{{ $t('button.joinUs') }}</Button>

                </div>
                <div class="diversity-hero-card-content">  
                    <img :src="img" class="diversity-hero-card-content-img"/>    
                </div>
            </div>
    </SectionContainer>
</template>

<script>
import SectionContainer from "../sections/container.vue";
import SectionTitle from "../sections/title";
import SectionSubTitle from "../sections/sub-title.vue"
import Button from "../buttons";
export default {
    name: "DiversityPageHeroComponent",
    components: {
        SectionContainer,
        SectionTitle,
        Button,
        SectionSubTitle
    },
    data: function () {
        return {
            img: require('../../assets/img/images/diversitypage-hero-img.png')
        };
    }
};
</script>

<style>
.diversity-hero-card-content {
    max-width: 50%;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.diversity-hero-card-content-img {
    width: 90%;
    height: 100%;
    margin-bottom: -132px;
}
</style>
