<template>
    <SectionContainer class="relative sm:py-10 xs:py-10 xxs:py-10">
        <div class="contact-us-card xl:h-[500px] lg:h-[350px] md:h-[300px] sm:h-[270px] xs:h-[220px] xxs:h-[270px] lg:gap-5 md:gap-4 sm:gap-2 xs:gap-2 xxs:gap-0 flex xxs:p-8 xs:p-12 sm:p-16 md:p-12 lg:p-36 justify-center flex-col card-bg">
            <SectionTitle class="text-[#00007E] h-fit m-auto xl:text-6xl lg:text-5xl md:text-5xl sm:text-4xl xs:text-4xl xxs:text-5xl max-w-4xl text-center">
                {{ $t('homepage.contactus.title') }}
            </SectionTitle>
            <SectionSubTitle class="text-white h-fit m-auto xl:text-xl lg:text-lg md:text-base xxs:text-lg xs:max-w-xs max-w-3xl px-2 text-center"> 
                {{ $t('homepage.contactus.subtitle') }}
            </SectionSubTitle>
            <div class="m-auto">
                <router-link to="/contact-us">
                    <Button class="lg:w-[145px] lg:text-sm lg:py-3 lg:px-8">{{ $t('button.contactus') }}</Button> 
                </router-link>
            </div>
        </div>
    </SectionContainer>
</template>

<script>
import SectionContainer from "../container";
import SectionTitle from "../title";
import Button from "../../buttons";
import SectionSubTitle from "../sub-title";
export default {
    name: "ContactUsSectionComponent",
    components: {
        SectionContainer,
        SectionTitle,
        Button,
        SectionSubTitle
    },
    data: function () {
        return {
        };
    }
};
</script>

<style scoped>
.contact-us-card {
    margin: 0 auto;
}
.card-bg {
    background-image: url('../../../assets/img/images/contact-us-bg.png');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
}

@media (min-width: 768px) and (max-width: 1023.5px) { 
    .card-bg {
        background-image: url('../../../assets/img/images/contact-us-bg.png');
        background-size: 100% 100%;
    }    
}

@media (min-width: 576px) and (max-width: 767.5px) {  
    .card-bg {
        background-image: url('../../../assets/img/images/contact-us-bg.png');
        background-size: 100% 90%;
    }    
}

@media (min-width: 425px) and (max-width: 575.5px) { 
    .card-bg {
        background-image: url('../../../assets/img/images/contact-us-bg.png');
        background-size: 98% 90%;
        background-position: 50% 100%;
    }    
}

@media (min-width: 375px) and (max-width: 424.5px) { 
    .card-bg {
        background-image: url('../../../assets/img/images/contact-us-mobile-bg.png');
        background-size: 80% 100%;
        padding: 40px;
    }    
}

@media (min-width: 320px) and (max-width: 374.5px) {
    .card-bg {
        background-image: url('../../../assets/img/images/contact-us-mobile-bg.png');
        background-size: 90% 100%;
    }    
}
</style>
