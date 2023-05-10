<template>
    <SectionContainer class="bg-main-bg" >
            <div class="flex justify-between"> 
                <div class="technologies-hero-card-content">
                        <SectionTitle class="text-white h-fit m-auto text-6xl max-w-full text-left uppercase mt-[-20px]">
                            {{ $t('technologiesPage.hero.title') }}
                        </SectionTitle>
                        <SectionSubTitle class="text-[#000026] h-fit ml-16 text-xl font-bold text-left mb-16">
                            {{$t('technologiesPage.hero.subtitle')}}
                        </SectionSubTitle>
                                
                        <Button class="w-[150px] ml-16 py-4 rounded-3xl">{{ $t('button.contactUs') }}</Button>

                </div>
                <div class="technologies-hero-card-content">  
                    <img :src="img" class="technologies-hero-card-content-img"/>    
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
    name: "TechnologiesPageHeroComponent",
    components: {
        SectionContainer,
        SectionTitle,
        Button,
        SectionSubTitle
    },
    data: function () {
        return {
            img: require('../../assets/img/images/technologiespage-hero-img.png')
        };
    }
};
</script>

<style>
.technologies-hero-card-content {
    max-width: 50%;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.technologies-hero-card-content-img {
    width: 100%;
    height: 100%;
}
</style>
